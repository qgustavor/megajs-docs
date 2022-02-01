---
sidebar_position: 6
---

# Downloading files

To share a download you call `.download()` on the file object:

```js
file.download((error, data) => {
  if (error) console.error(error)

  // data is a Buffer containing the file contents
  console.log(data)
})
```

You can also download files using Node streams either via pipes...

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

You can download shared files by loading those from their URL instead of loading from the Storage class:

import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable'
import codeExampleDownload from '!!raw-loader!./code-example-download.js'

<CodeBlockSwitchable language="js" code={codeExampleDownload} />

Shared files loaded using `File.fromURL` don't have attributes - such as name and size - loaded by default, that's why `loadAttributes` is called. If you don't need those data, just file contents, you can download the file directly using `.download()`.

Shared folders can also be loaded using `File.fromURL` and will behave like folders in `Storage`: once their attributes are loaded they will have a `.children` property with an array of File objects which can be downloaded.

```js
// Get the folder object from the URL
const folder = File.fromURL('https://mega.nz/folder/example#example')

// Load folder attributes
folder.loadAttributes(error => {
  if (error) return console.error(error)

  // Download a file from the folder
  folder.children.find(file => file.name === 'hello-world.txt').download((error, data) => {
    if (error) return console.error(error)
    console.log(data)
  })
})
```

When opening shared folders in Mega you can right-click some file and get a file pointing to a specific file in the folder. This library recognizes those kind of links and allow loading the file specified. To make it work get the file from the second argument in the `loadAttributes` callback, like this:

```js
// Get the folder object from the URL
const folder = File.fromURL('https://mega.nz/folder/example#example/file/example')

// Load folder attributes
folder.loadAttributes((error, file) => {
  if (error) return console.error(error)

  // Will download a file specified by /file/example in the URL
  file.download((error, data) => {
    if (error) return console.error(error)
    console.log(data)
  })
})
```

And that's the end of the tutorial. At least the basic part: next comes some info on advanced usage.