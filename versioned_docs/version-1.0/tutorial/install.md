---
sidebar_position: 2
---

# Installing

If you are targeting Node or using a build tool, then you need to install the library first:

```bash npm2yarn
npm install megajs@1
```

Since V1 it already includes TypeScript types (thanks to [ChampionBuffalo1](https://github.com/ChampionBuffalo1) for contributing).

If you are working directly from a browser or from Deno you can import the library using ES modules:

```js
// @deno-types="https://cdn.skypack.dev/megajs@1/types/es.d.ts"
import { Storage } from 'https://cdn.skypack.dev/megajs@1'
```

Skypack supports `?dts` to provide type declarations but it will return Node types which are not compatible with Deno. That's why you need to use `@deno-types` to load the correct type declarations. You will also need to run Deno with `--allow-net` or `--prompt` because MEGA use multiple domains and Deno still not support something like `--allow-net=*.mega.co.nz` (the API still uses `.co.nz`, not `.nz`).

You can also use `<script>` tags to load the UMD version:

```js
<script src="https://unpkg.com/megajs@1/dist/main.browser-umd.js"></script>
```

It will load the library in `window.mega`, so `Storage` will be available via `window.mega.Storage`, `File` via `window.mega.File` and so on.

You can also host the above files into your server instead of loading those from unpkg or Skypack which may help privacy and security.

:::info

Remember to import the browser version when targeting the browser environment, even when using build tools, as it includes browser-compatible cryptographic functions instead of depending on [the Node crypto module](https://nodejs.org/api/crypto.html). Trying to use a browser port of Node crypto like [crypto-browserify](https://www.npmjs.com/package/crypto-browserify) can result in huge build sizes and hurt performance. Because Deno's environment is similar to browser's Deno also use the browser version.

:::

In the next part of this tutorial we will login to a MEGA account using the `Storage` class loaded above.
