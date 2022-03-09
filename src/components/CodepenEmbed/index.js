import React from 'react'

export default function CodepenEmbed (props) {
  if (window.__CPEmbed) {
    setTimeout(() => window.__CPEmbed(), 100)
  } else {
    const script = document.createElement('script')
    script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js'
    document.head.appendChild(script)
  }

  return (
    <p
      className="codepen"
      data-height={props.height || 300}
      data-default-tab={props.defaultTab || 'js,result'}
      data-slug-hash={props.hash}
      data-user={props.user}
      style={{
        height: '300px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid',
        margin: '1em 0',
        padding: '1em'
      }}>
      <span>See <a href={'https://codepen.io/' + props.user + '/pen/' + props.hash}>this pen</a> on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
  )
}
