import { Storage } from 'npm:megajs'

const email = prompt('Enter your email:')
const password = prompt('Enter your password (will be visible):')

const storage = await new Storage({ email, password }).ready

// Deletes all Thumbs.db files in the storage
// (second argument makes it recursive)
const thumbsMdFiles = storage.filter('Thumbs.db', true)

for (const file of thumbsMdFiles) {
  // Set true to make it permanent
  await file.delete(true)
}
