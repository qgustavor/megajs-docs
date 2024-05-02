import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

console.log('Choose one of the following files or folders:')
console.log(storage.root.children.map(e => e.name))

const filename = prompt('Enter a file name (case sensitive):')
const file = storage.find(filename)
if (!file) throw Error('File not found!')

const link = await file.link()
console.log(link)
