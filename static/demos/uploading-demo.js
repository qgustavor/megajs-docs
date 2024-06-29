import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

const name = prompt('Enter a file name:')
const data = await Deno.readFile(name)

const file = await storage.upload({ name }, data).complete
console.log('The file was uploaded!', file)
