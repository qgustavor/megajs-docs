---
sidebar_position: 2
---

# Installing

If you are targeting Node or using a build tool, then you need to install the library first:

```bash npm2yarn
npm install megajs@0
```

If you are working directly from a browser you can import the library using ES modules:

```js
import { Storage } from 'https://unpkg.com/megajs@0/dist/main.browser-es.js'
```

You can also use `<script>` tags to load the UMD version:

```html
<script src="https://unpkg.com/megajs@0/dist/main.browser-umd.js"></script>
```

It will load the library in `window.mega`, so `Storage` will be available via `window.mega.Storage`, `File` via `window.mega.File` and so on.

You can also download the above files into your server instead of loading those from unpkg.

:::info

Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on [the Node crypto module](https://nodejs.org/api/crypto.html). Trying to use a browser port of Node crypto like [crypto-browserify](https://www.npmjs.com/package/crypto-browserify) can result in huge build sizes and hurt performance.

:::

:::note

Deno is not supported in 0.17.2, but it's supported in 1.0.

:::


In the next part of this tutorial we will login to a MEGA account using the `Storage` class loaded above.
