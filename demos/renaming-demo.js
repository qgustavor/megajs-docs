import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

console.log('Choose one of the following files:')
console.log(storage.root.children.filter(e => !e.children).map(e => e.name))

const filename = prompt('Enter a file name (case sensitive):')
const file = storage.find(filename)
if (!file) throw Error('File not found!')

const newName = prompt('Enter a new file name:')
await file.rename(newName)
