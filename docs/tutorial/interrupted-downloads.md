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

Interrupted downloads are not checked due to limitations on Mega's MAC verification which only works on the entire file contents, but you can verify an already downloaded file using the `verify` function:

import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable'
import codeExampleVerify from '!!raw-loader!./code-example-verify.js'

<CodeBlockSwitchable language="js" code={codeExampleVerify} version={1}  />

The last part of the tutorial is changing network settings.
