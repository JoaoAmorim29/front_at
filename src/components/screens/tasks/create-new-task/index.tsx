import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
    MdArrowBack,
    MdOutlineCheckCircle,
    MdSchedule,
    MdNotifications,
    MdPerson,
    MdBookmark
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
import { allClient, typeTask } from './api'

const CreateNewTask: React.FC = () => {
    const router = useRouter()

    const handleRouterRedirectCalendar = () => {
        router.push('/app/tasks')
    }

    const [clientes, setClientes] = useState([])
    const [lembrete, setLembrte] = useState(0)

    const [tipos, setTipos] = useState([])
    const [tipo, setTipo] = useState(1)

    const [repert, setRepert] = useState(false)


    useEffect(async () => {
        const client = await allClient()
        const types = await typeTask()
        if (!client) setClientes([])
        if (!types) setTipos([])
        setClientes(client)
        setTipos(types)
    }, [])


    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack
                        onClick={handleRouterRedirectCalendar}
                        size={24}
                        color='#4D4D4D'
                        style={{ cursor: 'pointer' }}
                    />
                    <HeaderTitle>NOVA TAREFA</HeaderTitle>
                </HeaderWrapper>
            </HeaderContainer>

            <Content>
                <Form
                >
                    {/* Title */}
                    <InputLabel>
                        <label>Título  da tarefa</label>
                        <InputContainer>
                            <input placeholder="Adicionar título" />
                        </InputContainer>
                    </InputLabel>
                    {/* Task type */}
                    <InputLabel>
                        <label>Tipo de tarefa</label>
                        <InputContainer>
                            <MdOutlineCheckCircle
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                {tipos.map((tipo, key) => {
                                    return (
                                        <option value={tipo.codigo} key={tipo.codigo}>{tipo.tipo}</option>
                                    )
                                })}
                            </select>
                        </InputContainer>
                    </InputLabel>
                    {/* Schedule */}
                    <InputLabel>
                        <label>Data e hora que a tarefa será executada</label>
                        <InputContainer>
                            <MdSchedule
                                size={32}
                                style={{
                                    minWidth: '32px',
                                    marginLeft: '-3rem',
                                    marginRight: '1rem'
                                }}
                                color='#A7A7A7'
                            />
                            {/* Data Inicio */}
                            <InputContainer>
                                <input
                                    type="date"
                                    placeholder="Adicionar título"
                                />
                                <Spacing />
                                <input
                                    type="time"
                                    placeholder="Adicionar título"
                                />
                            </InputContainer>

                            {/* Data Final */}
                            <InputContainer style={() => {display: 'none'}}>
                                <span>Até</span>
                                <input
                                    type="date"
                                    placeholder="Adicionar título"
                                />
                                <Spacing />
                                <input
                                    type="time"
                                    placeholder="Adicionar título"
                                />
                            </InputContainer>
                        </InputContainer>

                        {/* <RepeatTask  onChange={(e) => {
                            setRepert(e.target.value)
                        }}>
                            <option value={true}>Repetir</option>
                            <option value={false}>Não se repetir</option>
                        </RepeatTask> */}
                        
                        <RepeatTask></RepeatTask>

                    </InputLabel>
                    {/* Notify */}
                    <InputLabel>
                        <label>Adicionar lembrete</label>
                        <InputContainer>
                            <MdNotifications
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select value={lembrete} onChange={(e) => setLembrte(e.target.value)}>
                                <option value={0}>Lembrar na hora</option>
                                <option value={15}>Enviar daqui a 15 minutos</option>
                                <option value={60}>Enviar daqui a 1 hora</option>
                                <option value={60 * 3}>Enviar daqui 3 horas</option>
                            </select>
                        </InputContainer>
                    </InputLabel>
                    {/* Person */}
                    <InputLabel>
                        <label>Selecionar cliente</label>
                        <InputContainer>
                            <MdPerson
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            {/* <select>
                                <option value=''>Nenhum cliente selecionado</option>
                            </select> */}
                            <select /* value={codSegmento} onChange={(e) => setCodSegmento(e.target.value)} */>
                                <option value="0">Clientes</option>
                                {clientes.map((cliente, key) => {
                                    return (
                                        <option value={cliente.codigo} key={cliente.codigo}>{cliente.nome}</option>
                                    )
                                })}
                            </select>
                        </InputContainer>
                        <a href='/app/clients/new-client'>Adicionar novo cliente</a>
                    </InputLabel>
                    {/* Priority */}
                    <InputLabel>
                        <label>Adicionar lembrete</label>
                        <InputContainer>
                            <MdBookmark
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <select>
                                <option value=''>Prioridade</option>
                            </select>
                        </InputContainer>
                    </InputLabel>
                    {/* Description */}
                    <InputLabel>
                        <label>Adicionar lembrete</label>
                        <InputContainer>
                            <MdBookmark
                                size={32}
                                style={{ marginLeft: '-3rem', marginRight: '1rem' }}
                                color='#A7A7A7'
                            />
                            <textarea>

                            </textarea>
                        </InputContainer>
                    </InputLabel>

                    <ButtonsContainer>
                        <ButtonSave>Salvar</ButtonSave>
                        <ButtonClose
                            onClick={handleRouterRedirectCalendar}
                        >
                            Sair
                        </ButtonClose>
                    </ButtonsContainer>
                </Form>
            </Content>
        </Container>
    )
}


export default CreateNewTask