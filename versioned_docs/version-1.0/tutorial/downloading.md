---
sidebar_position: 6
---

# Downloading files

To share a download you call `.downloadBuffer()` or `.download()` on the file object:

```js
// Using promises
const data = await file.downloadBuffer()

// data is a Buffer containing the file contents
console.log(data)

// Using callbacks
file.downloadBuffer((error, data) => {
  if (error) console.error(error)
  console.log(data)
})
```

If you use `.download()` then you can also download files using Node streams either via pipes...

```js
const stream = file.download()
stream.on('error', error => console.error(error))
stream.pipe(fs.createWriteStream(file.name))
```

... or by listening data events:

```js
const stream = file.download()
stream.on('error', error => console.error(error))
stream.on('data', data => console.log(data))
```

Those are useful when dealing with huge files as `.downloadBuffer()` stores the entire file in memory. In the other hand, because of that, `.download()` can't return a promise. Also, you can still use callbacks with `.download()` like in V0.

You can download shared files by loading those from their URL instead of loading from the Storage class:

```js node2deno-v1
import { File } from 'megajs'

// Get the file object from the URL
const file = File.fromURL('https://mega.nz/file/example#example')

// Load file attributes
await file.loadAttributes()

// Then finally download the file like usual
const data = await file.downloadBuffer()
console.log(data)
```

Shared files loaded using `File.fromURL` don't have attributes - such as name and size - loaded by default, that's why `loadAttributes` is called. If you don't need those attributes, just file contents, you can download the file directly using `.download()`:

```js
// Will download the data without having to load attributes
const data = await File.fromURL('https://mega.nz/file/example#example').downloadBuffer()
console.log(data)
```

Shared folders can also be loaded using `File.fromURL` and will behave like folders in `Storage`: once their attributes are loaded they will have a `.children` property with an array of File objects which can be downloaded.

```js
// Get the folder object from the URL
const folder = File.fromURL('https://mega.nz/folder/example#example')

// Load folder attributes
await folder.loadAttributes()

// Download a file from the folder
const file = folder.children.find(file => file.name === 'hello-world.txt')
const data = await file.downloadBuffer()
console.log(data)
```

When opening shared folders in Mega you can right-click some file and get a file pointing to a specific file in the folder. This library recognizes those kind of links and allow loading the file specified. To make it work get the file from the promise, like this:

```js
// Get the folder object from the URL
const folder = File.fromURL('https://mega.nz/folder/example#example/file/example')

// Load the file from the folder specified by /file/example in the URL
const file = await folder.loadAttributes()

// And download it
const data = await file.downloadBuffer()
console.log(data)
```

Like V0 `.loadAttributes()` will still accept a callback. The file specified by the URL will be returned in the second argument:

```js
folder.loadAttributes((error, file) => {})
```

The `download` function also allows using a custom `handleRetries` function:

```js
await file.download(
  handleRetries: (tries, error, cb) => {
    if (tries > 8) {
      // Give up after eight retries
      cb(error)
    } else {
      // Wait some time then try again
      setTimeout(cb, 1000 * Math.pow(2, tries))
    }
  }
}).complete
```

You can replace the default retry handling function by overriding `File.defaultHandleRetries` like this:

```js node2deno-v1
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
```

The function in `File.defaultHandleRetries` is also the default function used by `upload()`.

The last part of the tutorial is handling interrupted downloads.
