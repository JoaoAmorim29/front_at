import React, { useState, useEffect } from 'react'
import InputMask from "react-input-mask";
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
    InputAdress,
    SelectAdress,
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
import codInput from './codInput'
import { cnpj, cpf } from 'cpf-cnpj-validator'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

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
            .catch(erro => console.log(erro))
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
                .catch(erro => console.log(erro))
        }
    }


    /* ENVIAR OS DADOS VIA POST */

    const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjE4MjM1MTAsImV4cCI6MTY2MTg0MTUxMH0.vwgtThvc85PlyK2zg8NCcSmTQGMFvWdBK0n7krNe1Ck';

    /* Máscaras de CPF ou CNPJ */
    const masks = {
        cpf: '999.999.999-99',
        cnpj: '99.999.999/9999-99'
    }

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
    
    const cadastrarCompany = ({cnpj, name, codSegment, obs, cep, uf, city, address, district, n, cmpl, str}: any) => {

        setCod(cnpj)
        setName(name)
        setCodSegmento(codSegment)
        setObservacao(obs)
        setCep(cep)
        setUf(uf)
        setCidade(city)
        setEndereco(address)
        setBairro(district)
        setNumero(n)
        setComplemento(cmpl)
        setRua(str)

        console.log(body)

        
        Api.post('/api/company/add', body)
            .then(res => {
                console.log(res)
                router.push('/app/clients')
            })
            .catch(erro => {
                console.log(erro)
            })
    }


    //https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
    const [municipios, setMunicipios] = useState([])
    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/PA/municipios')
            .then(res => {
                setMunicipios(res.data)
            })
    }, [])

    
    const Schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório.'),
        cep: yup.string().required('CEP é obrigatório.').matches(/^\d{5}(\d{3})?$/, 'CEP inválido.'),
        cnpj: yup.string().required('CNPJ é obrigatório.').min(1).matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, 'CNPJ inválido.'),
        codSegment: yup.number().min(1, 'Segmento é obrigatório.').required('Segmento é obrigatório.'),
        obs: yup.string().required('Descrição é obrigatória.'),
        uf: yup.string().required('Estado é obrigatório.'),
        city: yup.string().required('Cidade é obrigatória.'),
        address: yup.string().required('Endereço é obrigatório.'),
        district: yup.string().required('Bairro é obrigatório.'),
        n: yup.string().required('Número é obrigatório.'),
        cmpl: yup.string().required('Complimento é obrigatório.'),
        str: yup.string().required('Rua é obrigatória.')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange',
        resolver: yupResolver(Schema),
    });

    const {onChange} = register('name');

    console.log(errors)

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
                <Form onSubmit={handleSubmit(cadastrarCompany)}
                >
                    {/* Document */}
                    
                    <InputLabel>
                        <label>CNPJ/CPF</label>
                        <InputContainer errorStyle={errors.cnpj}>
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
                                placeholder='CNPJ/CPF (Ex: 99.999.999/9999-99)'
                                max="14"
                                /*value={cod}
                                onChange={(e) => setCod(e.target.value)}*/
                                id='cnpj'
                                {...register('cnpj')}
                            />

                        </InputContainer>
                        {errors.cnpj && <span>{errors.cnpj.message}</span>}
                    </InputLabel>

                    {/* Nome Empresa */}
                    <InputLabel>
                        <label>Nome da Empresa</label>
                        <InputContainer errorStyle={errors.name}>
                            <MdOutlineDomain
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <input
                                placeholder="Nome da Empresa"
                                id='name'
                                {...register('name')}
                            />
                        </InputContainer>
                        {errors.name && <span className='formField__error'>{errors.name.message}</span>}
                    </InputLabel>

                    {/* Seguimento */}
                    <InputLabel>
                        <label>Seguimento da Empresa</label>
                        <InputContainer errorStyle={errors.codSegment}>
                            <MdOutlineWork
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select  id='codSegment' {...register('codSegment')}>
                                <option value="0">Segmentos</option>
                                {segmentos.map((seg, key) => {
                                    return (
                                        <option value={seg.cod} key={seg.cod}>{seg.descricao}</option>
                                    )
                                })}
                            </select>
                        </InputContainer>
                        {errors.codSegment && <span className='formField__error'>{errors.codSegment.message}</span>}
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
                            <div className="inputContainerDiv">
                                <InputAdress
                                    errorStyle={errors.cep}
                                    type="text"
                                    placeholder="Informe o CEP"
                                    maxLength = "8"
                                    //onChange={addressApi}
                                    id='cep'
                                    {...register('cep', {onChange: addressApi})}
                                />
                                {errors.cep && <span className='formField__error'>{errors.cep.message}</span>}
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
                            </div>

                            <Spacing />

                            {/* Estado */}
                            <div className="inputContainerDiv">
                                <SelectAdress errorStyle={errors.uf} id='uf' {...register('uf')}>
                                    <option value="">Estado</option>
                                    {
                                        estado.map((s, key) => {
                                            return (
                                                <option value={s.uf} key={s.cod}>{s.estado}</option>
                                            )
                                        })
                                    }
                                </SelectAdress>
                                {errors.uf && <span className='formField__error'>{errors.uf.message}</span>}
                            </div>

                            <Spacing />

                            {/* cidade */}
                            <div className="inputContainerDiv">
                                <InputAdress
                                    errorStyle={errors.city}
                                    type="text"
                                    placeholder="Cidade"
                                    id='city'
                                    {...register('city')}
                                />
                                {errors.city && <span className='formField__error'>{errors.city.message}</span>}
                            </div>
                        </InputContainer>

                        <SpacingBottom />

                        <InputContainer>
                            {/* Endereço */}
                            <div className="inputContainerDiv">
                            <InputAdress
                                errorStyle={errors.address}
                                type="text"
                                placeholder="Endereço"
                                id='address'
                                {...register('address')}
                            />
                            {errors.address && <span className='formField__error'>{errors.address.message}</span>}
                            </div>
                           
                            <Spacing />

                            <div className="inputContainerDiv">
                                <InputAdress
                                    errorStyle={errors.district}
                                    type="text"
                                    placeholder='Bairro'
                                    id='district'
                                    {...register('district')}
                                />
                                {errors.district && <span className='formField__error'>{errors.district.message}</span>}
                            </div>
                            
                            <Spacing />

                            <div className="inputContainerDiv">
                                <InputAdress
                                    errorStyle={errors.n}
                                    type="text"
                                    placeholder="Número"
                                    id='n'
                                    {...register('n')}
                                />
                                {errors.n && <span className='formField__error'>{errors.n.message}</span>}
                            </div>
                        </InputContainer>

                        <SpacingBottom />

                        <InputContainer>
                            {/* Complemento */}
                            <div className="inputContainerDiv">
                                <InputAdress
                                    errorStyle={errors.cmpl}
                                    type="text"
                                    placeholder="Complemento"
                                    maxLength="100"
                                    id='cmpl'
                                    {...register('cmpl')}
                                />
                                {errors.cmpl && <span className='formField__error'>{errors.cmpl.message}</span>}
                            </div>

                            <Spacing />

                            {/* Rua */}
                            <div className="inputContainerDiv">
                                <InputAdress
                                    errorStyle={errors.str}
                                    type="text"
                                    placeholder="Rua"
                                    maxLength="100"
                                    id='str'
                                    {...register('str')}
                                />
                                {errors.str && <span className='formField__error'>{errors.str.message}</span>}
                            </div>

                        </InputContainer>

                    </InputLabel>

                    {/* Description */}
                    <InputLabel>
                        <label>Nota sobre o cliente</label>
                        <InputContainer errorStyle={errors.obs}>
                            <MdOutlineFormatAlignLeft
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <textarea
                                placeholder='Adicionar nota ou observação sobre seu cliente'
                                id='obs'
                                {...register('obs')}
                            >

                            </textarea>
                        </InputContainer>
                        {errors.obs && <span className='formField__error'>{errors.obs.message}</span>}
                    </InputLabel>

                    <ButtonsContainer>

                        <ButtonSave type='submit'>Salvar</ButtonSave>

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