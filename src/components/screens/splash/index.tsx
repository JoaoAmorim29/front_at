/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
    Container,
    Imagem
} from './styles'

const Splash: React.FC = () => {
    return (
        <Container
        >
            <Imagem
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 360, 360, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.3, 0.6, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                src="./assets/logo_tallk_signin.svg" alt="Logo do tallk-me"
            />
        </Container>
    )
}

export default Splash
