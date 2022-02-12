import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function CodeBlockSwitchable (props) {
  const version = props.version || '0'
  const majorVersion = parseInt(version.split('.')[0])
  const modes = [ 'Node ESM', 'Node CJS', majorVersion > 0 ? 'Browser/Deno' : 'Browser' ]
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
          .replace(/^\s*$/m, "\n// Node don't support top-level await when using CJS\n;(async function () {")
          .replace(/\n*$/, '\n}())\n')
      }
      e = e
        .replace(/import (.+?) from 'megajs'/g, "const $1 = require('megajs')")
      return e
    },
    e => e
      .replace(/import (.+?) from 'megajs'/g, `// @deno-types="https://cdn.skypack.dev/megajs@${version}/types/es.d.ts"\nimport $1 from 'https://cdn.skypack.dev/megajs@${version}'`)
      .replace(/\/\/ node2deno:if-node\n.*\n/g, '')
      .replace(/\/\/ node2deno:if-deno\n/g, '')
  ]

  return (
    <div>
      <Tabs groupId="node2deno" className="margin-bottom--sm">{
        modes.map((modeName, idx) =>
          <TabItem value={idx} label={modeName}
            onClick={() => setMode(idx)}
            key={'+'+ idx}
          >
            <CodeBlock language={props.language}>{replacementFns[idx](props.code)}</CodeBlock>
          </TabItem>
        )
      }</Tabs>
    </div>
  )
}
