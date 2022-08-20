import React from 'react'
import {
    MdArrowForward, 
} from 'react-icons/md'
import { 
    Container,
    ContainerHeader,
    Title
 } from './styles'
interface Props {
    handleCloseAsideContent: () => void
}

const HistoriesPanel: React.FC<Props> = ({handleCloseAsideContent}) => {
    return (
        <Container>
            <ContainerHeader>
                <Title>Historico de atividades</Title>
                <div onClick={handleCloseAsideContent}>
                    <MdArrowForward size={24} style={{cursor: 'pointer'}} />
                </div>
            </ContainerHeader>
        </Container>
    )
}


export default HistoriesPanel