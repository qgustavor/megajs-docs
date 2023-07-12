---
sidebar_position: 2
---

# API Reference

## Promises

Promise support was added in V1. All functions which used to accept callbacks now also accept promises, except by:

- `new Storage()`: the promise is available in the `.ready` property;
- `.upload()`: the promise is available in the `.complete` property;
- `.download()`: call `.downloadBuffer()` instead;

## Entry point

The exported classes and functions are those below:

- `Storage` class
- `File` class
- `file`: alias to `File.fromURL`
- `API` class
- `encrypt`, `decrypt` and `verify` (low level encryption streams)

## Storage

Creates a logged in connection instance to MEGA.

### Creation

```js node2deno-v1
import { Storage } from 'megajs'
const storage = new Storage(options, [callback])
```

### Options

* `email` - User login email **required**.
* `password` - User password **required**.
* `secondFactorCode` - User two-factor authentication code (since 1.2.0).
* `keepalive` - Keep connection open to receive server-to-client requests that will be mapped to events. Defaults to `true`.
* `autologin` - Logins to MEGA. Defaults to `true`. Set to `false` if you want to change request options, like proxy, [like shown here](tutorial/advanced.md#setting-request-configuration).
* `autoload` - Load in file structure. Defaults to `true`.
* `api` - an API object.
* All arguments supported by the API class (in case an API object is not provided).

Temporary accounts aren't supported. Trying to login without an email or password will throw an error.

### Properties

Only loaded after `.resolve`, `readyCallback()` or `ready` event fires.

* `name` - Account owner name
* `user` - Account ID
* `key` - Account master key
* `sid` - Current session ID
* `files` - Hash of `MutableFile` objects by node IDs.
* `root` - `MutableFile` object for Cloud Drive main directory
* `trash` - `MutableFile` object for Rubbish bin
* `inbox` - `MutableFile` object for Inbox
* `mounts` - Array of all top level directories

### Methods

`.upload` and `.mkdir` methods maps to `storage.root.upload` and `storage.root.mkdir` methods.

#### `.reload()`

Reloads files tree. No need to call this if `autoload` is used.

#### `.login()`

Logins to MEGA. No need to call this if `autologin` is used.

#### `.getAccountInfo()`

Get info related to account and quota usage. It returns a object with the following properties:

* `type`: the account type
* `spaceUsed`: the space used by the account, in bytes
* `spaceTotal`: the total space available, in bytes
* `downloadBandwidthUsed`: the bandwidth quota used, in bytes
* `downloadBandwidthTotal`: the total bandwidth quota available, in bytes
* `sharedBandwidthUsed`: the shared bandwidth quota used, in bytes
* `sharedBandwidthLimit`: the total shared bandwidth quota available, in bytes

#### `.close()`

Logs out MEGA and closes server-to-client connection. Other connections will not be closed. Attempting to call API requests after this point will result in errors.

### Events

These events fire on file changes when `keepalive` is used. The changes can be triggered from any session connected to the same account.

* `add` - New file/dir was added. Parameters: file.
* `move` - File was moved to another dir. Parameters: file, olddir.
* `delete` - File was deleted. Parameters: file.
* `update` - File was changed(renamed). Parameters: file.

## File

Basic class that handle files and folders. Often used to handle **shared** files and folders.

### Creation

```js node2deno-v1
import { File } from 'megajs'
const fileFromUrl = File.fromURL(url)
const fileFromObject = new File({ downloadId, key })
```

To avoid collisions with [the global `File` object](https://developer.mozilla.org/en-US/docs/Web/API/File) you can use `import { File as MEGAFile } from 'megajs'` or `const { File: MEGAFile } = require('megajs')` and use `MEGAFile` instead of `File`.

### Options

If a string is passed it needs to be a shared MEGA URL. It can be a `https://mega.co.nz` or a `https://mega.nz` file. The new URL format with `/file/` or `/folder/` is also supported.

If an object is passed it needs to have the options below:

* `downloadId`: https://mega.nz/file/THIS_PART#...` of the share link; a string.
* `key`: `https://mega.nz/file/...#THIS_PART` of the share link; string or a Buffer; optional.
* `directory`: `true` if loading a shared folder.

Both `new File` and `File.fromURL` supports receiving either an API object via `api` argument like this:

```js
const fileFromUrl = File.fromURL(url, { api })
const fileFromObject = new File({ downloadId, key, api })
```

This allows using an logged API object to increase download limits, as shown [here](tutorial/network-settings.md).

### Properties

* `name` - File name*
* `attributes` - Object of attributes*
* `size` - File size
* `key` - File key (buffer)*
* `timestamp` - File creation time (unix timestamp in seconds)
* `nodeId` - File ID
* `downloadId` - Link ID to file. Only if created from link.
* `directory` - Boolean if file is directory.
* `children` - Array of files for directories.

Values marked with \* are `null` or `undefined` when an encryption key isn't specified. An encryption key isn't specified when someone loads a shared file without specifying the encryption key like `File.fromURL('https://mega.nz/file/something')` without the `#random-string` part. Files loaded from accounts always have keys defined.

### Methods

#### `.loadAttributes()`

Load and decrypt file attributes. Attributes normally contain file name (`'n'`) but is possible to put anything there, as long it can be encoded as JSON. Isn't needed for files loaded from logged sessions. Trying to call it in a `MutableFile` will throw an error.

```js
await file.loadAttributes()
file.loadAttributes((err, file) => { })
```

This function can be also be used to load file information contained in shared folders.

#### `.download([options], [callback])`

Download and decrypt file contents into a readable stream or, if a callback is specified, into a buffer.

```js
file.download().pipe(fs.createWriteStream('myfile.txt'))

file.download((err, data) => {
  // data is buffer
})
```

This function downloads files using chunked multiple parallel connections to speed up downloading. Similar to the MEGA implementation it first loads a 128KB chunk, then a 256KB, increasing it until it reaches 1MB. You can use the options below to control that.

* `maxConnections`: the number of parallel connections is defined (default: 4);
* `initialChunkSize`: first chunk size, in bytes (default: 128KB);
* `chunkSizeIncrement`: how many bytes to increment each time (default: 128KB);
* `maxChunkSize`: maximum chunk size, in bytes (max 1MB);
* `returnCiphertext`: if `true` the ciphertext will be returned, which can be decrypted later using `decrypt` low level function.
* `handleRetries`: accepts a function to handle retries on chunk downloading errors, overrides the function defined by `File.defaultHandleRetries`;
* `forceHttps`: if set to `true` will download using HTTPS, if set to `false` will download using HTTP. Default to `false` in the Node build and `true` in the browser build.

The download function also support `start` and `end` options, like [`fs.createReadStream`](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options).

Deno is not supported, but if you really want to use it then set `forceHttps` to `false` otherwise Deno will block connections to MEGA servers. The reason is that MEGA use insecure TLS ciphers under the assumption their own crypto is enough, but Deno blocks that as it's "secure by default" and does not allow disabling this security layer unless you disable encryption entirely by setting `forceHttps` to `false`.

If the number of connections get limited to `1` then chunking will be disabled and the entire file will be downloaded using a single connection. For some reason doing this often results in less connection errors. At the moment this feature relies on a node-fetch extension and might not work in non-Node environments.

You can get progress events from the `progress` event which will contain the following properties:

* `bytesLoaded`: the number of bytes loaded;
* `bytesTotal`: the total number of bytes of the file;

#### `.downloadBuffer([options])`

Wraps the `.download()` function and return a Promise which resolves to a Buffer containing the file data. Accept the same options as `.download()`. It still accepts a callback, but then it's better to call `.download()` to avoid creating an unneeded promise.

### Static methods

#### `File.fromURL(url, [options])`

Creates a File object based on a shared file or folder URL. Accepts an optional options object with an `api` object.

#### `File.defaultHandleRetries(tries, error, cb)`

Default function used by `File.protoype.download` and `MutableFile.protoype.upload` to handle chunk downloading or upload should be retried on errors. Receives as arguments number of retries, the last error and a callback function.

This function can be overridden. Example:

```js
// Default retry handler
File.defaultHandleRetries = (tries, error, cb) => {
  if (tries > 8) {
    cb(error)
  } else {
    setTimeout(cb, 1000 * Math.pow(2, tries))
  }
}

// Restore behavior from V0
File.defaultHandleRetries = (tries, error, cb) => {
  cb(error)
}
```

## Mutable File

Extends `File` adding methods that are only available when logged in.

**Please note:** what are mutable are the attributes of the files and folders, **not** their contents, as this library don't support this yet.

### Basic syntax

Those objects can be only accessed when logged in and can only be accessed via the properties of the `Storage` object.

```js
storage.root.children[0] // the first file in the root of the storage
```

### Methods

#### `.upload(options | name, [data], [callback])`

```js
const uploadedFile = await folder.upload('myfile.txt', 'Hello world!').complete
fs.createReadStream('myfile.txt').pipe(folder.upload('myfile.txt'))
folder.upload('myfile.txt', 'Hello world!', (error, uploadedFile) => {})
```

Upload a file to a folder.

To input data you can input a buffer, string or stream in the data argument or, as it returns a [stream](https://nodejs.org/api/stream.html), pipe data into it.

To handle upload completion or errors you can:

- Await for the promise returned by `.complete`.
- Use the callback, which will return either an error as its first argument or the uploaded file instance as its second.
- Listen for `complete` and `error` events.

**Supported options:**

* `name`: file name, *__required__*
* `attributes`: object of file attributes
* `key`: encryption key, Buffer or string; 192 bit; because MAC verification part of it be different in final key
* `size`: file size, *__required__ unless `allowUploadBuffering` is set to true*.
* `thumbnailImage`: the Buffer or Stream of the thumbnail image
* `previewImage`: the Buffer or Stream of the preview image
* `maxConnections`: the number of parallel connections is defined (default: 4);
* `initialChunkSize`: first chunk size, in bytes (default: 128KB);
* `chunkSizeIncrement`: how many bytes to increment each time (default: 128KB);
* `maxChunkSize`: maximum chunk size, in bytes (max 1MB);
* `handleRetries`: accepts a function to handle retries on chunk downloading errors, overrides the function defined by `File.defaultHandleRetries`;
* `forceHttps`: if set to `true` will upload using HTTPS, if set to `false` will upload using HTTP. Default to `false` in the Node build and `true` in the browser build.

Deno is not supported, but if you really want to use it then set `forceHttps` to `false` otherwise Deno will block connections to MEGA servers. The reason is that MEGA use insecure TLS ciphers under the assumption their own crypto is enough, but Deno blocks that as it's "secure by default" and does not allow disabling this security layer unless you disable encryption entirely by setting `forceHttps` to `false`.

Thumbnail images are 120px x 120px JPEG images with 70% quality. Preview images are JPEG images with a maximum width and height size of 1000px and 75% quality. Please use those settings to avoid breaking compatibility with other MEGA clients. This library don't generates neither preview or thumbnail images, only provides a way to uploading those.

Uploading data without encryption is supported and [is documented here](tutorial/advanced.md#uploading-without-encryption).

The upload stream is always returned even when a callback is specified. Standard events for [Writable Streams](https://nodejs.org/api/stream.html#stream_class_stream_writable), like `error` and `finish`, and methods, like `.pipe()` and `.write()`, work normally.

#### `.mkdir(options | name)`

```js
await folder.mkdir('dirname')
```

Create a new folder inside the current folder.

**Supported options:**

* `name`: directory name, *required*
* `attributes`: object of file attributes
* `key`: encryption key, Buffer or string; 128 bit; only used internally (when sharing folders other key is used)

#### `.importFile(File | URL)`

Import a file to the specified folder. It accepts File objects (from `new File`) or URLs of shared files.

```js
// Returns an instance of MutableFile
const file = await folder.importFile('https://mega.nz/#!...')
```

#### `.link([options])` / `.shareFolder([options])`

Make download link for a file or folder. `.shareFolder` only works for folders, `.link` works for both (but calls `.shareFolder` internally).

```js
// Returns something like https://mega.nz/#!downloadId!key
const url = await file.link()
```

Supported options:

* `noKey`: set `true` to return a url without an encryption key
* `key`: only works for folders, encryption key, can be a string or buffer, 128 bit

#### `.unshare()` / `.unshareFolder()`

Unshares files and folders. `.unshareFolder` only works for folders, `.unshare` works for both (but calls `.unshareFolder` internally).

#### `.delete(permanent)`

Delete file, permanently if `permanent` is true, otherwise file is moved to rubbish bin.

```js
// Moves the file to rubbish bin
await file.delete()

// Deletes the file permanently
await file.delete(true)
```

#### `.moveTo(target)`

Move a file to target, which can be a folder object or it's nodeId.

```js
// Moves the file to storage root
await file.moveTo(storage.root)
```

#### `.setAttributes(attributes)`

Set the the attributes of a object. Doesn't remove the current ones, but can overwrite those.

```js
await file.setAttributes({someAttribute: someValue})
```

#### `.uploadAttribute(type, [buffer|stream])`

Upload a thumbnail or preview image to the existent file. Fails if the node is a folder.

The argument `type` can be a string (`thumbnail` or `preview`) or a integer (`0` and `1`).

#### `.rename(newFileName)`

Rename a file.

```javascript
await file.rename('hello-world.txt')
```

#### `.setLabel(label)`

Set file's label, where `label` can be a number between 0 and 7 or a valid label color the following: 'red', 'orange', 'yellow', 'green', 'blue', 'purple' and 'grey'.

```js
await file.setLabel('red')
```

#### `.setFavorite(isFavorite)`

Set file as favorite is `isFavorite` is `true`

```js
await file.setFavorite(true)
await file.setFavorite(false)
```

### Events

Same events as for Storage objects. Only trigger for a specific file.

* `move` - File was moved to another dir. Parameters: olddir.
* `delete` - File was deleted.
* `update` - File metadata was changed.

## API

The API class handles API connections, which includes part of the logged state, user-agent, HTTP/HTTPS agents (for proxying).

### Properties

* `gateway` - the gateway used to connect to MEGA's API, defaults to `https://g.api.mega.co.nz/`.
* `userAgent` - the user-agent used when connecting.
* `httpAgent` and `httpsAgent` - the HTTP(S) agents used in Node, can be overriden to enable proxying;
* `fetch` - the fetch function used by library, defaults to `node-fetch` in Node and `globalThis.fetch` in other environments;

If the `fetch` function is overridden then the `userAgent`, httpAgent` and `httpsAgent` properties will be ignored.

It is recommended to set up an user-agent. The library will default to `megajs/{version}` (where `{version}` is the library version). When deploying to browsers set `userAgent` to `null` as it can cause issues in some browsers which allow client-side code to override the `user-agent` header (i.e. Firefox).

### Static functions

#### `API.getGlobalApi()`

Returns the global API shared by `File` instances.

```js node2deno-v1
import { API } from 'megajs'
const api = API.getGlobalApi()
```

Storage objects have their own API objects which can be accessed via `storage.api`. The API objects of File objects can be accessed via `file.api` and default to the global instance, but can be overridden to an API instance from a Storage to allow using account downloading limits.

## Low level functions

The `verify` function accept a file key as argument creates a PassThrough stream that verifies the content received against the key.

```js node2deno-v1
import { verify } from 'megajs'

const fileKey = 'example-file-key'
const verifyFunction = verify(fileKey)
const fileStream = getFileStreamSomehow()
fileStream.pipe(verifyFunction)

verifyFunction.on('end', () => console.log('File is valid'))
verifyFunction.on('error', () => console.log('File is corrupted'))
```

The file key follows the same rules as the `key` argument in the `File` constructor, so it can be a string (`https://mega.nz/file/...#THIS_PART_OF_THE_SHARE_LINK`), a Buffer or a Uint8Array.

`encrypt` and `decrypt` are lower level transform streams. They accept a key as input and transform file data and outputs encrypted data and vice versa. They also handle MAC verification / generation.

The key for `encrypt` must be 192 bit. When the stream ends it a full 256 bit key will be available via the `.key` property. The additional 64 bit come from the MAC.

The key for the `decrypt` function must be the same 256 bit key returned during encryption.

Those two functions are almost never used as `download` and `upload` already handle encryption. They are only exported in order to allow backyards compatibility.
