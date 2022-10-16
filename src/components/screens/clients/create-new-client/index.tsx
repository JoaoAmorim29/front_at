import React, { useState, useEffect } from 'react'
//import InputMask from "react-input-mask";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
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
   

    /* const cadastrarClient = (e) => {
        e.preventDefault()
        console.log(body)
        api.post('/api/client/add', body)
            .then(res => console.log(res))
            .catch(erro => console.log(erro))
    } */

    const sucessoId = 'sucesso'
    const erroId = 'erro'

    const body = {
        name: nome,
        codCompany: codEmpresa,
        note: note,
        contact: {
            phone: phone,
            email: email
        }
    }


    const cadastrarClient = async({name, codCompany, note, phone, email}: any) => {

        setNome(name)
        setCodEmpresa(codCompany)
        setNote(note)
        setPhone(phone)
        setEmail(phone)

        console.log(body)

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

    const Schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório.'),
        codCompany: yup.number().min(1, 'Empresa é obrigatória.').required('Empresa é obrigatória.'),
        note: yup.string().required('Descrição é obrigatória.'),
        phone: yup.string().required('Telefone é obrigatório.').min(12, 'Digite um número válido.'),
        email: yup.string().required('Email é obrigatório.').email('Insira um email válido.')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange',
        resolver: yupResolver(Schema),
    });

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
                <Form onSubmit={handleSubmit(cadastrarClient)}
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
                                id='name'
                                {...register('name')}
                            />

                        </InputContainer>
                        {errors.name && <span className='formField__error'>{errors.name.message}</span>}
                    </InputLabel>

                    {/* Nome Empresa */}
                    <InputLabel>
                        <label>Nome da Empresa</label>
                        <InputContainer errorStyle= {errors.codCompany}>
                            <MdOutlineDomain
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select id='codCompany' {...register('codCompany')}>
                                <option value="0">Selecione a empresa</option>
                                {empresas.map((empresa, key) => {
                                    return (
                                        <option value={empresa.codigo} key={empresa.codigo}>{empresa.razao_social}</option>
                                    )
                                })}
                            </select>
                        </InputContainer>
                        <a onClick={redirectNewCompany}>Adicionar nova empresa</a>
                        {errors.codCompany && <span className='formField__error'>{errors.codCompany.message}</span>}
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
                        <InputContainer errorStyle={errors.phone}>
                            <MdOutlineCall
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input
                                placeholder="(XXX) 9 XXXX-XXXX"
                                id='phone'
                                {...register('phone')}
                            />
                        </InputContainer>
                        {errors.phone && <span className='formField__error'>{errors.phone.message}</span>}
                    </InputLabel>

                    {/* Email */}
                    <InputLabel>
                        <label>E-mail do cliente</label>
                        <InputContainer errorStyle={errors.email}>
                            <MdEmail
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input
                                placeholder="email@email.com"
                                id='email'
                                {...register('email')}
                            />
                        </InputContainer>
                        {errors.email && <span className='formField__error'>{errors.email.message}</span>}
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
                                id='note'
                                {...register('note')}
                            >

                            </textarea>
                        </InputContainer>
                        {errors.note && <span className='formField__error'>{errors.note.message}</span>}
                    </InputLabel>

                    <ButtonsContainer>

                        <ButtonSave
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