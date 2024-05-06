---
sidebar_position: 4
---

# Uploading files

Once you logged into your account you can upload files by calling `storage.upload()`:

```js
const file = await storage.upload('hello-world.txt', 'Hello world!').complete
console.log('The file was uploaded!', file)
```

Notice two things:

- The `.upload()` function do not return a promise, instead one is available in the `.complete` property.
- The second argument is the file contents, which can be strings, readable streams, buffers or anything that can be converted to a buffer (like TypedArrays). Since this library doesn't handle file reading, you need to implement it yourself using the functions provided by your JavaScript platform.

Callbacks are still supported like in V0:

```js
storage.upload('hello-world.txt', 'Hello world!', (error, file) => {
  if (error) return console.error('There was an error:', error)
  console.log('The file was uploaded!', file)
})
```

The upload function is one of the most complex functions in the library because it's quite flexible. In the example above you pass the file name in the first argument, the file contents in the second and wait for a callback.

You can input an options object too:

```js
const file = await storage.upload({
  name: 'hello-world.txt'
}, 'Hello world!').complete
console.log('The file was uploaded!', file)
```

It allows you setting more options, some which will be explained later. The complete list of options are listed in the [API reference page](../api.md).

As cited before, you can use Node.js Buffers to input file content, like this:

```js
const file = await storage.upload('hello-world.txt', Buffer.from('SGVsbG8gd29ybGQh', 'base64')).complete
console.log('The file was uploaded!', file)
```

When dealing with huge files is not good to put the entire file in memory: it can crash your application! Because of that Node readable streams are also supported as inputs, **but** then you also need to specify a file size in the options:

```js
const file = await storage.upload({
  name: 'hello-world.txt',
  size: 12
}, fs.createReadStream('hello-world.txt')).complete
console.log('The file was uploaded!', file)
```

Just Node.js Readable Streams are supported. If you are using other platform you need to use a compatible implementation like [this one](https://www.npmjs.com/package/readable-stream) and adapt your platform's streams into it. You can try hacking into the library and getting its internal stream constructor (but that can stop working in future versions unless someone sends a pull request improving this to not be a hack anymore).

Unlike some AIs might say, this library does not accept file paths as upload sources, if you try that the path itself will be the file contents. You need to read file contents using the I/O functions provided by your JavaScript platform.

:::info

MEGA requires the file size when uploading. If you don't know the file size the only way to workaround that is buffering the entire stream in memory, which will cause issues when uploading large files. It used to be allowed by default in V0, but because is quite easy to forget this behavior it is not allowed anymore. Either set the size or explicitly enable buffering by setting `allowUploadBuffering` to `true`.

:::

Another way to to deal with huge files you can upload those by piping. The `.upload()` function returns a writable stream, so just pipe to it. Don't forget to set the `size` argument!

```js
const fileStream = fs.createReadStream('hello-world.txt')
const uploadStream = storage.upload({
  name: 'hello-world.txt',
  size: 12
})
fileStream.pipe(uploadStream)

const file = await fileStream.complete
console.log('The file was uploaded!', file)
```

You can also use events instead of promises:

```js
uploadStream.on('complete', file) => {
  console.log('The file was uploaded!', file)
})
uploadStream.on('error', error) => {
  console.log('The file was uploaded!', file)
})
```

After uploading you will get a `File` object either via the callback or the `complete` event. If you opt to use `.on('error')` then it will take precedence and neither the `.complete` promise nor the callback will throw errors.

You can get progress events from the `progress` event like this:

```js
uploadStream.on('progress', info => {
  console.log('Uploaded', info.bytesUploaded, 'bytes of', info.bytesTotal)
})
```

Because network connections can be unstable sometimes this library retries on errors up to eight times. You can change this behavior by providing a retry handling function to `upload()`:

```js
const file = await storage.upload({
  name: 'hello-world.txt',
  handleRetries: (tries, error, cb) => {
    if (tries > 8) {
      // Give up after eight retries
      cb(error)
    } else {
      // Wait some time then try again
      setTimeout(cb, 1000 * Math.pow(2, tries))
    }
  }
}, 'Hello world!').complete

console.log('The file was uploaded!', file)
```

:::info

The library will override buffers passed to it. If you need to reuse those buffers clone those using `Buffer.from()` before passing them to the library.

:::

In the next part of this tutorial we will share this file and do other operations on it.
