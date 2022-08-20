import React from 'react'
import {
    ImPencil,
    ImPhone
} from 'react-icons/im'
import {
    Container,
    Content,
    History,
    Actions,
    Icon,
    Title,
    Qualify,
    Observation,
    Separator
} from './styles'

const ActivityHistories: React.FC = () => {
    return (
        <Container>
            <Content>
                <History>
                    <Actions>
                        <Icon>
                            <ImPencil
                                size={20}
                                color='#4C4C4C'
                                cursor='pointer'
                            />
                        </Icon>
                        <Title>
                            <h1>Ligação da campanha</h1>
                            <span>10/02/2020 ás 11:00</span>
                        </Title>
                    </Actions>
                    <Qualify>
                        <h1>Qualificação</h1>
                        <p>10/02/2020 ás 11:00</p>
                    </Qualify>
                    <Observation>
                        <h1>Observação da ligação</h1>
                        <p>DhoadnaosdoansdkjsandlkjnakdljnndlnadhAKSJLanskNLS</p>
                    </Observation>
                </History>
                <Separator />
                <History>
                    <Actions>
                        <Icon>
                            <ImPhone
                                size={20}
                                color='#4C4C4C'
                                cursor='pointer'
                            />
                        </Icon>
                        <Title>
                            <h1>Ligação da campanha</h1>
                            <span>10/02/2020 ás 11:00</span>
                        </Title>
                    </Actions>
                    <Qualify>
                        <h1>Qualificação</h1>
                        <p>Positivado</p>
                    </Qualify>
                    <Observation>
                        <h1>Observação da ligação</h1>
                        <p>DhoadnaosdoansdkjsandlkjnakdljnndlnadhAKSJLanskNLS</p>
                    </Observation>
                </History>
            </Content>
        </Container>
    )
}

export {ActivityHistories}