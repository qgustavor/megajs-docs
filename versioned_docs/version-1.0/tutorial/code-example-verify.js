import { File, verify } from 'megajs'

// Get a file read stream. In Node fs.createReadStream can be used:
const readStream = fs.createReadStream(filename)

const file = File.fromURL(url)
const verifyStream = verify(file.key)
readStream.pipe(verifyStream)

verifyStream.on('error', error => {
  // File is corrupted
})

verifyStream.on('end', error => {
  // File is OK
})
