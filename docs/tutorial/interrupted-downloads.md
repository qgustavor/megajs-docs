---
sidebar_position: 7
---

# Interrupted downloads

If a download gets interrupted - because connection issues or user action - you need to create other stream to resume it:

```js
const file = File.fromURL(url)
await file.loadAttributes()

const start = fs.statSync(file.name).size
const downloadStream = file.download({ start })

const writableStream = fs.createWriteStream(filename, {
  flags: 'r+', // <= set flags to prevent overwriting the file
  start
})

downloadStream.pipe(writableStream)
```

The above example assume a Node.js environment, in other environments you might need to convert the Node stream returned by `download` to the way file streaming is handled in this environment like [in this example](../examples/file-streaming).

Interrupted downloads are not checked due to limitations on MEGA's MAC verification which only works on the entire file contents, but you can verify an already downloaded file using the `verify` function:

```js
import { File, verify } from 'megajs'
import { createReadStream } from 'node:fs'

// Get a file read stream. createReadStream can be used:
const readStream = createReadStream(filename)

const file = File.fromURL(url)
const verifyStream = verify(file.key)

verifyStream.on('error', error => {
  // File is corrupted
})

verifyStream.on('end', () => {
  // File is OK
})

readStream.pipe(verifyStream)
```

Here is a browser implementation:

import CodepenEmbed from '@site/src/components/CodepenEmbed'

<CodepenEmbed user="qgustavor" hash="wvPNNeb" height="500" />

The last part of the tutorial is changing network settings.
