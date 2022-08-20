import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 3rem;

    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #949494;
        border-radius: 4px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    width: 100%;
    height: 9.5rem;

    background: #FCFCFC;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const Square = styled.div`
    width: 2rem;
    height: 2rem;
    border: 1px solid #FF9F43;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const CardInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-left: 1rem;

    div {
        display: flex;
        width: 100%;
        height: 9.5rem;
        flex-direction: row;
        justify-content: start;
        align-items: center;
    }

    span {
        margin-left: 1rem;
        color: #9E9E9E;
    }

    .title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
    }

    .person {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
    }

    .date {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
    }
`

export const Actions = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    height: 100%;
`