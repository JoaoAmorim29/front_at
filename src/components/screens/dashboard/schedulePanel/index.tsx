import React from 'react'
import {
    MdArrowForward,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight
} from 'react-icons/md'
import { DayView } from './day-view'
import {
    Container,
    ContainerHeader,
    TitleContainer,
    SelectDay,
    Title,
    Content,
    ScheduleFull
} from './styles'
interface Props {
    handleCloseAsideContent: () => void
}

const SchedulePanel: React.FC<Props> = ({ handleCloseAsideContent }) => {
    return (
        <Container>
            <ContainerHeader>
                <TitleContainer>
                    <Title>Minha agenda</Title>
                    <div onClick={handleCloseAsideContent}>
                        <MdArrowForward size={24} style={{ cursor: 'pointer' }} />
                    </div>
                </TitleContainer>
                <SelectDay>
                    <span>Terça, 8 de fev. 2022</span>
                    <div>
                        <span>Hoje</span>
                        <MdKeyboardArrowLeft size={24} cursor='pointer' />
                        <MdKeyboardArrowRight size={24} cursor='pointer' />
                    </div>
                </SelectDay>
            </ContainerHeader>

            <Content>
                <DayView />
            </Content>

            <ScheduleFull>
                <h1>VER AGENDA COMPLETA</h1>
            </ScheduleFull>
        </Container>
    )
}


export default SchedulePanel