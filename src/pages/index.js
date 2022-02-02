import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { AwesomeQRCode } from '@awesomeqr/react'

import logoSVG from './situationist-logo.svg'

const pageStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
}

const logoStyles = {
    margin: '0 auto',
    display: 'block',
    textAlign: 'center',
    width: '344px'
}

const codeStyles = {
    width: '344px',
    height: '344px'
}

const Logo = ({ onClick }) => (
    <img alt='situationi.st' src={logoSVG} style={logoStyles} onClick={onClick} />
)

const Code = ({ text, onClick }) => (
    <div style={codeStyles} onClick={onClick}>
        <AwesomeQRCode options={{ text, size: 344 }} />
    </div>
)

const IndexPage = () => {
    const [flipped, setFlipped] = useState(false)
    const flip = () => setFlipped(!flipped)
    return (
        <main style={pageStyles}>
            <div id="logo">
                <ReactCardFlip id="logo" isFlipped={flipped}>
                    <Logo onClick={flip} />
                    <Code onClick={flip} text={document.location.href} />
                </ReactCardFlip>
            </div>
        </main>
    )
}

export default IndexPage
