---
sidebar_position: 2
---

# Installing

If you are targeting Node or using a build tool, then you need to install the library first:

```bash npm2yarn
npm install megajs@1
```

Since V1 it already includes TypeScript types (thanks to [ChampionBuffalo1](https://github.com/ChampionBuffalo1) for contributing).

If you are working directly from a browser you can import the library using ES modules:

```js
import { Storage } from 'https://cdn.skypack.dev/megajs'
```

Note that it will load the latest v1 version, instead remember to update to URL to point to a specific version to reduce the chances of the code breaking when a new version gets released.

You can also use `<script>` tags to load the UMD version:

```html
<script src="https://unpkg.com/megajs@1/dist/main.browser-umd.js"></script>
```

It will load the library in `window.mega`, so `Storage` will be available via `window.mega.Storage`, `File` via `window.mega.File` and so on.

You can also host the above files into your server instead of loading those from unpkg or Skypack which may help privacy and security.

:::info

Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on [the Node crypto module](https://nodejs.org/api/crypto.html). Trying to use a browser port of Node crypto like [crypto-browserify](https://www.npmjs.com/package/crypto-browserify) can result in huge build sizes and hurt performance.

:::

Deno is **not supported** because it can't connect to MEGA servers due to issues related to TLS ciphers. That's something that cannot be fixed by this library and neither Deno nor MEGA developers want to fix. Because of that the only choice for this library is not supporting Deno.

In the next part of this tutorial we will login to a MEGA account using the `Storage` class loaded above.
