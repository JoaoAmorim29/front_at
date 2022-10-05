import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import {
    MdArrowBack,
    MdSearch
} from 'react-icons/md'

import {
    Container,
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderInputContainer,
    ButtonHeaderContainer,
    ButtonHeader,
    ButtonHeaderMenu,
    Content,
    FilterContainer,
    FilterButton,
    TableContainer,
    Table,
    ButtonRedirectView
} from './styles'
import client from './Client'
import api from '../../../hooks/api'
import { toast } from 'react-toastify'


const Client: React.FC = () => {
    const router = useRouter()
    const [isActive, setIsActive] = useState('')
    const [buttonHeaderActive, setButtonHeaderActive] = useState(false)
    const handleSelectFilter = (filter: string) => {
        setIsActive(filter)
    }
    const [clients, setClients] = useState([])

    useEffect(() => {
        api.get('/api/client')
            .then(res => {
                setClients(res.data.res)
            })
            .catch(erro => {
                let msg = erro.response.data.erro
                toast.warning( msg === '' ? 'Erro ao carregar dados' : msg, {
                    autoClose: 2500
                })
            })
    }, [])


    const redirectViewClient = (row) => {
       
    }
    
    const select = () => {
        console.log('teste')
    }

    const customStyles = {
        rows: {
            style: {
            },
        },
        headCells: {
            style: {
                backgroundColor: '#D3D3D3',
                color: '#232323'
            },
        },
        cells: {
            style: {
                color: '#232323'
            },
        },
    };

    const [selectRow, setSelectRow] = useState([])
    const handleChange = ({ selectedRows}) => {
        console.log(selectedRows)
        setSelectRow(selectedRows)
    }

    const columns = [
        {
            name: 'Title',
            cell: (row: any) => <ButtonRedirectView onClick={() => {
                router.push({
                    pathname: '/app/clients/my-client/[uuid]',
                    query: {uuid: row.codigo}
                }, 'client')
            }}>{row.nome}</ButtonRedirectView>,
        },
        {
            name: 'Empresa',
            cell: (row: any) => row.razao_social
        },
        {
            name: 'Segmento',
            cell: (row: any) => row.nome_segmento
        },
        {
            name: 'Cidade',
            cell: (row: any) => row.nome_cidade
        },
        {
            name: 'Ultima Interação'
        },
        {
            name: 'Próxima interação',
            cell:() => <button onClick={() => alert('teste')} >Action</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];

    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack 
                        size={24} 
                        color='#4D4D4D' 
                        cursor= 'pointer'
                    />
                    <HeaderTitle>CLIENTES</HeaderTitle>
                </HeaderWrapper>
                <HeaderWrapper>
                    <HeaderInputContainer>
                        <input type='text' placeholder='Pesquisar' />
                        <button>
                            <MdSearch size={24} color='#FFF' />
                        </button>
                    </HeaderInputContainer>
                    <ButtonHeaderContainer>
                        <ButtonHeader
                            onClick={() => setButtonHeaderActive(!buttonHeaderActive)}
                        >
                            NOVO CLIENTE
                        </ButtonHeader>
                        <ButtonHeaderMenu
                            isActive={buttonHeaderActive}
                        >
                            <span 
                                onClick={() => router.push('/app/clients/new-client')}
                            >
                                Novo Contato
                            </span>
                            <span
                                onClick={() => router.push('/app/clients/new-company')}
                            >
                                Novo Empresa
                            </span>
                            <span
                                onClick={() => router.push('/app/clients/new-client')}
                            >
                                Importar Contatos
                            </span>
                        </ButtonHeaderMenu>
                    </ButtonHeaderContainer>
                </HeaderWrapper>
            </HeaderContainer>



            <Content>
                <FilterContainer>
                    <FilterButton
                        onClick={() => handleSelectFilter('all')} 
                        isActive={isActive == 'all' ? true : false}
                    >
                        Todos
                    </FilterButton>
                    <FilterButton
                        onClick={() => handleSelectFilter('actived')} 
                        isActive={isActive == 'actived' ? true : false}
                    >
                        Ativos
                    </FilterButton>
                    <FilterButton
                        onClick={() => handleSelectFilter('inatived')} 
                        isActive={isActive == 'inatived' ? true : false}
                    >
                        Inátivos
                    </FilterButton>
                    <FilterButton
                        onClick={() => handleSelectFilter('filter_advanced')}
                        isActive={isActive == 'filter_advanced' ? true : false}
                    >
                        Filtro Avançado
                    </FilterButton>
                </FilterContainer>

                <TableContainer>
                    <Table
                        pagination
                        columns={columns}
                        data={clients}
                        customStyles={customStyles}
                    />
                </TableContainer>
            </Content>
        </Container>
    )
}

export default Client