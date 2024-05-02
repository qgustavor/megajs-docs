---
sidebar_position: 4.1
---

# Project distribution

This code is sourced from a real world application (with some few modifications). It compresses a "dist" folder containing a compiled version of a project then uploads to MEGA. This code automatically creates a folder if it didn't finds one and share with a custom key. It also prunes the folder, removing old versions of the project. It includes a progress bar to track upload progress and handle upload timeouts caused by bad Internet connections.

You can try by running this code at your console:

```bash
deno run https://mega.js.org/demos/project-distribution-demo.js
```

import CodeBlock from '@theme/CodeBlock'
import DemoSource from '!!raw-loader!../../static/demos/project-distribution-demo.js'

<CodeBlock language="js">{DemoSource}</CodeBlock>
