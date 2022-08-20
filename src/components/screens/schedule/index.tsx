import React, { useContext, useEffect, useState } from 'react'
import dayjs from "dayjs";
import { Calendar } from '../../calendar'
import { useCalendar } from "../../../context/calendarContext";
import { useRouter } from 'next/router'
import {
    MdArrowBack,
    MdArrowBackIos,
    MdArrowForwardIos,
    MdKeyboardArrowDown
} from 'react-icons/md'
import {
    Container,
    Content,
    HeaderContainer,
    RightAndLeftSpacing,
    HeaderWrapper,
    HeaderTitle,
    FilterDateContainer,
    FilterDateTitle,
    SelectView,
    Button
} from './styles'
const Schedule = () => {
    const router = useRouter();
    const [nav, setNav] = useState(0);
    const [view, setView] = useState('month');
    const { monthIndex, handleSetMonthIndex, dateDisplay } = useCalendar();

    const redirectNewTask = () => {
        router.push('/app/tasks/new-task')
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderWrapper>
                    <MdArrowBack size={24} color='#4D4D4D' style={{ cursor: 'pointer' }} />
                    <RightAndLeftSpacing />

                    <HeaderTitle>CALENDÁRIO</HeaderTitle>
                    <RightAndLeftSpacing />

                    <MdArrowBackIos
                        size={18}
                        color='#4D4D4D'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSetMonthIndex(monthIndex - 1)}
                    />
                    <MdArrowForwardIos
                        size={18}
                        color='#4D4D4D'
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSetMonthIndex(monthIndex + 1)}
                    />
                    <RightAndLeftSpacing />

                    <FilterDateContainer>
                        <FilterDateTitle>
                            {dateDisplay}
                        </FilterDateTitle>
                        <MdKeyboardArrowDown size={24} color='#4D4D4D' style={{ cursor: 'pointer' }} />
                    </FilterDateContainer>
                </HeaderWrapper>

                <HeaderWrapper>
                    <SelectView
                        style={{
                            background: 'none',
                            border: '0.1rem solid #4D4D4D'
                        }}
                        value={view}
                        onChange={(event) => setView(event.target.value)}
                    >
                        <option value="month">Mês</option>
                        <option value="week">Semana</option>
                        <option value="day">Dia</option>
                    </SelectView>
                    <RightAndLeftSpacing />
                    <Button
                        onClick={redirectNewTask}
                        style={{
                            backgroundColor: '#36AAE2',
                            color: '#FFF'
                        }}
                    >
                        NOVO
                    </Button>
                </HeaderWrapper>
            </HeaderContainer>
            <Content>
                <Calendar
                    view={view}
                />
            </Content>
        </Container>
    )
}

export default Schedule