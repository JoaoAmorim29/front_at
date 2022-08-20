import styled, {} from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 2rem;
`


export const Weekdays = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(7, 188px);
    color: #4D4D4D;

    div {
        margin-top: 1rem;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 1320px) {
        grid-template-columns: repeat(7, 130px);
    }

    @media (min-width: 1920px) {
        grid-template-columns: repeat(7, 310px);
    }

`

export const CalendarContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(7, 188px);
    width: 100%;
    height: 100%;

    @media (max-width: 1320px) {
        grid-template-columns: repeat(7, 130px);
    }

    @media (min-width: 1920px) {
        grid-template-columns: repeat(7, 310px);
    }
`

