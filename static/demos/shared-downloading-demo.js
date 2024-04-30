import { File } from 'npm:megajs'

const url = prompt('Enter the URL of a shared MEGA file or folder:')
const mainFile = File.fromURL(url)
const selectedFile = await mainFile.loadAttributes()

console.log('File info:')
console.log(selectedFile)

if (selectedFile.children) {
  console.log('It points to a directory, downloading the first file:')
  const firstChild = selectedFile.children.find(e => !e.children)
  if (!firstChild) throw Error('Folder have no children!')
  const data = await firstChild.downloadBuffer({ forceHttps: false })
  await Deno.writeFile(firstChild.name, data)
} else {
  const data = await selectedFile.downloadBuffer({ forceHttps: false })
  await Deno.writeFile(selectedFile.name, data)
}
