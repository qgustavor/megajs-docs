import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

const name = prompt('Enter a file name:')
const data = await Deno.readFile(name)

// You need to set forceHttps to false in order to make
// Deno connect to the unsafe MEGA upload servers
// (which use out-of-date TLS configurations)
// That's not needed in Node.js nor in browsers
const file = await storage.upload({ name, forceHttps: false }, data).complete
console.log('The file was uploaded!', file)
