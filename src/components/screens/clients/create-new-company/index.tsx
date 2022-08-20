import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {
    MdArrowBack,
    MdOutlineDomain,
    MdOutlineMap,
    MdPerson,
    MdOutlineWork,
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
    SpacingBottom,
    ButtonsContainer,
    ButtonSave,
    ButtonClose
} from './styles'

const CreateNewCompany: React.FC = () => {
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
                    <HeaderTitle>NOVA EMPRESA</HeaderTitle>
                </HeaderWrapper>
            </HeaderContainer>

            <Content>
                <Form
                >
                    {/* Document */}
                    <InputLabel>
                        <label>CNPJ/CPF</label>
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
                            <input placeholder="Adicionar título"/>
                        </InputContainer>
                    </InputLabel>

                    {/* Seguimento */}
                    <InputLabel>
                        <label>Seguimento da Empresa</label>
                        <InputContainer>
                            <MdOutlineWork 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <select>
                                <option value=''>Selecione o seguimento em que a empresa atua</option>
                            </select>
                        </InputContainer>
                    </InputLabel>

                    {/* Endereço */}
                    <InputLabel>
                        <label>Endereço da Empresa</label>
                        <InputContainer>
                        <MdOutlineMap 
                                size={32}
                                style={{ 
                                    minWidth: '32px', 
                                    marginLeft: '-3rem', 
                                    marginRight: '1rem'
                                }}
                                color='#A7A7A7'
                            />
                            <input 
                                type="text"
                                placeholder="Informe o CEP"
                            />
                            <Spacing />
                            <select>
                                <option value=''>Estado</option>
                            </select>
                            <Spacing />
                            <select>
                                <option value=''>Cidade</option>
                            </select>
                        </InputContainer>
                        <SpacingBottom />
                        <InputContainer>
                            <input 
                                type="text"
                                placeholder="Informe a rua com o número"
                            />
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


export default CreateNewCompany