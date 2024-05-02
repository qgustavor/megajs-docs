import { Storage } from 'npm:megajs'

// Export this function so it will be reused in other demos
export function getLoggedInStorage () {
  // Get credentials from environment variables
  // Don't worry: Deno will prompt if you allow the code to read those variables
  const email = Deno.env.get('MEGA_EMAIL')
  const password = Deno.env.get('MEGA_PASSWORD')

  // Create a new storage and return its ready promise
  // (the .ready promise resolves to the storage itself when it's ready
  // so it's a nice shortcut to avoid having to handle the ready event)
  return new Storage({ email, password }).ready
}

// Run the below code only if this code is run directly
if (import.meta.main) {
  const storage = await getLoggedInStorage()
  console.log(storage)
}
