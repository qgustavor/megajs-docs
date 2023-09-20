---
sidebar_position: 2
---

# Installation

This tutorial assumes that you already have Node.js installed on your system. If not, we recommend downloading it from the <a href='https://nodejs.org/en'>official website</a> before continuing with the tutorial.

### Install the package

You can install the MEGA JS library with your preffered package manager:

```bash npm2yarn
npm install megajs@latest
```

<!-- Since V1 it already includes TypeScript types (thanks to [ChampionBuffalo1](https://github.com/ChampionBuffalo1) for contributing). -->

### TypeSript Compactibility

Starting from <a href='/docs/1.0/api'>v1.0</a>, MEGA JS now supports TypeScript and includes the corresponding type declarations, thus enhancing the development experience for TypeScript users. This means you can enjoy improved type safety while working with MEGA JS in your TypeScript projects.

### Browser Setup

If you are working directly in a browser environment, you can import the library using ES modules:

```js
import { Storage } from "https://cdn.skypack.dev/megajs";
```

Note that it will load the latest version. To use a specific version, update to URL to point to that version thus reducing the chance of running into errors when a new version gets released.

You can also load the UMD version in `<script>` tags :

```html
<script src="https://unpkg.com/megajs@1/dist/main.browser-umd.js"></script>
```

This will load the library in `window.mega`, so `Storage` will be available via `window.mega.Storage`, `File` via `window.mega.File` and so on.

You can also host the above files into your server instead of loading those from unpkg or Skypack which may help privacy and security.

### Using MEGA JS in the Browser

When targeting the browser environment, it's essential to import the browser version of MEGA JS. This version includes cryptographic functions that are compatible with browsers, eliminating the need for dependencies like the Node crypto module.

#### Why it matters?

Attempting to use a browser port of Node crypto, such as crypto-browserify, can significantly increase your project's build size and negatively impact performance. To ensure optimal compatibility and efficiency, always import the browser version of MEGA JS when working in a browser environment.

:::warning

**Deno is not supported** by this library due to unresolvable TLS cipher issues. resolvable TLS cipher issues. These issues cannot be addressed by the library, and neither Deno nor MEGA developers have plans to address them in the nearest future.

:::

In the next section of this tutorial, you will be guided through the process of logging in to your MEGA account using the Storage class, which we've loaded in the above steps.
