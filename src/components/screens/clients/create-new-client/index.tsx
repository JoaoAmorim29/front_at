import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {
    MdArrowBack,
    MdOutlineDomain,
    MdOutlineCall,
    MdEmail,
    MdPerson,
    MdOutlineFormatAlignLeft
} from 'react-icons/md'
import {
    Container,
    Content,
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    Form,
    InputLabel,
    InputContainer,
    Spacing,
    RepeatTask,
    ButtonsContainer,
    ButtonSave,
    ButtonClose
} from './styles'

const CreateNewClient: React.FC = () => {
    const router = useRouter()

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
                        style={{cursor: 'pointer'}} 
                    />
                    <HeaderTitle>NOVO CLIENTE</HeaderTitle>
                </HeaderWrapper>
            </HeaderContainer>

            <Content>
                <Form
                >
                    {/* Nome Cliente */}
                    <InputLabel>
                        <label>Nome do Cliente</label>
                        <InputContainer>
                            <MdPerson
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <input placeholder="Adicionar título"/>
                        </InputContainer>
                    </InputLabel>

                    {/* Nome Empresa */}
                    <InputLabel>
                        <label>Nome da Empresa</label>
                        <InputContainer>
                            <MdOutlineDomain 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <select>
                                <option value=''>Nenhuma empresa selecionado</option>
                            </select>
                        </InputContainer>
                        <a>Adicionar nova empresa</a>
                    </InputLabel>

                    {/* Seguimento */}
                    <InputLabel>
                        <label>Seguimento da Empresa</label>
                        <InputContainer>
                            <MdOutlineDomain 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <select>
                                <option value=''>Selecione o seguimento em que a empresa atua</option>
                            </select>
                        </InputContainer>
                    </InputLabel>

                    {/* Telefone */}
                    <InputLabel>
                        <label>Telefone do cliente</label>
                        <InputContainer>
                            <MdOutlineCall
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <input placeholder="(XX) 9 XXXX-XXXX"/>
                        </InputContainer>
                    </InputLabel>

                    {/* Email */}
                    <InputLabel>
                        <label>E-mail do cliente</label>
                        <InputContainer>
                            <MdEmail
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <input placeholder="email@email.com"/>
                        </InputContainer>
                    </InputLabel>

                    {/* Description */}
                    <InputLabel>
                        <label>Nota sobre o cliente</label>
                        <InputContainer>
                            <MdOutlineFormatAlignLeft 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                           <textarea
                                placeholder='Adicionar nota ou observação sobre seu cliente'
                           >

                           </textarea>
                        </InputContainer>
                    </InputLabel>

                    <ButtonsContainer>
                        <ButtonSave>Salvar</ButtonSave>
                        <ButtonClose
                            onClick={redirectListClients}
                        >
                            Sair
                        </ButtonClose>
                    </ButtonsContainer>
                </Form>
            </Content>
        </Container>
    )
}


export default CreateNewClient