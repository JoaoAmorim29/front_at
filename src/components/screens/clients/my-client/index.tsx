import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {ActivityHistories} from './activity-histories'
import { ScheduleActivities } from './scheduled-activities'
import { LateActivities } from './late-activities'

import {
    MdCreate,
    MdPhone,
    MdModeComment,
    MdEmail,
    MdArrowBack,
} from 'react-icons/md'

import {
    ImTelegram,
    ImWhatsapp,
    ImOffice,
    ImUser
} from 'react-icons/im'

import {
    Container,
    Content,
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    Wrapper,
    UserInfoContainer,
    UserInfoAvatar,
    UserInfoIcons,
    UserInfoTitle,
    ContentUser,
    ContentHeader,
    ContentHeaderButton
} from './styles'

const MyClient: React.FC = () => {
    const router = useRouter()
    const [isActiveHeader, setIsActiveHeader] = useState(0)

    const handleActiveButtonHeader = (number: number) => {
        if (isActiveHeader == number) {
            setIsActiveHeader(0);
        } else {
            setIsActiveHeader(number);
        }
    }

    const redirectListClients = () => {
        router.push('/app/clients')
    }
    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack 
                        onClick={redirectListClients}
                        size={24} 
                        color='#4D4D4D' 
                        cursor= 'pointer'
                    />
                    <HeaderTitle>NOVO CLIENTE</HeaderTitle>
                </HeaderWrapper>
            </HeaderContainer>
            <Content>
                <Wrapper>
                    <UserInfoContainer>
                        <UserInfoAvatar></UserInfoAvatar>
                        <UserInfoIcons>
                            <MdCreate size={24} color='#4C4C4C' cursor='pointer' />
                            <MdPhone size={24} color='#4C4C4C' cursor='pointer' />
                            <MdModeComment size={24} color='#4C4C4C' cursor='pointer' />
                            <MdEmail size={24} color='#4C4C4C' cursor='pointer' />
                            <ImTelegram size={24} color='#4C4C4C' cursor='pointer' />
                            <ImWhatsapp size={24} color='#4C4C4C' cursor='pointer' />
                        </UserInfoIcons>
                        <UserInfoTitle>
                            <ImUser size={24} color='#4C4C4C' cursor='pointer' />
                            Rai Lopes
                        </UserInfoTitle>
                    </UserInfoContainer>

                    <UserInfoContainer>
                        <UserInfoAvatar></UserInfoAvatar>
                            <MdCreate size={24} color='#4C4C4C' cursor='pointer' style={{marginTop: '1rem'}} />
                        <UserInfoTitle>
                            <ImOffice size={24} color='#4C4C4C' cursor='pointer' />
                            Localweb Serviços LTDA.
                        </UserInfoTitle>
                    </UserInfoContainer>
                </Wrapper>
                
                <ContentUser>
                    <ContentHeader>
                        <ContentHeaderButton
                            onClick={() => handleActiveButtonHeader(0)}
                            isActive={isActiveHeader === 0 ? true : false}
                        >
                            HISTÓRICO DE ATIVIDADES
                        </ContentHeaderButton>
                        <ContentHeaderButton
                            onClick={() => handleActiveButtonHeader(1)}
                            isActive={isActiveHeader === 1 ? true : false}
                        >
                            ATIVIDADES PROGRAMADAS
                        </ContentHeaderButton>
                        <ContentHeaderButton
                            onClick={() => handleActiveButtonHeader(2)}
                            isActive={isActiveHeader === 2 ? true : false}
                        >
                            ATIVIDADES ATRASADAS
                        </ContentHeaderButton>
                    </ContentHeader>
                    {isActiveHeader === 0 && (
                        <ActivityHistories />
                    )}
                     {isActiveHeader === 1 && (
                        <ScheduleActivities />
                    )}
                    {isActiveHeader === 2 && (
                        <LateActivities />
                    )}
                </ContentUser>
            </Content>
        </Container>
    )
}

export default MyClient