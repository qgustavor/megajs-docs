import { File } from 'megajs'
File.defaultHandleRetries = (tries, error, cb) => {
  if (tries > 8) {
    // Give up after eight retries
    cb(error)
  } else {
    // Wait some time then try again
    setTimeout(cb, 1000 * Math.pow(2, tries))
  }
}
