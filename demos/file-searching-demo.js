import { Storage } from 'npm:megajs'

const email = prompt('Enter your email:')
const password = prompt('Enter your password (will be visible):')

const storage = await new Storage({ email, password }).ready

console.log('Those are all .jpeg files in the storage:')
console.log(storage.filter(e => e.endsWith('.jpeg'), true))

console.log('Those are all README files in the storage:')
console.log(storage.filter('README', true))
