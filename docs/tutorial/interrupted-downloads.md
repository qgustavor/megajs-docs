---
sidebar_position: 7
---

# Interrupted downloads

If a download gets interrupted - because connection issues or user action - you need to create other stream to resume it:

```js
const file = File.fromURL(url)
file.loadAttributes(error => {
  if (error) return console.error(error)

  const start = fs.statSync(file.name).size
  const downloadStream = file.download({ start })

  const writableStream = fs.createWriteStream(filename, {
    flags: 'r+', // <= set flags to prevent overwriting the file
    start
  })

  downloadStream.pipe(writableStream)
})
```

The above example assume a Node.js environment, in other environments you might need to convert the Node stream returned by `download` to the way file streaming is handled in this environment (like Deno's `Deno.open`).

Interrupted downloads are not checked due to limitations on MEGA's MAC verification which only works on the entire file contents, but you can verify an already downloaded file using the `verify` function:

```js node2deno-v1
import { File, verify } from 'megajs'
// node2deno:if-node
import { createReadStream } from 'node:fs'
// node2deno:if-deno
import { iterateReader } from 'https://cdn.deno.land/std/versions/0.125.0/raw/streams/conversion.ts'

// node2deno:if-node
// Get a file read stream. createReadStream can be used:
// node2deno:if-deno
// Get a file read stream. Deno.open and iterateReader can be used:
// node2deno:if-node
const readStream = createReadStream(filename)
// node2deno:if-deno
const readStream = iterateReader(await Deno.open(filename))

const file = File.fromURL(url)
const verifyStream = verify(file.key)

verifyStream.on('error', error => {
  // File is corrupted
})

verifyStream.on('end', () => {
  // File is OK
})

// node2deno:if-node
readStream.pipe(verifyStream)
// node2deno:if-deno
for await (const data of readStream) {
// node2deno:if-deno
  verifyStream.write(data)
// node2deno:if-deno
}
// node2deno:if-deno
verifyStream.end()
```

Here is a browser implementation:

import CodepenEmbed from '@site/src/components/CodepenEmbed'

<CodepenEmbed user="qgustavor" hash="wvPNNeb" height="500" />

The last part of the tutorial is changing network settings.
