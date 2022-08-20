import React, {useState} from 'react'
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

const CreateNewTask: React.FC = () => {
    const router = useRouter()

    const handleRouterRedirectCalendar = () => {
        router.push('/app/tasks')
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack 
                        onClick={handleRouterRedirectCalendar}
                        size={24} 
                        color='#4D4D4D' 
                        style={{cursor: 'pointer'}} 
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
                            <input placeholder="Adicionar título"/>
                        </InputContainer>
                    </InputLabel>
                    {/* Task type */}
                    <InputLabel>
                        <label>Tipo de tarefa</label>
                        <InputContainer>
                            <MdOutlineCheckCircle 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <input placeholder="Adicionar título"/>
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
                            <input 
                                type="date"
                                placeholder="Adicionar título"
                            />
                            <Spacing />
                             <input 
                                type="time"
                                placeholder="Adicionar título"
                            />
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

                        <RepeatTask>
                            <option value="repetir">Repetir</option>
                            <option value="nao_repetir" selected>Não se repetir</option>
                        </RepeatTask>
                    </InputLabel>
                    {/* Notify */}
                    <InputLabel>
                        <label>Adicionar lembrete</label>
                        <InputContainer>
                            <MdNotifications 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <select>
                                <option value=''>Lembrar na hora</option>
                            </select>
                        </InputContainer>
                    </InputLabel>
                    {/* Person */}
                    <InputLabel>
                        <label>Selecionar cliente</label>
                        <InputContainer>
                            <MdPerson 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
                                color='#A7A7A7'
                            />
                            <select>
                                <option value=''>Nenhum cliente selecionado</option>
                            </select>
                        </InputContainer>
                        <a>Adicionar novo cliente</a>
                    </InputLabel>
                    {/* Priority */}
                    <InputLabel>
                        <label>Adicionar lembrete</label>
                        <InputContainer>
                            <MdBookmark 
                                size={32} 
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
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
                                style={{marginLeft: '-3rem', marginRight: '1rem'}} 
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