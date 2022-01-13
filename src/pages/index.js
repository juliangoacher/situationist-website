import * as React from 'react'

import logoSVG from './situationist-logo.svg'

const Logo = () => (<img src={logoSVG} />)

// styles
const pageStyles = {
  padding: '10%'
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
        <Logo />
    </main>
  )
}

export default IndexPage
