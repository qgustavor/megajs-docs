// Based on https://github.com/facebook/docusaurus/blob/acf4ae8f96b793ef16111e36896304ab28ebf167/packages/docusaurus-remark-plugin-npm2yarn/src/index.ts
const visit = require('unist-util-visit')

const transformNode = (node) => {
  const version = node.meta.slice(11)
  return [
    {
      type: 'jsx',
      value: `<CodeBlockSwitchable language="${node.lang}" code={${JSON.stringify(node.value)}} version="${version}" />`,
    }
  ]
}

const isImport = node => node.type === 'import'
const isParent = node => Array.isArray(node.children)
const matchNode = node => node.type === 'code' && node.meta?.startsWith('node2deno-v')
const nodeForImport = {
  type: 'import',
  value:
    "import CodeBlockSwitchable from '@site/src/components/CodeBlockSwitchable';",
}

const plugin = () => {
  let transformed = false
  let alreadyImported = false
  const transformer = root => {
    visit(root, node => {
      if (isImport(node) && node.value.includes('CodeBlockSwitchable')) {
        alreadyImported = true
      }
      if (isParent(node)) {
        let index = 0
        while (index < node.children.length) {
          const child = node.children[index]
          if (matchNode(child)) {
            const result = transformNode(child)
            node.children.splice(index, 1, ...result)
            index += result.length
            transformed = true
          } else {
            index += 1
          }
        }
      }
    })
    if (transformed && !alreadyImported) {
      root.children.unshift(nodeForImport)
    }
  }
  return transformer
}

module.exports = plugin
