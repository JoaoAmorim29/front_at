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
import CodInput from './codInput'
import { cnpj, cpf } from 'cpf-cnpj-validator'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateNewCompany: React.FC = () => {
    const router = useRouter()

    /* Valores dos formulários */
    const [codSegmento, setCodSegmento] = useState(0)
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [numero, setNumero] = useState('')
    const [rua, setRua] = useState('')
    const [cod, setCod] = useState('')
    const [name, setName] = useState('')
    const [observacao, setObservacao] = useState('')

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
    const [getCep, setCep] = useState('')
    async function addressApi(event) {
        const cep = event.target.value
        if (cep.length === 8) {
            setLoadCep('block')
            axios.get(`https://ws.apicep.com/cep/${cep}.json`)
                .then(res => {
                    setCep(cep)
                    setCidade(res.data.city)
                    setEndereco(res.data.address)
                    setBairro(res.data.district)
                    setUf(res.data.state)
                    setLoadCep('none')
                })
                .catch(erro => {
                    console.log(erro)
                })
        }
    }


    /* ENVIAR OS DADOS VIA POST */

    const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjE4MjM1MTAsImV4cCI6MTY2MTg0MTUxMH0.vwgtThvc85PlyK2zg8NCcSmTQGMFvWdBK0n7krNe1Ck';


    const body = {
        cod: cod,
        name: name,
        segment: { cod: codSegmento, "desc": "" },
        obs: observacao,
        address: {
            cep: getCep,
            uf: uf,
            city: cidade,
            address: endereco,
            district: bairro,
            n: numero,
            cmpl: complemento,
            str: rua
        }
    }

    const cadastrarCompany = (e) => {
        e.preventDefault()
        Api.post('/api/company/add', body)
            .then(res => {
                console.log(res)
                router.push('/app/clients')
            })
            .catch(erro => console.log(erro))
    }


    //https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
    const [municipios, setMunicipios] = useState([])
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/PA/municipios')
            .then(res => {
                setMunicipios(res.data)
            })
    }, [])

    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack
                        //onClick={redirectListClients}
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
                            {/* <CodInput 
                                placeholder="CNPJ"
                                value={cod}
                                onChange={(e) => setCod(e.target.value)}
                                ></CodInput> */}

                            <input
                                type="text"
                                placeholder='CNPJ/CPF'
                                value={cod}
                                max="14"
                                onChange={(e) => setCod(e.target.value)}
                            />

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
                            <input
                                placeholder="Nome da Empresa"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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
                            <select value={codSegmento} onChange={(e) => setCodSegmento(e.target.value)}>
                                <option value="0">Segmentos</option>
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
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}

                            />
                        </InputContainer>

                        <SpacingBottom />

                        <InputContainer>
                            {/* Complemento */}
                            <input
                                type="text"
                                placeholder="Complemento"
                                maxLength="100"
                                value={complemento}
                                onChange={(e) => setComplemento(e.target.value)}
                            />
                            <Spacing />
                            {/* Rua */}
                            <input
                                type="text"
                                placeholder="Rua"
                                maxLength="100"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
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
                                value={observacao}
                                onChange={(e) => setObservacao(e.target.value)}
                            >

                            </textarea>
                        </InputContainer>
                    </InputLabel>

                    <ButtonsContainer>

                        <ButtonSave onClick={cadastrarCompany}>Salvar</ButtonSave>

                        <ButtonClose
                        onClick={(e) => {
                            e.preventDefault()
                            router.push('/app/clients')
                        }}
                        >
                            Sair
                        </ButtonClose>
                    </ButtonsContainer>
                </Form>
            </Content>
            <ToastContainer></ToastContainer>
        </Container>
    )
}


export default CreateNewCompany