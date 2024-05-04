const modeNames = [ 'Node ESM', 'Node CJS', 'Browser', 'Deno' ]
const modes = [ 'node_esm', 'node_cjs', 'browser', 'deno' ]
const convert = (code, mode) => replacementFns[modes.indexOf(mode)](code)

function preprocessCode (code, condition) {
  let shouldInclude = true
  let skipElse = false
  let onSingleIf = false

  return code.split('\n').filter(line => {
    const trimmedLine = line.trim()
    if (trimmedLine === '// node2deno end') {
      shouldInclude = true
      skipElse = false
    } else if (trimmedLine === '// node2deno else') {
      shouldInclude = !skipElse
    } else if (trimmedLine.startsWith('// node2deno else if: ')) {
      if (!skipElse) {
        const directives = trimmedLine.slice(22).trim().split(' ')
        shouldInclude = directives.includes(condition)
        if (shouldInclude) skipElse = true
      }
    } else if (trimmedLine.startsWith('// node2deno single: ')) {
      const directives = trimmedLine.slice(21).trim().split(' ')
      shouldInclude = directives.includes(condition)
      onSingleIf = true
    } else if (trimmedLine.startsWith('// node2deno: ')) {
      const directives = trimmedLine.slice(14).trim().split(' ')
      shouldInclude = directives.includes(condition)
      if (shouldInclude) skipElse = true
    } else if (shouldInclude) {
      onSingleIf = false
      return true
    } else if (onSingleIf) {
      onSingleIf = false
      shouldInclude = true
    }
    return false
  }).join('\n')
}

const replacementFns = [
  e => preprocessCode(e, 'node'),
  e => {
    e = preprocessCode(e, 'node').replace(/import (.+?) from 'megajs'/g, "const $1 = require('megajs')")
    if (e.includes('await ')) {
      e = e
        .replace(/^(?!import|$)/gm, '  ')
        .replace(/^\s*$/m, "\n// Node doesn't support top-level await when using CJS\n;(async function () {")
        .replace(/\n*$/, '\n}()).catch(error => {\n  console.error(error)\n  process.exit(1)\n})\n')
    }
    return e
  },
  e => preprocessCode(e, 'browser').replace(/import (.+?) from 'megajs'/g, `import $1 from 'https://unpkg.com/megajs/dist/main.browser-es.mjs'`),
  e => preprocessCode(e, 'deno').replace(/import (.+?) from 'megajs'/g, `import $1 from 'npm:megajs'`)
]

export { modes, modeNames, convert, replacementFns }
