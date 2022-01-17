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

const Logo = () => (<img alt="situationi.st" src={logoSVG} style={logoStyles} />)

// markup
const IndexPage = () => {
  useEffect(() => {
    const color = bgColors[Math.floor(Math.random() * bgColors.length)]
    document.documentElement.style.backgroundColor = color
    document.body.style.backgroundColor = color
  })
  return (
    <main style={pageStyles}>
        <Logo />
    </main>
  )
}

export default IndexPage
