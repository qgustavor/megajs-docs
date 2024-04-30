// Based on https://github.com/facebook/docusaurus/blob/ca33858ca0140ee1a97646a7b0e787e68d7afcd7/packages/docusaurus-remark-plugin-npm2yarn/src/index.ts

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 
import { modes, modeNames, convert } from './replacements'

function createAttribute(attributeName, attributeValue) {
  return {
    type: 'mdxJsxAttribute',
    name: attributeName,
    value: attributeValue
  }
}

function createTabItem({ code, node, value, label }) {
  return {
    type: 'mdxJsxFlowElement',
    name: 'TabItem',
    attributes: [createAttribute('value', value), label && createAttribute('label', label)].filter(attr => Boolean(attr)),
    children: [{
      type: node.type,
      lang: node.lang,
      value: code
    }]
  }
}

const transformNode = (node) => {
  const defaultCode = node.value
  function createConvertedTabItem (converter, index) {
    return createTabItem({
      code: convert(defaultCode, converter),
      node,
      value: converter,
      label: modeNames[index]
    })
  }
  return [{
    type: 'mdxJsxFlowElement',
    name: 'Tabs',
    attributes: [{
      type: 'mdxJsxAttribute',
      name: 'groupId',
      value: 'node2deno'
    }],
    children: modes.flatMap(createConvertedTabItem)
  }]
}

const isMdxEsmLiteral = node => node.type === 'mdxjsEsm'
// TODO legacy approximation, good-enough for now but not 100% accurate
const isTabsImport = node => isMdxEsmLiteral(node) && node.value.includes('@theme/Tabs')
const isParent = node => Array.isArray(node.children)
const isNode2deno = node => node.type === 'code' && node.meta?.startsWith('node2deno-v')

function createImportNode() {
  return {
    type: 'mdxjsEsm',
    value: "import Tabs from '@theme/Tabs'\nimport TabItem from '@theme/TabItem'",
    data: {
      estree: {
        type: 'Program',
        body: [{
          type: 'ImportDeclaration',
          specifiers: [{
            type: 'ImportDefaultSpecifier',
            local: {
              type: 'Identifier',
              name: 'Tabs'
            }
          }],
          source: {
            type: 'Literal',
            value: '@theme/Tabs',
            raw: '"@theme/Tabs"'
          }
        }, {
          type: 'ImportDeclaration',
          specifiers: [{
            type: 'ImportDefaultSpecifier',
            local: {
              type: 'Identifier',
              name: 'TabItem'
            }
          }],
          source: {
            type: 'Literal',
            value: '@theme/TabItem',
            raw: '"@theme/TabItem"'
          }
        }],
        sourceType: 'module'
      }
    }
  }
}

const plugin = (options = {}) => {
  return async root => {
    const { visit } = await import('unist-util-visit')
    let transformed = false
    let alreadyImported = false
    visit(root, node => {
      if (isTabsImport(node)) {
        alreadyImported = true
      }
      if (isParent(node)) {
        let index = 0
        while (index < node.children.length) {
          const child = node.children[index]
          if (isNode2deno(child)) {
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
      root.children.unshift(createImportNode())
    }
  }
}

// To continue supporting `require('npm2yarn')` without the `.default` ㄟ(▔,▔)ㄏ
// TODO change to export default after migrating to ESM
export default plugin
