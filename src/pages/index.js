import React, { useEffect } from 'react'

import logoSVG from './situationist-logo.svg'

// styles
const pageStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
}

const logoStyles = {
    margin: '0 auto',
    display: 'block',
    textAlign: 'center',
    width: '344px'
}

const bgColors = ['goldenrod', 'yellow', 'green', 'blue', 'red']

const Logo = () => (<img id="logo" alt="situationi.st" src={logoSVG} style={logoStyles} />)

// markup
const IndexPage = () => {
    /*
  useEffect(() => {
    const { documentElement: doc, body } = document
      doc.style.opacity = '0.2'
      body.style.opacity = '0.2'

      const color = bgColors[Math.floor(Math.random() * bgColors.length)]
      doc.style.backgroundColor = color
      body.style.backgroundColor = color

      let opacity = 0.2
      const interval = setInterval(() => {
          opacity += 0.1
          doc.style.opacity = ''+opacity
          body.style.opacity = ''+opacity
          if (opacity >= 1) {
              clearInterval(interval)
          }
      }, 50)
  })
  */
  return (
    <main style={pageStyles}>
        <Logo />
    </main>
  )
}

export default IndexPage
