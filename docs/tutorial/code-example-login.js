import { Storage } from 'megajs'

const storage = new Storage({
  email: 'user@example.com',
  password: 'correct horse battery example',
  userAgent: 'ExampleClient/1.0'
})

storage.once('ready', () => {
  // User is now logged in
})

storage.once('error', error => {
  // Some error happened
})
