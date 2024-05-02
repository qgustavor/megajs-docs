import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

// Deletes all Thumbs.db files in the storage
// (second argument makes it recursive)
const thumbsMdFiles = storage.filter('Thumbs.db', true)

for (const file of thumbsMdFiles) {
  // Set true to make it permanent
  await file.delete(true)
}
