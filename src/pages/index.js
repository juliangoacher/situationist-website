import * as React from 'react'

import logoSVG from './situationist-logo.svg'

// styles
const pageStyles = {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
}

const logoStyles = {
    margin: '0 auto',
    display: 'block'
}

const Logo = () => (<img src={logoSVG} style={logoStyles} />)

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
        <Logo />
    </main>
  )
}

export default IndexPage
