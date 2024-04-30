const modeNames = [ 'Node ESM', 'Node CJS', 'Browser', 'Deno' ]
const modes = [ 'node_esm', 'node_cjs', 'browser', 'deno' ]
const convert = (code, mode) => replacementFns[modes.indexOf(mode)](code)

const browserReplacement = e => e
  .replace(/import (.+?) from 'megajs'/g, `import $1 from 'https://cdn.skypack.dev/megajs'`)
  .replace(/\/\/ node2deno:if-node\n.*\n/g, '')
  .replace(/\/\/ node2deno:if-deno\n/g, '')

const replacementFns = [
  e => e
    .replace(/\/\/ node2deno:if-deno\n.*\n?/g, '')
    .replace(/\/\/ node2deno:if-node\n/g, ''),
  e => {
    e = e
      .replace(/\/\/ node2deno:if-deno\n.*\n?/g, '')
      .replace(/\/\/ node2deno:if-node\n/g, '')
    if (e.includes('await ')) {
      e = e
        .replace(/^(?!import|$)/gm, '  ')
        .replace(/^\s*$/m, "\n// Node doesn't support top-level await when using CJS\n;(async function () {")
        .replace(/\n*$/, '\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n')
    }
    e = e.replace(/import (.+?) from 'megajs'/g, "const $1 = require('megajs')")
    return e
  },
  e => e
    .replace(/import (.+?) from 'megajs'/g, `import $1 from 'https://cdn.skypack.dev/megajs'`)
    .replace(/\/\/ node2deno:if-node\n.*\n/g, '')
    .replace(/\/\/ node2deno:if-deno\n/g, ''),
  e => e
    .replace(/import (.+?) from 'megajs'/g, `import $1 from 'npm:megajs'`)
    .replace(/\/\/ node2deno:if-node\n.*\n/g, '')
    .replace(/\/\/ node2deno:if-deno\n/g, '')
]

export { modes, modeNames, convert, replacementFns }
