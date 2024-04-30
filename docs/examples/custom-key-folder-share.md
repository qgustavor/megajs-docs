# Folder shared with custom key

Use this code if you want to share a folder, doesn't care too much about its security, and want the key part of the URL to be readable. You just need to find a 22 character string ending with A, Q, g or w. Example: if you set the key to be 'MidnightBlueCrayonDraw' then you will get a URL like `https://mega.nz/#F!Example!MidnightBlueCrayonDraw`. Other example key is "DeepSeaTreasureHunting".

This example is meant to be run using Deno. You can try by running this code at your console:

```bash
deno run https://mega.js.org/demos/custom-key-shared-folder-demo.js
```

import CodeBlock from '@theme/CodeBlock'
import DemoSource from '!!raw-loader!../../static/demos/custom-key-shared-folder-demo.js'

<CodeBlock language="js">{DemoSource}</CodeBlock>
