import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
`

export const TitleContainer = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
`

export const SelectDay = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #36AAE2;
    margin-top: 0.5rem;
    span {
        font-weight: 700;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`


export const Title = styled.span`
    font-size: 1rem;
    font-weight: 700;
    font-family: Roboto;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 70vh;
    box-sizing: border-box;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #949494;
        border-radius: 4px;
    }
`

export const ScheduleFull = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4.5rem;
    bottom: 0;
    border-top: 1px solid rgba(185, 185, 185, 0.5);
    cursor: pointer;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
`