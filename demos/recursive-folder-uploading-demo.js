import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

const folderName = prompt('Enter a folder name:')
const folderStat = await Deno.stat(folderName)
if (!folderStat.isDirectory) throw Error('Not a directory!')

async function handleFolder (path, name, rootNode) => {
  // Create a folder on the remote node
  const megaFolder = await rootNode.mkdir(name)

  // Then upload files into it
  for await (const entry of Deno.readDir(path)) {
    const filePath = path + '/' + entry.name
    const fileStat = await Deno.stat(filePath)

    // If the file is a directory, just recurse
    if (fileStat.isDirectory) {
      await handleFolder(filePath, entry.name, megaFolder)
    } else {
      const data = await Deno.readFile(filePath)
      await megaFolder.upload(entry.name, data).complete
    }
  }
}

await handleFolder(folderName, folderName, storage.children)
console.log('The folder was uploaded!', megaFolder)
