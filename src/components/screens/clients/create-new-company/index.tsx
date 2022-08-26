import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    MdArrowBack,
    MdOutlineDomain,
    MdOutlineMap,
    MdPerson,
    MdOutlineWork,
    MdOutlineFormatAlignLeft
} from 'react-icons/md'

import { BiLoader } from 'react-icons/bi'

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
    ButtonClose,
    LabelAlert
} from './styles'

import extension from './segmentos'
import axios from 'axios'
import Api from '../../../../hooks/api'

const CreateNewCompany: React.FC = () => {
    const router = useRouter()

    const redirectListClients = () => {
        router.push('/app/clients')
    }


    /* Valores dos formulários */
    const [codSegmento, setCodSegmento] = useState()
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')

    /* segmentos */
    const [segmentos, setSegmentos] = useState([])
    useEffect(() => {
        Api.get('/api/extension/segment/')
            .then(res => {
                setSegmentos(res.data.res)
            })
            .catch(erro => console.log(process.env.API))
    }, [])

    /* estados */
    const [estado, setEstado] = useState([])
    useEffect(() => {
        Api.get('/api/extension/apiCep/state')
            .then(res => {
                setEstado(res.data.res)
            })
            .catch(erro => console.log(erro))
    }, [])

    /* API CEP */
    const [loadCep, setLoadCep] = useState('none')
    async function addressApi(event) {
        const cep = event.target.value
        if (cep.length === 8) {
            setLoadCep('block')
            axios.get(`https://ws.apicep.com/cep/${cep}.json`)
                .then(res => {
                    setCidade(res.data.city)
                    setEndereco(res.data.address)
                    setBairro(res.data.district)
                    setUf(res.data.state)
                    setLoadCep('none')
                })
                .catch(erro => {
                    console.log(erro.message)
                })
        }
    }



    const body = {



    }


    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack
                        onClick={redirectListClients}
                        size={24}
                        color='#4D4D4D'
                        style={{ cursor: 'pointer' }}
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
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input placeholder="Adicionar título" />
                        </InputContainer>
                    </InputLabel>

                    {/* Nome Empresa */}
                    <InputLabel>
                        <label>Nome da Empresa</label>
                        <InputContainer>
                            <MdOutlineDomain
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input placeholder="CNPJ/CPF"/>
                        </InputContainer>
                    </InputLabel>

                    {/* Seguimento */}
                    <InputLabel>
                        <label>Seguimento da Empresa</label>
                        <InputContainer>
                            <MdOutlineWork
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select>
                                {segmentos.map((seg, key) => {
                                    return (
                                        <option value={seg.cod} key={seg.cod}>{seg.descricao}</option>
                                    )
                                })}
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

                            {/* CEP */}
                            {/* Vai carregar os dados do endereço via API */}
                            <input
                                type="text"
                                placeholder="Informe o CEP"
                                maxLength="8"
                                onChange={addressApi}
                            />

                            <BiLoader
                                size={15}
                                style={{
                                    display: loadCep,
                                    minWidth: '32px',
                                    marginLeft: '-3rem',
                                    marginRight: '1rem'
                                }}
                                color='#A7A7A7'
                            />

                            <Spacing />

                            {/* Estado */}
                            <select value={uf} onChange={(e) => setUf(e.target.value)}>
                                <option value="">Estado</option>
                                {
                                    estado.map((s, key) => {
                                        return (
                                            <option value={s.uf} key={s.cod}>{s.estado}</option>
                                        )
                                    })
                                }
                            </select>
                            <Spacing />
                            {/* cidade */}
                            <input
                                type="text"
                                placeholder="Cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            />
                        </InputContainer>
                        <SpacingBottom />
                        <InputContainer>
                            {/* Endereço */}
                            <input
                                type="text"
                                placeholder="Endereço"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                            <Spacing />

                            <input
                                type="text"
                                placeholder='Bairro'
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            />


                            <Spacing />

                            <input
                                type="text"
                                placeholder="Número"
                            />
                        </InputContainer>

                        <SpacingBottom />

                        <InputContainer>
                            {/* Complemento */}
                            <input
                                type="text"
                                placeholder="Complemento"
                                maxLength="100"
                            />

                        </InputContainer>

                    </InputLabel>

                    {/* Description */}
                    <InputLabel>
                        <label>Nota sobre o cliente</label>
                        <InputContainer>
                            <MdOutlineFormatAlignLeft
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
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