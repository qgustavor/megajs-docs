import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

console.log('Choose one of the following files:')
console.log(storage.root.children.filter(e => !e.children).map(e => e.name))

const filename = prompt('Enter a file name (case sensitive):')
const file = storage.find(filename)
if (!file) throw Error('File not found!')

// You need to set forceHttps to false in order to make
// Deno connect to the unsafe MEGA download servers
// (which use out-of-date TLS configurations)
// That's not needed in Node.js nor in browsers
const data = await file.downloadBuffer({ forceHttps: false })
await Deno.writeFile(file.name, data)
