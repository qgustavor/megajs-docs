import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

console.log('Choose one of the following folders:')
console.log(storage.root.children.map(e => e.name))

const filename = prompt('Enter a folder name (case sensitive):')
const file = storage.find(filename)
if (!file) throw Error('File not found!')
if (!file.children) throw Error("That's not a folder!")

let key
for (let i = 0; i < 3; i++) {
  console.log('Choose a key:')
  console.log('(22 character string ending with A, Q, g or w)')
  const choosenKey = prompt('>')
  if (choosenKey && choosenKey.match(/^[A-Za-z\-_]{21}[AQgw]$/)) {
    key = choosenKey
    break
  } else {
    console.log('Invalid key')
  }
}
if (!key) {
  console.log('Key not choosen after three tries, using demo key:')
  key = 'MidnightBlueCrayonDraw'
}
const link = await file.link({ key })
console.log(link)
