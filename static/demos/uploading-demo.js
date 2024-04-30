import { Storage } from 'npm:megajs'

const email = prompt('Enter your email:')
const password = prompt('Enter your password (will be visible):')

const storage = await new Storage({ email, password }).ready

const name = prompt('Enter a file name:')
const data = await Deno.readFile(name)
const file = await storage.upload({ name, forceHttps: false }, data).complete
console.log('The file was uploaded!', file)
