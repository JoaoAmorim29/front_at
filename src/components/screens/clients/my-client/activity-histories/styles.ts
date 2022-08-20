import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    padding: 3rem;
`

export const History = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: #9E9E9E;
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;

        color: #9E9E9E;
    }
`

export const Icon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    border: 2px solid #5ABDE7;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Qualify = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: #9E9E9E;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;

        color: #9E9E9E;
    }
`

export const Observation = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: #9E9E9E;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;

        color: #9E9E9E;
    }
`

export const Separator = styled.div`
    width: 0rem;
    height: 5.5rem;
    border: 1px solid #9E9E9E;

    margin-left: 1.3rem;
`