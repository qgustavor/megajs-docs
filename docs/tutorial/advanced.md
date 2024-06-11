---
sidebar_position: 9
---

# Advanced usage

This library supports separating downloading/uploading from encryption steps. It's quite unusual but maybe it's useful for someone as seems [tonistiigi](https://github.com/tonistiigi/mega) supported those things by exporting low level `encrypt` and `decrypt` functions.

## Downloading then decrypting

If you want to download then decrypt, not the two at the same time, then do the following:

```js
const file = File.fromURL(url)

// Download it using cipher
file.download({ cipher: true })
  .pipe(fs.createWriteStream('filename.ext.enc'))

// Later decrypt it using decrypt
fs.readFileStream('filename.ext.enc')
  .pipe(decrypt('base64 file key'))
  .pipe(fs.createWriteStream('filename.ext'))
```

## Encrypting then uploading

```js
const encryptStream = encrypt()
fs.readFileStream('filename.ext')
  .pipe(encryptStream)
  .pipe(fs.createWriteStream('filename.ext.enc'))

// Get the generated key
encryptStream.on('end', () => {
  console.log(encryptStream.key.toString('hex'))
})

// Later upload the encrypted file
const storage = new Storage(options, callback)

await storage.ready
storage.upload({
  uploadCiphertext: true,
  key: Buffer.from('key from console.log', 'hex')
})
```

## Uploading without encryption

:::caution

This code does not work anymore due to changes in MEGA as now their servers blocks when a client tries to upload files without any encryption. You can still upload already encrypted files, like using CrococryptFile, as long there aren't headers or anything else to trip the detection. For more info [check this discussion](https://github.com/qgustavor/mega/discussions/108).

:::

Make MEGA work like any other file hosting service:

```js
const storage = new Storage(options, callback)
await storage.ready

storage.upload({
  uploadCiphertext: true,
  // This key will be used to encrypt the attributes
  // Avoid reusing keys (like using `Buffer.alloc(32)`)
  // as seems MEGA does some kind of caching on those
  key: crypto.randomBytes(32)
})
```

To download do the ["Downloading then decrypting"](#downloading-then-decrypting) steps.
