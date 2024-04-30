import { Storage } from 'npm:megajs'

const email = prompt('Enter your email:')
const password = prompt('Enter your password (will be visible):')

const storage = await new Storage({ email, password }).ready

const folderName = prompt('Enter a folder name:')
const folderStat = await Deno.stat(folderName)
if (!folderStat.isDirectory) throw Error('Not a directory!')

// First create a folder
const megaFolder = await storage.mkdir(folderName)

// Then upload files into it
for await (const entry of Deno.readDir(folderName)) {
  const filePath = folderName + '/' + entry.name
  const fileStat = await Deno.stat(filePath)
  if (fileStat.isDirectory) {
    throw Error('Recursive folder uploading was not implemented in this demo! Check the other one!')
  }
  const data = await Deno.readFile(filePath)
  await megaFolder.upload({
    name: entry.name,
    forceHttps: false
  }, data).complete
}

console.log('The folder was uploaded!', megaFolder)
