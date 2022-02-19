import { File } from 'megajs'

// Get the file object from the URL
const file = File.fromURL('https://mega.nz/file/example#example')

// Load file attributes
file.loadAttributes(error => {
  if (error) return console.error(error)

  // Then finally download the file like usual
  file.download((error, data) => {
    if (error) return console.error(error)
    console.log(data)
  })
})
