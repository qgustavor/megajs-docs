---
sidebar_position: 2
---

# API Reference

## Entry point

The exported classes and functions are those below:

- `Storage` class
- `File` class
- `file`: alias to `File.fromURL`
- `encrypt` and `decrypt` (low level encryption streams)

## Storage

Creates a logged in connection instance to MEGA.

### Creation

import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable'

<CodeBlockSwitchable language="js" code="import { Storage } from 'megajs'
const storage = new Storage(options, [callback])" />

### Options

* `email` - User login email.
* `password` - User password.
* `keepalive` - Keep connection open to receive server-to-client requests that will be mapped to events. Defaults to `true`.
* `autologin` - Logins to MEGA. Defaults to `true`. Set to `false` if you want to change request options, like proxy, [like shown here](tutorial/advanced.md#setting-request-configuration).
* `autoload` - Load in file structure. Defaults to `true`.

Temporary accounts aren't supported. Trying to login without an email or password will throw an error.

### Properties

Only loaded after `readyCallback()` or `ready` event fires.

* `name` - Account owner name
* `key` - Account master key
* `sid` - Current session ID
* `files` - Hash of `MutableFile` objects by node IDs.
* `root` - `MutableFile` object for Cloud Drive main directory
* `trash` - `MutableFile` object for Rubbish bin
* `inbox` - `MutableFile` object for Inbox
* `mounts` - Array of all top level directories

### Methods

`.upload` and `.mkdir` methods maps to `storage.root.upload` and `storage.root.mkdir` methods.

#### `.reload(cb)`

Reloads files tree. No need to call this if `autoload` is used.

#### `.login(cb)`

Logins to MEGA. No need to call this if `autologin` is used.

#### `.getAccountInfo(cb)`

Get info related to account and quota usage. It returns a object with the following properties:

* `type`: the account type
* `spaceUsed`: the space used by the account, in bytes
* `spaceTotal`: the total space avaliable, in bytes
* `downloadBandwidthUsed`: the bandwidth quota used, in bytes
* `downloadBandwidthTotal`: the total bandwidth quota avaliable, in bytes
* `sharedBandwidthUsed`: the shared bandwidth quota used, in bytes
* `sharedBandwidthLimit`: the total shared bandwidth quota avaliable, in bytes

### Events

These events fire on file changes when `keepalive` is used. The changes can be triggered from any session connected to the same account.

* `add` - New file/dir was added. Parameters: file.
* `move` - File was moved to another dir. Parameters: file, olddir.
* `delete` - File was deleted. Parameters: file.
* `update` - File was changed(renamed). Parameters: file.

## File

Basic class that handle files and folders. Often used to handle **shared** files and folders.

### Creation

<CodeBlockSwitchable language="js" code="import { File } from 'megajs'
const file = File.fromURL(url)" />

### Options

If a string is passed it needs to be a shared MEGA url. It can be a `https://mega.co.nz` or a `https://mega.nz` file. The new URL format with `/file/` or `/folder/` is also supported.

If an object is passed it needs to have the options below:

* `downloadId`: `https://mega.nz/#!THIS_PART!...` of the share link; a string
* `key`: `https://mega.nz/#!...!THIS_PART` of the share link; string or a Buffer; optional
* `directory`: `true` if loading a shared folder

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

Values marked with \* are `null` or `undefined` when an encryption key isn't specified.

### Methods

#### `.loadAttributes(callback)`

Load and decrypt file attributes. Attributes normally contain file name (`'n'`) but is possible to put anything there, as long it can be encoded as JSON. Isn't needed for files loaded from logged sessions. Trying to call it in a `MutableFile` will throw an error.

```js
file.loadAttributes((err, file) => {
  // now file properties were loaded
})
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

The download function also support `start` and `end` options, like [`fs.createReadStream`](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options).

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
fs.createReadStream('myfile.txt').pipe(folder.upload('myfile.txt'))

folder.upload('myfile.txt', 'Hello world!', (error, uploadedFile) => {})
```

Upload a file to a folder.

To input data you can input a buffer, string or stream in the data argument or, as it returns a [stream](https://nodejs.org/api/stream.html), pipe data into it. To handle upload completion or errors you can either use the callback, which will return either an error as its first argument or the uploaded file instance as its second, or, if you don't specify a callback, listen for `complete` and `error` events.

**Supported options:**

* `name`: file name, *required*
* `attributes`: object of file attributes
* `key`: encryption key, Buffer or string; 192 bit; because MAC verification part of it be different in final key
* `size`: file size.

  :::caution

  MEGA's API needs final data length before uploading can start, streaming only fully works if you specify the size of your data. Otherwise it needs to first buffer your data to determine the size. Set this option as **always** as possible!

  :::
* `thumbnailImage`: the Buffer or Stream of the thumbnail image
* `previewImage`: the Buffer or Stream of the preview image
* `maxConnections`: the number of parallel connections is defined (default: 4);
* `initialChunkSize`: first chunk size, in bytes (default: 128KB);
* `chunkSizeIncrement`: how many bytes to increment each time (default: 128KB);
* `maxChunkSize`: maximum chunk size, in bytes (max 1MB);

Thumbnail images are 120px x 120px JPEG images with 70% quality. Preview images are JPEG images with a maximum width and height size of 1000px and 75% quality. Please use those settings to avoid breaking compatibility with other MEGA clients. This library don't generates neither preview or thumbnail images, only provides a way to uploading those.

Uploading data without encryption is supported and [is documented here](tutorial/advanced.md#uploading-without-encryption).

The upload stream is always returned even when a callback is specified. Standard events for [Writable
 Streams](https://nodejs.org/api/stream.html#stream_class_stream_writable), like `error` and `finish`, and methods, like `.pipe()` and `.write()`, work normally.

#### `.mkdir(options | name, callback)`

```js
folder.mkdir('dirname', (err, file) => { ... })
```

Create a new folder inside the current folder.

**Supported options:**

* `name`: directory name, *required*
* `attributes`: object of file attributes
* `key`: encryption key, Buffer or string; 128 bit; only used internally (when sharing folders other key is used)

#### `.importFile(File | URL, callback)`

Import a file to the specified folder. It accepts File objects (from `new File`) or URLs of shared files.

```js
folder.importFile('https://mega.nz/#!...', (err, file) => {
  // `file` is a instance of MutableFile
})
```

#### `.link([options], callback)` / `.shareFolder([options], callback)`

Make download link for a file or folder. `.shareFolder` only works for folders, `.link` works for both (but calls `.shareFolder` internally).

```js
file.link((err, url) => {
  // url: https://mega.nz/#!downloadId!key
})
```

Supported options:

* `noKey`: set `true` to return a url without an encryption key
* `key`: only works for folders, encryption key, can be a string or buffer, 128 bit

#### `.delete(permanent, callback)`

Delete file, permanently if `permanent` is true, otherwise file is moved to rubbish bin.

```js
file.delete((err) => {
  // file was moved to rubbish bin
})
```

#### `.moveTo(target, callback)`

Move a file to target, which can be a folder object or it's nodeId.

```js
file.moveTo(storage.root, (err) => {
  // file was moved to storage root
})
```

#### `.setAttributes(attributes, callback)`

Set the the attributes of a object. Doesn't remove the current ones, but can overwrite those.

```js
file.setAttributes({someAttribute: someValue}, (err) => {
  // attribute was set
})
```

#### `.uploadAttribute(type, [buffer|stream], [callback])`

Upload a thumbnail or preview image to the existent file. Fails if the node is a folder.

The argument `type` can be a string (`thumbnail` or `preview`) or a integer (`0` and `1`).

#### `.rename(newFileName, callback)`

Rename a file.

```javascript
file.rename('hello-world.txt', (err) => {
  // file was renamed
})
```

#### `.setLabel(label, callback)`

Set file's label, where `label` can be a number between 0 and 7 or a valid label color the following: 'red', 'orange', 'yellow', 'green', 'blue', 'purple' and 'grey'.

```js
file.setLabel('red', (err) => {
  // file label is red now
})
```

#### `.setFavorite(isFavorite, callback)`

Set file as favorite is `isFavorite` is `true`

```js
file.setFavorite(true, (err) => {
  // file is now a favorite
})
```

### Events

Same events as for Storage objects. Only trigger for a specific file.

* `move` - File was moved to another dir. Parameters: olddir.
* `delete` - File was deleted.
* `update` - File metadata was changed.

## Low level functions

`encrypt` and `decrypt` are lower level transform streams. They accept a key as input and transform file data and outputs encrypted data and vice versa. They also handle MAC verification / generation.

The key for `encrypt` must be 192 bit. When the stream ends it a full 256 bit key will be available via the `.key` property. The additional 64 bit come from the MAC.

The key for the `decrypt` function must be the same 256 bit key returned during encryption.

Those functions are almost never used and are only exported in order to allow backyards compatibility.
