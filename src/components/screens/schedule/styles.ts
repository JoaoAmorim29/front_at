import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;

    border-bottom: 0.1rem solid #B9B9B9;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 3.1rem;
`

export const HeaderTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 1.5rem;
    color: #4D4D4D;
`

export const RightAndLeftSpacing = styled.div`
    margin: 0 0.5rem 0 0.5rem;
`

export const FilterDateContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const FilterDateTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 1.2rem;
    color: #4D4D4D;
    cursor: pointer;
`

export const SelectView = styled.select`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3rem;
    cursor: pointer;
    border-radius: 0.2rem;

    font-size: 0.9rem;
    font-family: 'Roboto';
`

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 4.2rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 0.2rem;

    font-size: 0.9rem;
    font-family: 'Roboto';
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem;
`