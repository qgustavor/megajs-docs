---
sidebar_position: 2.0105
---

# Folder uploading

This demo combines streamed uploading and the use of recursive functions in order to handle folders. Running it will create a folder in the logged MEGA storage with the same name as the current working directory and will upload all files on it into this folder. It will prompt a lot for read permissions!

You can try by running this code at your console:

```bash
deno run https://mega.js.org/demos/advanced-uploading-demo.js
```

import CodeBlock from '@theme/CodeBlock'
import DemoSource from '!!raw-loader!../../static/demos/advanced-uploading-demo.js'

<CodeBlock language="js">{DemoSource}</CodeBlock>
