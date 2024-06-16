import { File, verify } from 'npm:megajs'
import { join } from 'https://deno.land/std@0.224.0/path/mod.ts'
import { parseArgs } from 'jsr:@std/cli/parse-args'
import ProgressBar from 'https://deno.land/x/progress@v1.4.5/mod.ts'
import { orderBy } from 'npm:natural-orderby'

// Get the shared file URL from Deno.args or by prompting
const args = parseArgs(Deno.args, { collect: ['filter', 'ignore', 'verbose'] })
const url = args._[0] ?? prompt('Enter the URL of a shared MEGA file or folder:')

// Create a File object
const mainFile = File.fromURL(url)

// Setup an user-agent
mainFile.api.userAgent = 'MEGAJS-Demos (+https://mega.js.org/)'

// Load attributes and get the selected file
const selectedNode = await mainFile.loadAttributes()

// Download the file
if (!selectedNode.name) throw Error('You should include the decryption key!')
await downloadFile(selectedNode, args.dir ?? Deno.cwd())

async function downloadFile (megaFile, folderPath) {
  // Checks for directory nodes
  if (megaFile.directory) {
    // Create a new directory or use an existent one
    const childFolderPath = join(folderPath, megaFile.name)
    const childFolderStats = await Deno.stat(childFolderPath).catch(() => null)
    if (!childFolderStats) {
      await Deno.mkdir(childFolderPath)
    } else if (!childFolderStats.isDirectory) {
      throw Error(childFolderPath + ' is not a directory!')
    }
    
    // Sort children to avoid files being downloaded in a weird order
    const sortedChildren = orderBy(megaFile.children, e => e.name)

    // Download files into it
    for (const child of sortedChildren) {
      await downloadFile(child, childFolderPath)
    }
    return
  }

  // Handle filters (files need to match all filters)
  if (args.filter) {
    for (const filter of args.filter) {
      if (!megaFile.name.includes(filter)) {
        if (args.verbose) console.log(megaFile.name, 'does not match filter')
        return
      }
    }
  }
  // Handle ignores (files need to not match all ignores)
  if (args.ignore) {
    for (const ignore of args.ignore) {
      if (megaFile.name.includes(ignore)) {
        if (args.verbose) console.log(megaFile.name, 'matches ignore filter')
        return
      }
    }
  }

  // Check the file stats in order to handle finished or interrupted downloads
  const filePath = join(folderPath, megaFile.name)
  const fileStats = await Deno.stat(filePath).catch(() => null)

  // Skip if there is no data left to download
  if (fileStats && fileStats.size >= megaFile.size) {
    if (args.verbose) console.log(megaFile.name, 'was already downloaded')
    return
  }

  console.log('Downloading', megaFile.name, 'into', '"' + folderPath + '"')
  if (fileStats) console.log('Continuing interrupted download at', fileStats.size, 'bytes')

  // Open file for writing and get the writer
  const denoFile = fileStats
    ? await Deno.open(filePath, { append: true })
    : await Deno.create(filePath)
  const writer = denoFile.writable.getWriter()
  
  // Create a progress bar to track the download progress
  const progressBar = new ProgressBar({
    display: ':percent :bar :time/:eta',
    total: megaFile.size
  })
  progressBar.render(0)

  // You need to set forceHttps to false in order to make
  // Deno connect to the unsafe MEGA download servers
  // (which use out-of-date TLS configurations)
  // That's not needed in Node.js nor in browsers
  const downloadStream = await megaFile.download({
    // Start is needed to handle interrupted downloads
    start: fileStats ? fileStats.size : 0,
    forceHttps: false
  })
  
  // Handle progress events
  downloadStream.on('progress', event => {
    progressBar.render(event.bytesLoaded)
  })

  // Iterate the download stream and write to the file
  for await (const data of downloadStream) {
    await writer.write(data)
  }

  // Finally close the writer
  await writer.close()

  // Verify the file if the download started mid-file
  if (fileStats) {
    const isFileValid = await verifyFile(filePath, megaFile)
    if (isFileValid) {
      console.log(filePath, 'was been downloaded and verified')
    } else {
      // Warn the user if the file is corrupt and rename the file
      console.log(filePath, 'is corrupt')
      await Deno.rename(filePath, filePath + '.corrupt')
    }
  } else {
    console.log(filePath, 'was been downloaded')
  }
}

// This function verifies if the file ("filePath") matches the MEGA file ("megaFile")
// Returns true if the MAC verification passes, false if not
async function verifyFile (filePath, megaFile) {
  const verifyDenoFile = await Deno.open(filePath)
  const verifyReader = verifyDenoFile.readable.getReader()
  const verifyStream = verify(megaFile.key)
  
  // Handle the end and error events
  const verifyResultPromise = new Promise(resolve => {
    verifyStream.on('end', () => resolve(false))
    verifyStream.on('error', () => resolve(true))
  })
  
  // Convert from ReadableStream to a Node.js stream
  while (true) {
    const result = await verifyReader.read()
  
    if (result.value) {
      const canContinueWritting = verifyStream.write(result.value)
      if (!canContinueWritting) {
        // Verify stream is under pressure, wait it to drain
        await new Promise(resolve => verifyStream.once('drain', resolve))
      }
    }
  
    if (result.done) {
      // End the stream when there is no more data to be read
      verifyStream.end()
  
      // And break out the while loop
      break
    }
  }
  
  return verifyResultPromise
}
