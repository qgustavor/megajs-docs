---
sidebar_position: 4
---

# Uploading files

Once you logged into your account you can upload files by calling `storage.upload()`:

```js
const file = await storage.upload('hello-world.txt', 'Hello world!').complete
console.log('The file was uploaded!', file)
```

Notice that the function do not return a promise but it's available in the `.complete` property. It will be useful later when dealing with huge files.

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

You can use Buffers to input file content, like this:

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
