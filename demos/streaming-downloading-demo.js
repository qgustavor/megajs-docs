import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

console.log('Choose one of the following files:')
console.log(storage.root.children.filter(e => !e.children).map(e => e.name))

const filename = prompt('Enter a file name (case sensitive):')
const file = storage.find(filename)
if (!file) throw Error('File not found!')

const downloadStream = await file.download()

// Open file for writing and get the writer
const denoFile = await Deno.create(file.name)
const writer = denoFile.writable.getWriter()

// Iterate the download stream and write to the file
for await (const data of downloadStream) {
  await writer.write(data)
}

// Finally close the writer
await writer.close()
