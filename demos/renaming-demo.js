import { Storage } from 'npm:megajs'

const email = prompt('Enter your email:')
const password = prompt('Enter your password (will be visible):')

const storage = await new Storage({ email, password }).ready

console.log('Choose one of the following files:')
console.log(storage.root.children.filter(e => !e.children).map(e => e.name))

const filename = prompt('Enter a file name (case sensitive):')
const file = storage.find(filename)
if (!file) throw Error('File not found!')

const newName = prompt('Enter a new file name:')
await file.rename(newName)
