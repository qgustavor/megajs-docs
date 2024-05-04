import { File } from 'npm:megajs'

// Get the shared file URL
const url = prompt('Enter the URL of a shared MEGA file or folder:')

// Create a File object
const mainFile = File.fromURL(url)

// Setup an user-agent
mainFile.api.userAgent = 'MEGAJS-Demos (+https://mega.js.org/)'

// Load attributes and get the selected file
const selectedFile = await mainFile.loadAttributes()

// For links of folders pointing to a specific file the mainFile
// will point to the folder and the selectedFile will point to
// the file, for all other cases those two variables will be the same

console.log('File info:')
console.log(selectedFile)

if (selectedFile.children) {
  console.log('It points to a directory, downloading the first file:')
  const firstChild = selectedFile.find(node => !node.children, true)
  if (!firstChild) throw Error('Folder have no children!')
  const data = await firstChild.downloadBuffer({ forceHttps: false })
  await Deno.writeFile(firstChild.name, data)
} else {
  const data = await selectedFile.downloadBuffer({ forceHttps: false })
  await Deno.writeFile(selectedFile.name, data)
}
