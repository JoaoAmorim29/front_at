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
    font-size: 1.2rem;
    color: #4D4D4D;
    margin-left: 0.5rem;
`

export const HeaderInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 13rem;
    height: 2rem;
    border: 1.5px solid #B9B9B9;
    border-radius: 5px;
    margin-right: 1rem;
    background-color: #FFF;
    align-items: center;

    input:focus{
        outline-style: none;
        box-shadow: none;
    }

    input::placeholder {
        color: #B9B9B9;
    }

    input {
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        font-size: 13px;
        padding-left: 5px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.4rem;
        height: 1.8rem;
        background: #36AAE2;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.4s;

        &:hover {
            background-color: #369AE2;
        }
    }
`

export const ButtonHeaderContainer = styled.div`
    position: relative;
`

export const ButtonHeader = styled.button`
    position: relative;
    cursor: pointer;
    width: 7.5rem;
    height: 2rem;
    background: #36AAE2;
    border-radius: 5px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    transition: all 0.4s;

    &:hover {
        background-color: #369AE2;
    }
`


export const ButtonHeaderMenu = styled.div<IButtonHeaderProps>`
    display: ${props => props.isActive ? 'flex' : 'none'};
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    width: 9rem;
    height: 7.5rem;
    position: absolute;
    flex-direction: column;
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 0.2rem;
    border-radius: 5px;
    padding-left: 15px;
    z-index: 10;

    span {
        height: 2.5rem;
        display: flex;
        align-items: center;
        z-index: 10;
        cursor: pointer;
        background-color: #fff;
        border-radius: 5px;
        transition: all 0.4s;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        
        font-feature-settings: 'kern' off;
        color: #4C4C4C;

        &:hover {
            color: #36AAE2;
        }
    }
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
    padding: 1rem 0 0 1rem;

    > button {
        margin-left: 1rem;
    }
`

export const FilterButton = styled.button<FilterButtonProps>`
    cursor: pointer;
    height: 1.5rem;
    align-items: center;
    background: ${props => props.isActive ? '#36AAE2' : 'none'};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0.3rem 1rem;

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
    padding: 1rem 2rem 2rem;
`

export const Table = styled(DataTable)`
    display: flex;
    width: 100%;
    height: 100%;
    border: 2px solid black;
`

export const ButtonRedirectView = styled.button`
    cursor: pointer;
    background: none;
`