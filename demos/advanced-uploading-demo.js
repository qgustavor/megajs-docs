import { getLoggedInStorage } from './logging-in-demo.js'
import { basename, join } from 'https://deno.land/std@0.224.0/path/mod.ts'
const storage = await getLoggedInStorage()

const directoryName = basename(Deno.cwd())
const baseFolder = storage.find(directoryName) ?? await storage.mkdir(directoryName)

await uploadDirectory(baseFolder, Deno.cwd())

async function uploadDirectory (megaFolder, folderPath) {
  for await (const entry of Deno.readDir(folderPath)) {
    if (entry.isDirectory) {
      const childFolder = await megaFolder.mkdir(entry.name)
      await uploadDirectory(childFolder, join(folderPath, entry.name))
    } else {
      await uploadFile(megaFolder, folderPath, entry.name)
    }
  }
}

async function uploadFile (megaFolder, folderPath, name) {
  // You need to set forceHttps to false in order to make
  // Deno connect to the unsafe MEGA upload servers
  // (which use out-of-date TLS configurations)
  // That's not needed in Node.js nor in browsers
  const uploadStream = megaFolder.upload({ name, forceHttps: false })

  // Get the file and its reader
  const denoFile = await Deno.open(join(folderPath, name))
  const inputReader = denoFile.readable.getReader()

  // Read the file and pass the data to the upload stream
  // (it's a Node.js Writable stream)
  while (true) {
    const result = await inputReader.read()

    if (result.value) {
      const canContinueWritting = uploadStream.write(result.value)
      if (!canContinueWritting) {
        // Upload stream is under pressure, wait it to drain
        await new Promise(resolve => uploadStream.once('drain', resolve))
      }
    }
    
    if (result.done) {
      // End the stream when there is no more data to be read
      uploadStream.end()

      // And break out the while loop
      break
    }
  }

  // Wait for the upload to complete and get the new file object
  await uploadStream.complete
}
