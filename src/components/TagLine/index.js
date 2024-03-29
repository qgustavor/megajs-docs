import React, { useEffect, useRef } from 'react'

export default function TagLine () {
  const el = useRef(null)

  // Animation runs using pure JavaScript and CSS for improved performance
  // (mostly because typewriting-react was slow and making a lot of DOM changes)

  useEffect(() => {
    // Fallback for older browsers
    if (!el.current.animate) return
    el.current.innerHTML = ''

    const originalWords = ['Node.js', 'Browser', 'TypeScript', 'JavaScript']
    let words = originalWords.slice()
    let currentWord = 'JavaScript'

    const prefixEl = document.createElement('span')
    const middleEl = document.createElement('span')
    const suffixEl = document.createElement('span')
    prefixEl.textContent = 'Unofficial'
    middleEl.textContent = currentWord
    suffixEl.textContent = 'SDK for MEGA'

    el.current.appendChild(prefixEl)
    el.current.appendChild(middleEl)
    el.current.appendChild(suffixEl)

    let currentTimeout
    const wait = time => new Promise(resolve => {
      currentTimeout = setTimeout(resolve, time)
    })

    async function animationLoop () {
      if (words.length === 0) {
        await wait(5000)
        words = originalWords.slice()
      }
      const newWord = currentWord
        ? ''
        : words.shift()

      // Use the FLIP technique
      // :: First
      const prefixBF = prefixEl.getBoundingClientRect()
      const suffixBF = suffixEl.getBoundingClientRect()

      // :: Execute
      middleEl.textContent = newWord

      // :: Last
      const prefixBL = prefixEl.getBoundingClientRect()
      const suffixBL = suffixEl.getBoundingClientRect()

      // :: Invert
      const prefixDelta = prefixBF.left - prefixBL.left
      const suffixDelta = suffixBF.left - suffixBL.left

      // :: Play
      if (!newWord) middleEl.textContent = currentWord
      currentWord = newWord

      if (currentWord) {
        prefixEl.animate([{
          transformOrigin: 'top left',
          transform: `translateX(${prefixDelta}px)`
        }, {
          transformOrigin: 'top left',
          transform: 'none'
        }], {
          duration: 300,
          easing: 'ease-out',
          fill: 'both'
        })
      }
      middleEl.animate([{
        transformOrigin: 'top center',
        transform: newWord ? 'perspective(7em) rotateY(-90deg)' : 'none'
      }, {
        transformOrigin: 'top center',
        transform: newWord ? 'none' : 'perspective(7em) rotateY(90deg)'
      }], {
        duration: 300,
        easing: 'linear',
        fill: 'both'
      })
      if (currentWord) {
        suffixEl.animate([{
          transformOrigin: 'top left',
          transform: `translateX(${suffixDelta}px)`
        }, {
          transformOrigin: 'top left',
          transform: 'none'
        }], {
          duration: 300,
          easing: 'ease-out',
          fill: 'both'
        })
      }

      await wait(currentWord ? 2500 : 300)
      animationLoop()
    }
    setTimeout(animationLoop, 500)

    return () => {
      clearTimeout(currentTimeout)
    }
  }, [])

  return (
    <p className='hero__subtitle flip_tagline' ref={el}>
      <span>Unofficial</span>
      <span>JavaScript</span>
      <span>SDK for MEGA</span>
    </p>
  )
}
