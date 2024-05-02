import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

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
    // You need to set forceHttps to false in order to make
    // Deno connect to the unsafe MEGA upload servers
    // (which use out-of-date TLS configurations)
    // That's not needed in Node.js nor in browsers
    forceHttps: false
  }, data).complete
}

console.log('The folder was uploaded!', megaFolder)
