import styled from 'styled-components'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
    width: 15rem;
`


export const Title = styled.span`
    font-size: 1rem;
    font-weight: 700;
    font-family: Roboto;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 15rem;
`

interface ICardContainerProps {
    borderColor: string
    contentBackgroundColor?: string
    contentFontColor: string
}

interface ICardHeaderProps {
    headerBackgroundColor: string
    headerFontColor: string;
}

export const CardContainer = styled.div<ICardContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 14rem;
    height: 9rem;
    border-radius: 1rem;
    border: 1px solid ${props => props.borderColor};
    color: ${props => props.contentFontColor};
    margin-top: 1rem;

    span {

    }
`

export const CardHeaderContainer = styled.div<ICardHeaderProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    width: 90%;
    height: 2rem;
    border-radius: 1rem;
    background-color: ${props => props.headerBackgroundColor};
    color: ${props => props.headerFontColor};
    padding: 0.4rem;

    span {
        margin-left: 0.8rem;
    }
`

export const CardHeaderTitle = styled.span`
    font-size: 0.9rem;
    font-weight: 700;
    font-family: Roboto;
`

export const CardTitle = styled.span`
    font-size: 4rem;
    font-weight: 700;
    font-family: Roboto;
`

export const CardSubTitle = styled.span`
    font-size: 1rem;
    font-weight: 700;
    font-family: Roboto;
`