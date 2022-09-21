import React, {useState, useEffect} from 'react'
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
import Api from '../../../../hooks/api'

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

    const selectEmpresa = (e) => {
        let cod = e.target.value
        setCodEmpresa(cod)
        empresas.map(empresa => {
            if(empresa.codigo === cod) {
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