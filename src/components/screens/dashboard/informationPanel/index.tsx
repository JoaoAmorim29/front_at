import React from 'react'
import {IconType} from 'react-icons'

import {
    MdArrowForward, 
    MdPersonPin,
    MdHeadphones
} from 'react-icons/md'
import {
    Container,
    ContainerHeader,
    Title,
    Content,
    CardContainer,
    CardHeaderContainer,
    CardHeaderTitle,
    CardTitle,
    CardSubTitle

} from './styles'

interface Props {
    handleCloseAsideContent: () => void
}
const InformationPanel: React.FC<Props> = ({handleCloseAsideContent}) => {
    return (
        <Container>
            <ContainerHeader>
                <Title>Painel de informações</Title>
                <div onClick={handleCloseAsideContent}>
                    <MdArrowForward size={24} style={{cursor: 'pointer'}} />
                </div>
            </ContainerHeader>
            <Content>
                <Card 
                    icon={MdPersonPin}
                    headerTitle='PA/RAMAL LOGADO'
                    headerFontColor='#FFF'
                    headerBackgroundColor='#36AAE2' 
                    contentTitle='2000'
                    contentFontColor='#979797'
                    contentBackgroundColor='#FFFFFF'
                 />

                <Card 
                    icon={MdHeadphones}
                    headerTitle='TEMPO NO SISTEMA'
                    headerFontColor='#FFF'
                    headerBackgroundColor='#36E27B' 
                    contentTitle='00:00'
                    contentSubTitle='s'
                    contentFontColor='#979797'
                    contentBackgroundColor='#FFFFFF'
                 />

                <Card 
                    icon={MdPersonPin}
                    headerTitle='PA/RAMAL LOGADO'
                    headerFontColor='#FFF'
                    headerBackgroundColor='#36AAE2' 
                    contentTitle='00:00'
                    contentSubTitle='min'
                    contentFontColor='#979797'
                    contentBackgroundColor='#FFFFFF'
                 />
            </Content>
        </Container>
    )
}

interface ICardProps {
    icon: IconType
    headerTitle: string
    headerBackgroundColor: string
    headerFontColor: string
    contentTitle: string
    contentSubTitle?: string
    contentFontColor: string
    contentBackgroundColor: string
}
const Card: React.FC<ICardProps> = ({
    icon: Icon, 
    headerTitle, 
    headerBackgroundColor, 
    headerFontColor, 
    contentTitle,
    contentSubTitle,
    contentFontColor,
    contentBackgroundColor
}) => {
    return (
        <CardContainer 
            borderColor={headerBackgroundColor}
            contentFontColor={contentFontColor}
            contentBackgroundColor={contentBackgroundColor}
        >   
            <CardHeaderContainer 
                headerBackgroundColor={headerBackgroundColor}
                headerFontColor={headerFontColor}
            >
                <Icon size={24} color={headerFontColor} />
                <CardHeaderTitle>
                    {headerTitle}
                </CardHeaderTitle>
            </CardHeaderContainer>
            <CardTitle>
                {contentTitle}
                <CardSubTitle>
                    {contentSubTitle}
                </CardSubTitle>
            </CardTitle>
        </CardContainer>
    )
}


export default InformationPanel