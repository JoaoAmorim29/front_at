import React from 'react'
import {
    Container,
    Header,
    Main,
    Footer,
    Avatar,
    Title
} from './styles'

interface IProps {
    isActive: boolean;
}
const UserMenuModel: React.FC<IProps> = ({isActive}) => {

    return (
        <Container
            isActive={isActive}
        >
            <Header>
                <Avatar />
                <Title>
                    <h1>Raí Lopes</h1>
                    <span>Gerente</span>
                </Title>
            </Header>
            <Main>
                <button>Meus Dados</button>
                <button>Trocar Senha</button>
            </Main>
            <Footer>
                <h1>Sair</h1>
                <span>V 3.0</span>
            </Footer>
        </Container>
    )
}

export {UserMenuModel}