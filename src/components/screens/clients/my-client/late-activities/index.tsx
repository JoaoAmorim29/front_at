import React from 'react'
import {
    MdPhone,
    MdPerson,
    MdBookmark,
    MdMoreVert
} from 'react-icons/md'
import {
    ImClock
} from 'react-icons/im'
import {
    Container,
    CardContainer,
    CardInformation,
    Square,
    Informations,
    Actions
} from './styles'
const LateActivities: React.FC = () => {
    return (
        <Container>
            <CardContainer>
                    <CardInformation>
                        <Square />
                        <Informations>
                            <div className='title'>
                                <MdPhone 
                                    size={24}
                                    color='#9E9E9E'
                                    cursor='pointer'
                                />
                                <span>
                                    Ligar para TI TELECOM SERVICES para retomar o contato
                                </span>
                            </div>
                            <div>
                                <MdPerson 
                                    size={24}
                                    color='#9E9E9E'
                                    cursor='pointer'
                                />
                                <span className='person'>
                                    479885560160
                                </span>
                            </div>
                            <div>
                                <ImClock 
                                    size={24}
                                    color='#9E9E9E'
                                    cursor='pointer'
                                />
                                <span className='date'>
                                    Terça-Feira, 8 de fevereiro - 18:00 até 18:30
                                </span>
                            </div>
                        </Informations>
                    </CardInformation>
                    <Actions>
                        <MdBookmark 
                            size={32}
                            color='#FF9F43'
                            cursor='pointer'
                            style={{ 
                                position: 'absolute',
                                left: '-3rem',
                                top: '-1rem'
                            }}
                        />
                        <MdMoreVert 
                            size={32}
                            color='#4D4D4D'
                            cursor='pointer'
                        />
                    </Actions>
            </CardContainer>
        </Container>
    )
}


export {LateActivities}