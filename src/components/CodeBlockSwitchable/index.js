import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function CodeBlockSwitchable (props) {
  const versionSuffix = (props.version == undefined || Number(props.version) === 1) ? '' : '@' + props.version
  const modes = [ 'Node ESM', 'Node CJS', 'Browser' ]
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
      e = e
        .replace(/import (.+?) from 'megajs'/g, "const $1 = require('megajs')")
      return e
    },
    e => e
      .replace(/import (.+?) from 'megajs'/g, `import $1 from 'https://cdn.skypack.dev/megajs${versionSuffix}'`)
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
