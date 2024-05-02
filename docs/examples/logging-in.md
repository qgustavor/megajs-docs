---
sidebar_position: 2.001
---

# Logging-in

You can try by running this code at your console:

```bash
deno run https://mega.js.org/demos/logging-in-demo.js
```

import CodeBlock from '@theme/CodeBlock'
import DemoSource from '!!raw-loader!../../static/demos/logging-in-demo.js'

<CodeBlock language="js">{DemoSource}</CodeBlock>

All the other demos that require logging-in will import `getLoggedInStorage()` from the above file in order to avoid making the demos repetitive.
