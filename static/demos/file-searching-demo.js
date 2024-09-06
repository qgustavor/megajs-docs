import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

console.log('Those are all .jpeg files in the storage:')
console.log(storage.filter(e => e.name.endsWith('.jpeg'), true))

console.log('Those are all README files in the storage:')
console.log(storage.filter('README', true))
