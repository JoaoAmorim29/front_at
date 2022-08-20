import styled from 'styled-components'
import DataTable from 'react-data-table-component';

interface IButtonHeaderProps {
    isActive?: boolean;
}

interface FilterButtonProps {
    isActive?: boolean;
}

interface ActionButtonProps {
    isActive?: boolean;
}
// *****************************************************************
export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;
`

// *****************************************************************
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

export const ButtonHeaderMenu = styled.div<IButtonHeaderProps>`
    display: ${props => props.isActive ? 'flex' : 'none'};
    width: 100%;
    position: absolute;
    flex-direction: column;
    background-color: #fff;
    box-sizing: border-box;
    margin-top: 0.2rem;

    span {
        display: flex;
        align-items: center;
        height: 2rem;
        z-index: 10;
        cursor: pointer;
        background-color: #FFF;
        transition: all 0.1s;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
        
        font-feature-settings: 'kern' off;
        border-bottom: 1px solid #B9B9B9;
        color: #4C4C4C;

        &:hover {
            justify-content: center;
        }
    }
`

// *****************************************************************
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    padding: 2.5rem;
    width: 100%;
    height: 100%;
    max-height: calc(84vh - 43px -64px);
    
`

// *****************************************************************
export const KanbanBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.2rem;
    width: 100%;
    max-height: calc(84vh - 46px - 68px);
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;

`

export const KanbanHeader= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    
    h1 {
        display: flex;
        align-items: center;
        line-height: 18px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #4D4D4D;
    }

    @media (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`
export const Menu= styled.div`
    position: relative;
`

export const MenuActions= styled.div<FilterButtonProps>`
    position: absolute;
    display: ${props => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    width: 11rem;
    height: 8rem;
    margin-left: -10rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 10;
`

// *****************************************************************
export const Card = styled.div`
    display: flex;
    flex-direction: column;
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

export const CardContainer= styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    height: 17rem;
    margin-bottom: 1rem;

    @media (max-width: 1200px) {
        width: 100%;
        height: 100%;
    }
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CardHeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0.2rem;

     div {
        width: 1.3rem;
        height: 1.3rem;
        margin-right: 0.2rem;

        border: 1px solid #9E9E9E;
        border-radius: 0.2rem;
    }

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: #9E9E9E;
    }
`

export const CardHeaderWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const CardHeaderWrapperMenu = styled.div<ActionButtonProps>`
    position: absolute;
    display: ${props => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    width: 11rem;
    height: 8rem;
    margin-left: -10rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 10;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0.2rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%; 

        span {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            line-height: 12px;
            display: flex;
            align-items: center;

            color: #9E9E9E;
        }
    }
`