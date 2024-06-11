import { File } from 'npm:megajs'

// Get the shared file URL
const url = prompt('Enter the URL of a shared MEGA file or folder:')

// Create a File object
const mainFile = File.fromURL(url)

// Setup an user-agent
mainFile.api.userAgent = 'MEGAJS-Demos (+https://mega.js.org/)'

// Load attributes and get the selected file
let selectedFile = await mainFile.loadAttributes()
if (!selectedFile) throw Error('File not found!')

// For links of folders pointing to a specific file the mainFile
// will point to the folder and the selectedFile will point to
// the file, for all other cases those two variables will be the same

// Handle directories:
if (selectedFile.children) {
  console.log('It points to a directory, downloading the first file:')
  const firstChild = selectedFile.find(node => !node.children, true)
  if (!firstChild) throw Error('Folder have no children!')
  selectedFile = firstChild
}

console.log('File info:')
console.log(selectedFile)

// You need to set forceHttps to false in order to make
// Deno connect to the unsafe MEGA download servers
// (which use out-of-date TLS configurations)
// That's not needed in Node.js nor in browsers
const downloadStream = await selectedFile.download({ forceHttps: false })

// Open file for writing and get the writer
const denoFile = await Deno.create(selectedFile.name)
const writer = denoFile.writable.getWriter()

// Iterate the download stream and write to the file
for await (const data of downloadStream) {
  await writer.write(data)
}

// Finally close the writer
await writer.close()
