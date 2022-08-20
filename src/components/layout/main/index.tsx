import React from 'react'
import Header from '../header'
import Aside from '../aside'
import {
    Container,
    Content,
} from './styles'

const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <Aside />
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Layout