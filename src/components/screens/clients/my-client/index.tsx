import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ActivityHistories } from './activity-histories'
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
    ContentHeaderButton,
    CommomLabel,
    Separator
} from './styles'
import api from '../../../../hooks/api'
import { toast } from 'react-toastify'

const MyClient: React.FC = () => {
    const router = useRouter()
    const [isActiveHeader, setIsActiveHeader] = useState(0)

    const [dadosClient, setDadosClient] = useState([])
    const [contatosClient, setContatosClient] = useState([])

    const uuid = router.query.uuid
    const sizeBtnContato = 16

    useEffect(() => {
        /* DADOS DO CLIENTE */
        api.get(`/api/client/${uuid}`)
            .then(response => {
                setDadosClient(response.data.res[0])
            })
            .catch(erro => {
                let msg = erro.response.data.erro
                toast.warning('Erro ao carregar dados do cliente', {
                    autoClose: 2500,
                    onClose: () => {
                        // router.back()
                        console.log(msg)
                    }
                })
            })



    }, [])


    useEffect(() => {
        /* CONTATOS DO CLIENTE */
        api.get(`/api/client/customer-contact/${uuid}`)
            .then(response => {
                setContatosClient(response.data.res)
            })
            .catch(erro => {
                erro.response
            })
    }, [])

    const {
        nome,
        cidade,
        estado
    } = dadosClient

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
                        cursor='pointer'
                    />
                    <HeaderTitle>MEU CLIENTE</HeaderTitle>
                </HeaderWrapper>
            </HeaderContainer>
            <Content>
                <Wrapper>
                    <UserInfoContainer height="20rem">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <UserInfoAvatar></UserInfoAvatar>
                            <CommomLabel labelColor="#a3a3a3">{nome}</CommomLabel>
                            <CommomLabel labelColor="#a3a3a3" labelSize="15px">{cidade}, {estado}</CommomLabel>
                        </div>

                        <CommomLabel labelColor="#a3a3a3" labelSize="12px">Informações do Contato</CommomLabel>
                        <Separator></Separator>

                        <UserInfoIcons>
                            {contatosClient.map(contato => {
                                return (
                                    <>
                                        <p style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                            left: '30px',
                                            wordSpacing: '10px',
                                            fontSize: '13px'
                                        }}>
                                            <MdPhone size={24} color='#4C4C4C' cursor='pointer'/>{contato.phone}
                                        </p>
                                        <div style={{
                                            position: 'relative',
                                            left: '30px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            paddingRight: '6px',
                                            width: '7rem',
                                            justifyContent: 'space-around'
                                        }}>
                                            <MdModeComment size={sizeBtnContato} onClick={() => {
                                                alert(contato.phone)
                                            }} color='#4C4C4C' cursor='pointer' />
                                            <MdEmail size={sizeBtnContato} onClick={() => {
                                                alert(contato.phone)
                                            }}color='#4C4C4C' cursor='pointer' />
                                            <ImTelegram size={sizeBtnContato} onClick={() => {
                                                alert(contato.phone)
                                            }}color='#4C4C4C' cursor='pointer' />
                                            <ImWhatsapp size={sizeBtnContato} onClick={() => {
                                                alert(contato.phone)
                                            }}color='#4C4C4C' cursor='pointer' />
                                        </div>
                                    </>
                                )
                            })}

                        </UserInfoIcons>

                    </UserInfoContainer>

                    <UserInfoContainer>
                        <UserInfoAvatar></UserInfoAvatar>
                        <MdCreate size={24} color='#4C4C4C' cursor='pointer' style={{ marginTop: '1rem' }} />
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