---
sidebar_position: 4.05
---

# Advanced file downloader

This script downloads shared files and folders. It demonstrates:

- How to download large files by streaming.
- How to download folders by iterating their children.
- How to implement progress bars.
- How to handle interrupted downloads.
- How to verify downloads.

You can try by running this code at your console:

```bash
deno run https://mega.js.org/demos/advanced-file-downloader.js [URL] [...flags]
```

If you don't specify a URL one will be prompted. You can use `--filter=...` to download only files containing the filter string in the name and `--ignore=...` to skip all files containing the ignore string in the name. Both `--filter` and `--ignore` can be set multiple files. You can use `--dir=...` to specify a target directory (current working directory by default). If you use `--verbose` it will log to the console skipped files and why they were skipped.

import CodeBlock from '@theme/CodeBlock'
import DemoSource from '!!raw-loader!../../static/demos/advanced-file-downloader.js'

<CodeBlock language="js">{DemoSource}</CodeBlock>
