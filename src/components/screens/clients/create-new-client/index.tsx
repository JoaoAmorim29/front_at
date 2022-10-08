import React, { useState, useEffect } from 'react'
import InputMask from "react-input-mask";
import { useRouter } from 'next/router'
import {
    MdArrowBack,
    MdOutlineDomain,
    MdOutlineCall,
    MdEmail,
    MdPerson,
    MdOutlineFormatAlignLeft,
    MdDone
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
    ButtonClose,
} from './styles'
import Api from '../../../../hooks/api'
import api from '../../../../hooks/api'
import { Bounce, toast, Zoom } from 'react-toastify';
import validate from './validate'



const CreateNewClient: React.FC = () => {
    const router = useRouter()

    const redirectListClients = () => {
        router.push('/app/clients')
    }

    const redirectNewCompany = () => {
        router.push('/app/clients/new-company')
    }

    const [codSegmento, setCodSegmento] = useState()
    const [segmentos, setSegmentos] = useState([])
    const [empresas, setEmpresas] = useState([])
    const [codEmpresa, setCodEmpresa] = useState('')
    const [note, setNote] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')

    const [errors, setErrors] = useState({
        name: '',
        codCompany: '',
        note: '',
        contact: {
            phone: '',
            email: ''
        }
    })

    const body = {
        name: nome,
        codCompany: codEmpresa,
        note: note,
        contact: {
            phone: phone,
            email: email
        }
    }


    /* const cadastrarClient = (e) => {
        e.preventDefault()
        console.log(body)
        api.post('/api/client/add', body)
            .then(res => console.log(res))
            .catch(erro => console.log(erro))
    } */

    const sucessoId = 'sucesso'
    const erroId = 'erro'

    const cadastrarClient = async (e: any) => {
        e.preventDefault()

        setErrors(validate(body))

        toast.promise(
            api.post('/api/client/add', body), {
            pending: 'Processando',
            success: {
                render({ data }) {
                    return (data?.data.res.msg)
                }
            },
            error: {
                render({ data }){
                    console.log(data)
                    return (data.response.data.erro)
                }
            }
        }
        )
    }


    const selectEmpresa = (e) => {
        let cod = e.target.value
        setCodEmpresa(cod)
        empresas.map(empresa => {
            if (empresa.codigo === cod) {
                setCodSegmento(empresa.cod_segmento)
            }
        })
    }

    useEffect(() => {
        Api.get('/api/extension/segment/')
            .then(res => {
                setSegmentos(res.data.res)
            })
            .catch(erro => console.log(erro))
    }, [])

    useEffect(() => {
        Api.get('/api/company/')
            .then(res => {
                //console.log(res.data.res)
                setEmpresas(res.data.res)
            })
            .catch(erro => console.log(erro))
    }, [])


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
                    <HeaderTitle>NOVO CLIENTE</HeaderTitle>
                </HeaderWrapper>
            </HeaderContainer>

            <Content>
                <Form
                >
                    {/* Nome Cliente */}
                    <InputLabel>
                        <label>Nome do Cliente</label>
                        <InputContainer errorStyle={errors.name}>
                            <MdPerson
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input
                                placeholder="Adicionar título"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                        </InputContainer>
                        {errors.name && <span className='formField__error'>{errors.name}</span>}
                    </InputLabel>

                    {/* Nome Empresa */}
                    <InputLabel>
                        <label>Nome da Empresa</label>
                        <InputContainer errorStyle={errors.codCompany}>
                            <MdOutlineDomain
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select value={codEmpresa} onChange={selectEmpresa}>
                                <option value="0">Selecione a empresa</option>
                                {empresas.map((empresa, key) => {
                                    return (
                                        <option value={empresa.codigo} key={empresa.codigo}>{empresa.razao_social}</option>
                                    )
                                })}
                            </select>
                        </InputContainer>
                        <a onClick={redirectNewCompany}>Adicionar nova empresa</a>
                        {errors.codCompany && <span className='formField__error'>{errors.codCompany}</span>}
                    </InputLabel>

                    {/* Seguimento */}
                    <InputLabel>
                        <label>Seguimento da Empresa</label>
                        <InputContainer>
                            <MdOutlineDomain
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select disabled value={codSegmento} onChange={(e) => setCodSegmento(e.target.value)}>
                                <option value="0">Segmentos</option>
                                {segmentos.map((seg, key) => {
                                    return (
                                        <option value={seg.cod} key={seg.cod}>{seg.descricao}</option>
                                    )
                                })}
                            </select>
                        </InputContainer>
                    </InputLabel>

                    {/* Telefone */}
                    <InputLabel>
                        <label>Telefone do cliente</label>
                        <InputContainer errorStyle={errors.contact.phone}>
                            <MdOutlineCall
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <InputMask
                                mask='(999) 9 9999-9999'
                                placeholder="(XXX) 9 XXXX-XXXX"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </InputContainer>
                        {errors.contact.phone && <span className='formField__error'>{errors.contact.phone}</span>}
                    </InputLabel>

                    {/* Email */}
                    <InputLabel>
                        <label>E-mail do cliente</label>
                        <InputContainer errorStyle={errors.contact.email}>
                            <MdEmail
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input
                                placeholder="email@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputContainer>
                        {errors.contact.email && <span className='formField__error'>{errors.contact.email}</span>}
                    </InputLabel>

                    {/* Description */}
                    <InputLabel>
                        <label>Nota sobre o cliente</label>
                        <InputContainer errorStyle={errors.note}>
                            <MdOutlineFormatAlignLeft
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <textarea
                                placeholder='Adicionar nota ou observação sobre seu cliente'
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            >

                            </textarea>
                        </InputContainer>
                        {errors.note && <span className='formField__error'>{errors.note}</span>}
                    </InputLabel>

                    <ButtonsContainer>

                        <ButtonSave
                            onClick={cadastrarClient}
                        >Salvar</ButtonSave>


                        <ButtonClose
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