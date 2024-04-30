import { Storage } from 'npm:megajs'

const email = prompt('Enter your email:')
const password = prompt('Enter your password (will be visible):')

const storage = await new Storage({ email, password }).ready

const folderName = prompt('Enter a folder name:')
const folderStat = await Deno.stat(folderName)
if (!folderStat.isDirectory) throw Error('Not a directory!')

const handleFolder = async (path, name, rootNode) => {
  // Create a folder on the remote node
  const megaFolder = await rootNode.mkdir(name)

  // Then upload files into it
  for await (const entry of Deno.readDir(path)) {
    const filePath = path + '/' + entry.name
    const fileStat = await Deno.stat(filePath)

    if (fileStat.isDirectory) {
      await handleFolder(filePath, entry.name, megaFolder)
    } else {
      const data = await Deno.readFile(filePath)
      await megaFolder.upload({
        name: entry.name,
        forceHttps: false
      }, data).complete
    }
  }
}

await handleFolder(folderName, folderName, storage.children)
console.log('The folder was uploaded!', megaFolder)
