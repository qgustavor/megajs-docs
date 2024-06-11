---
sidebar_position: 2
---

# Installing

If you are targeting Node or using a build tool, then you need to install the library first:

```bash npm2yarn
npm install megajs
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

Deno is also supported:

```js
import { Storage } from 'npm:megajs'
```

:::info

Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on [the Node crypto module](https://nodejs.org/api/crypto.html). Trying to use a browser port of Node crypto like [crypto-browserify](https://www.npmjs.com/package/crypto-browserify) can result in huge build sizes and hurt performance.

:::

CommonJS support will be removed in MEGAJS 2.0 (as it makes the library quite harder to maintain).

In the next part of this tutorial we will login to a MEGA account using the `Storage` class loaded above.
