---
sidebar_position: 7
---

# Advanced usage

## Downloading shared files using account limits

Files created with `new File` and `File.fromURL` by default use a non-logged API instance and can be quite limited. To work around those limits accounts can be used, so downloading will use the limits from those:

```js
// First log in
const storage = new Storage(options, callback)

// Wait for the callback then get a shared file
const sharedFile = File.fromURL(url)

// Finally replace the non-logged API instance with the logged instance
sharedFile.api = storage.api

// Now downloading the shared file will use the limits from that account
```

## Setting request configuration

In version 0.xx [request](https://www.npmjs.com/package/request) is used to handle HTTP(s) connections with MEGA servers. It can be configured like this:

```js
// Get a File or Storage object
let file = File.fromURL(url)
let storage = new Storage(options, callback)

// The request module can be acessed using:
file.api.requestModule
storage.api.requestModule

// It can be overwritten, so if you need to set up a proxy
file.api.requestModule = file.api.requestModule.defaults({
  proxy: 'your proxy url'
})

// Storage logins up automatically, so if you may want to disable autologin
storage = new Storage({ ..., autologin: false })
// configure request like shown above then login
storage.login(callback)
```

If possible use this to set up a user-agent.

## Resuming a download

When a download fails it will stop the stream you need to create other stream in order to resume it:

```js
let file = File.fromURL(url)
let filename = 'filename.ext'

let start = fs.statSync(filename).size

file.download({ start })
  .pipe(fs.createWriteStream(filename, {
    flags: 'r+', // <= set flags to prevent overwriting the file
    start
  }))
```

## Downloading then decrypting

If you want to download then decrypt, not the two at the same time, then do the following:

```js
let file = File.fromURL(url)

// Download it using cipher
file.download({ cipher: true })
  .pipe(fs.createWriteStream('filename.ext.enc'))

// Later decrypt it using decrypt
fs.readFileStream('filename.ext.enc')
  .pipe(decrypt('base64 file key'))
  .pipe(fs.createWriteStream('filename.ext'))
```

I find hard someone having to do that, but maybe it's useful for someone as seems [tonistiigi](https://github.com/tonistiigi/mega) supported it (by exporting the `decrypt` function).

## Encrypting then uploading

```js
let encryptStream = encrypt()
fs.readFileStream('filename.ext')
  .pipe(encryptStream)
  .pipe(fs.createWriteStream('filename.ext.enc'))

// Get the generated key
encryptStream.on('end', () => {
  console.log(encryptStream.key.toString('hex'))
})

// Later upload the encrypted file
let storage = new Storage(options, callback)

// Wait for callback, then:
storage.upload({
  uploadCiphertext: true,
  key: Buffer.from('key from console.log', 'hex')
})
```

[tonistiigi's mega](https://github.com/tonistiigi/mega) also exported an `encrypt` function, so that's how you can use it. Do **not** forget the `size` option when uploading!

## Uploading without encryption

:::caution

This code does not work anymore due to changes in MEGA. For more info [check this discussion](https://github.com/qgustavor/mega/discussions/108).

:::

Make MEGA work like any other file hosting service:

```js
let storage = new Storage(options, callback)

// Wait for callback, then:
storage.upload({
  uploadCiphertext: true,
  // This key will be used to encrypt the attributes
  // Avoid reusing keys (like using `Buffer.alloc(32)`)
  // as seems MEGA does some kind of caching on those
  key: crypto.randomBytes(32)
})
```

To download do the ["Downloading then decrypting"](#downloading-then-decrypting) steps. Do **not** forget the `size` option when uploading!