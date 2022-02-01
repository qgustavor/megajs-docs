---
sidebar_position: 4
---

# Uploading files

Once you logged into your account you can upload files by calling `storage.upload()`:

```js
storage.upload('hello-world.txt', 'Hello world!', (error, file) => {
  if (error) return console.error('There was an error:', error)
  console.log('The file was uploaded!', file)
})
```

The upload function is one of the most complex functions in the library because it's quite flexible. In the example above you pass the file name in the first argument, the file contents in the second and wait for a callback.

You can input an options object too:

```js
storage.upload({
  name: 'hello-world.txt'
}, 'Hello world!', (error, file) => {
  if (error) return console.error('There was an error:', error)
  console.log('The file was uploaded!', file)
})
```

It allows you setting more options, some which will be explained later. The complete list of options are listed in the [API reference page](../api.md).

You can use Buffers to input file content, like this:

```js
storage.upload('hello-world.txt', Buffer.from('SGVsbG8gd29ybGQh', 'base64'), (error, file) => {
  if (error) return console.error('There was an error:', error)
  console.log('The file was uploaded!', file)
})
```

Node readable streams are also supported as inputs, **but** then you also need to specify a file size in the options:

```js
storage.upload({
  name: 'hello-world.txt',
  size: 12
}, fs.createReadStream('hello-world.txt'), (error, file) => {
  if (error) return console.error('There was an error:', error)
  console.log('The file was uploaded!', file)
})
```

:::info

If you forget to specify the file size the entire stream will be buffered in memory, which will cause issues when uploading large files. Because is quite easy to make this mistake it is not allowed to upload without setting the size or explicitly enabling buffering by setting `allowUploadBuffering` to `true`.

:::

Finally piping is another way to uploading files:

```js
const fileStream = fs.createReadStream('hello-world.txt')
const uploadStream = storage.upload({
  name: 'hello-world.txt',
  size: 12
})
fileStream.pipe(uploadStream)
uploadStream.on('complete', file) => {
  console.log('The file was uploaded!', file)
})
uploadStream.on('error', error) => {
  console.log('The file was uploaded!', file)
})
```

After uploading you will get a `File` object either via the callback or the `complete` event.

Because network connections can be unstable sometimes this library retries on errors up to eight times. You can change this behavior by providing a retry handling function to `upload()`:

```js
storage.upload({
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
}, 'Hello world!', (error, file) => {
  if (error) return console.error('There was an error:', error)
  console.log('The file was uploaded!', file)
})
```

In the next part of this tutorial we will share this file and do other operations on it.
