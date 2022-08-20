import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import {
    MdArrowBack,
    MdSearch,
    MdMoreVert,
    MdChatBubble,
    MdPerson,
    MdOutlineAlarm,
    MdBookmark
} from 'react-icons/md'

import {
    Container,
    HeaderContainer,
    HeaderWrapper,
    HeaderTitle,
    HeaderInputContainer,
    ButtonHeaderContainer,
    ButtonHeader,
    Content,
    KanbanBox,
    KanbanHeader,
    Menu,
    MenuActions,
    Card,
    CardContainer,
    CardHeader,
    CardHeaderBox,
    CardHeaderWrapper,
    CardHeaderWrapperMenu,
    CardContent
} from './styles'

const Task: React.FC = () => {
    const router = useRouter()
    const date = new Date()

    const TasksLake = [
        {
            id: 1,
            type: 'Enviar mensagem',
            channel: 'Mensagem',
            client: 'Rai Lopes',
            schedule_date: date.setDate(date.getDate() - 1).toLocaleString()
        },
        {
            id: 2,
            type: 'Enviar mensagem',
            channel: 'Mensagem',
            client: 'Rai Lopes',
            schedule_date: date.setDate(date.getDate() - 1).toLocaleString()
        },
        {
            id: 3,
            type: 'Enviar mensagem',
            channel: 'Mensagem',
            client: 'Rai Lopes',
            schedule_date: date.setDate(date.getDate() - 1).toLocaleString()
        },
        {
            id: 4,
            type: 'Enviar mensagem',
            channel: 'Mensagem',
            client: 'Rai Lopes',
            schedule_date: date.setDate(date.getDate() - 1).toLocaleString()
        },
        {
            id: 5,
            type: 'Enviar mensagem',
            channel: 'Mensagem',
            client: 'Rai Lopes',
            schedule_date: date.setDate(date.getDate() - 1).toLocaleString()
        }
    ]

    // ROUTES
    const redirectDashboard = () => {
        router.push('/app/dashboard')
    }

    const redirectCreateNewTask = () => {
        router.push('/app/tasks/new-task')
    }

    // USER ACTIONS

    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack 
                        onClick={redirectDashboard}
                        size={24} 
                        color='#4D4D4D' 
                        style={{cursor: 'pointer'}} 
                    />
                    <HeaderTitle>TAREFAS</HeaderTitle>
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
                            onClick={redirectCreateNewTask}
                        >
                            NOVA TAREFA
                        </ButtonHeader>
                    </ButtonHeaderContainer>
                </HeaderWrapper>
            </HeaderContainer>
            <Content>
                <KanbanBoxComponent title='ATRASADO' tasks={TasksLake} />
                <KanbanBoxComponent title='HOJE' tasks={[]} />
                <KanbanBoxComponent title='ESSA SEMANA' tasks={[]} />
                <KanbanBoxComponent title='FUTURAS' tasks={[]} />
            </Content>
        </Container>
    )
}

// COMPONENT KANBANBOX
interface TasksProps {
    id: number
    type?: string
    channel?: string
    client?: string
    schedule_date?: string
}

interface KanbanBoxComponentProps {
    title: string
    tasks: TasksProps[]
}

const KanbanBoxComponent: React.FC<KanbanBoxComponentProps> = ({ title, tasks }) => {
    return (
        <KanbanBox>
            <HeaderComponent title={title} />
            <Card>
            {tasks.map((task) => (
                <CardComponent 
                    key={task.id} 
                    task={task}
                />
            ))}
            </Card>
        </KanbanBox>
    )
}

// COMPONENT HEADER
interface HeaderComponentPorps {
    title: string;
}
const HeaderComponent: React.FC<HeaderComponentPorps> = ({title}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <KanbanHeader>
            <h1>{title}</h1>
            <Menu>
                <MdMoreVert 
                    onClick={() => setIsActive(!isActive)}
                    size={32} 
                    color="#4D4D4D" 
                    style={{cursor: 'pointer'}} 
                />
                <MenuActions
                    isActive={isActive}
                >
                    
                </MenuActions>
            </Menu>
        </KanbanHeader>
    )
}

// COMPONENT CARD
interface CardComponentProps {
    task: TasksProps
}
const CardComponent: React.FC<CardComponentProps> = ({task}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <CardContainer>
            <CardHeader>
                <CardHeaderBox>
                    <div></div>
                    <h1>{task.type}</h1>
                </CardHeaderBox>
                <CardHeaderWrapper>
                    <MdMoreVert 
                        onClick={() => setIsActive(!isActive)}
                        size={32} 
                        color="#9E9E9E" 
                        style={{cursor: 'pointer'}} 
                    />
                    <CardHeaderWrapperMenu />
                </CardHeaderWrapper>
            </CardHeader>
            <CardContent>
               <div>
                    <MdChatBubble 
                        size={24} 
                        color="#9E9E9E" 
                    />
                    <span>Mensagem</span>
               </div>
               <div>
                    <MdPerson 
                        size={24} 
                        color="#9E9E9E" 
                    />
                    <span>Rai Lopes</span>
               </div>
               <div>
                    <div>
                        <MdOutlineAlarm 
                            size={24} 
                            color="#9E9E9E" 
                        />
                    <span>Terça-Feira, 8 de fevereiro - 18:00 até 18:30</span>
                    </div>
                    <MdBookmark 
                        size={24} 
                        color="#9E9E9E" 
                    />
               </div>
            </CardContent>
        </CardContainer>
    )
}




export default Task