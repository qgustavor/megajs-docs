import { getLoggedInStorage } from './logging-in-demo.js'
const storage = await getLoggedInStorage()

// Open the file to be read
const name = prompt('Enter a file name:')
const denoFile = await Deno.open(name)

// You need to set forceHttps to false in order to make
// Deno connect to the unsafe MEGA upload servers
// (which use out-of-date TLS configurations)
// That's not needed in Node.js nor in browsers
const uploadStream = storage.upload({ name, forceHttps: false })

// Get the file reader
const inputReader = denoFile.readable.getReader()

// Read the file and pass the data to the upload stream
// (it's a Node.js Writable stream)
while (true) {
  const result = await inputReader.read()

  if (result.value) {
    const canContinueWritting = uploadStream.write(result.value)
    if (!canContinueWritting) {
      // Upload stream is under pressure, wait it to drain
      await new Promise(resolve => uploadStream.once('drain', resolve))
    }
  }
  
  if (result.done) {
    // End the stream when there is no more data to be read
    uploadStream.end()

    // And break out the while loop
    break
  }
}

// Wait for the upload to complete and get the new file object
const file = await uploadStream.complete
console.log('The file was uploaded!', file)
