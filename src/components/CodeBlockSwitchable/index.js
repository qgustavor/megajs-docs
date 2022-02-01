import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function CodeBlockSwitchable (props) {
  const version = props.version || 0
  const modes = [ 'Node ESM', 'Node CJS', version > 0 ? 'Browser/Deno' : 'Browser' ]
  const replacementFns = [
    e => e,
    e => e.replace(/import (.+?) from 'megajs'/g, "const $1 = require('megajs')"),
    e => e.replace(/import (.+?) from 'megajs'/g, `import $1 from 'https://unpkg.com/megajs@${version}/dist/main.browser-es.js'`)
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
