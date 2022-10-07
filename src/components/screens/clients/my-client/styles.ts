import styled, { css}  from 'styled-components'

interface IHeaderButtonProps {
    isActive: boolean
}

/* 
    author: Thiago Martins
*/


export const CommomLabel = styled.label`
    font-size: ${props=>props.labelSize || '18px'};
    color: ${props => props.labelColor || '#000'};
`

export const Separator = styled.div`
    position: relative;
    width: 100%;
    heigth: 20px;
    background: #F0F;
    
`

/* 
    author Rai Lopes
*/
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1rem auto;
    box-sizing: border-box;
    gap: 0.5rem;
    
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 23rem auto;
    box-sizing: border-box;
    gap: 0.5rem;
    
    width: 100%;
    height: 100%;
    padding: 3rem;
`

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

// *********************************************
export const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 20rem auto;
    gap: 1rem;
`

// *********************************************
export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1rem;
    
    width: 19rem;
    height: ${props => props.height || '14rem'};

    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const UserInfoAvatar = styled.div`
    width: 7.3rem;
    height: 7.3rem;
    background: rgba(0, 0, 0, 0.2);

    border-radius: 50%;
`

export const UserInfoIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    width: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`

export const UserInfoTitle = styled.span`
    display: grid;
    grid-template-columns: 1.8rem auto;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #9E9E9E;
`

// *********************************************

export const ContentUser = styled.div`
    display: grid;
    grid-template-rows: 4.5rem;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const ContentHeader = styled.div`
    display: grid;
    grid-template-columns: 15rem 15rem 15rem auto;
    border-bottom: 1px solid #818181;
`

export const ContentHeaderButton = styled.button<IHeaderButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    cursor: pointer;

    ${props => props.isActive && css`
        border-bottom: 4px solid #0692C8;
    `}
    box-sizing: border-box;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #9E9E9E;
`