import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { modeNames, replacementFns } from '../../plugins/node2deno/replacements.js'

export default function CodeBlockSwitchable (props) {
  const versionSuffix = (props.version == undefined || Number(props.version) === 1) ? '' : '@' + props.version

  return (
    <div>
      <Tabs groupId="node2deno" className="margin-bottom--sm">{
        modeNames.map((modeName, idx) =>
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
