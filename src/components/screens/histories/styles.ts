import styled from 'styled-components'
import DataTable from 'react-data-table-component';

interface IButtonHeaderProps {
    isActive?: boolean;
}

interface FilterButtonProps {
    isActive?: boolean;
}

// *****************************************************************
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
// *****************************************************************

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;

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
    font-size: 1.2rem;
    color: #4D4D4D;
    margin-left: 0.5rem;
`

export const HeaderInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 12rem;
    height: 2rem;
    border-radius: 0.2rem;
    margin-right: 1rem;
    background-color: #FFF;

    input {
        width: 100%;
        height: 100%;
        margin-left: 0.3rem;
        outline: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background: #36AAE2;
        border-radius: 5px;
        cursor: pointer;
    }
`

export const ButtonHeaderContainer = styled.div`
    position: relative;
`

export const ButtonHeader = styled.button`
    position: relative;
    cursor: pointer;
    width: 7rem;
    height: 2rem;
    background: #36AAE2;
    border-radius: 5px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`

// *****************************************************************

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 0 0 2rem;

    > button {
        margin-left: 1rem;
    }
`

export const FilterButton = styled.button<FilterButtonProps>`
    cursor: pointer;
    height: 2rem;
    background: ${props => props.isActive ? '#36AAE2' : 'none'};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0.3rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${props => props.isActive ? '#FFF' : '#4D4D4D'};
`

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
`

export const Table = styled(DataTable)`
    display: flex;
    width: 100%;
    height: 100%;
`

export const ButtonRedirectView = styled.button`
    cursor: pointer;
   background: none; 
`