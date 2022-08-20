import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
`

export const ContentTitle = styled.h1`
    margin: 0;
    font-size: 1rem;
    color: #005178;
    margin-bottom: 1rem;
`

export const ScriptAttendantContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    margin: 1rem;
`;

export const ScriptAttendantContent = styled.div`
    background-color: #FFF;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #4C4C4C;

    div {
        width: 100%;
        height: 100%;

        box-sizing: border-box;
        border-radius: 5px;
        padding: 0.8rem;
        overflow: auto;

        span {
            display: inline-block;
            width: 100%;
            height: 100%;

            font-size: 1rem;
            font-weight: normal;
            font-family: 'Roboto';
            
            -webkit-writing-mode: horizontal-tb !important;
            -webkit-rtl-ordering: logical;
            white-space: pre-wrap;
            overflow-wrap: break-word;
            column-count: initial !important;

        }
  }

  a {
      color: red;
  }

`

export const InformationClientContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 90%;
    margin: 1rem;
`;

export const InformationClientContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;

    textarea {
        width: 95%;
        height: 95%;
        border: none;
        overflow: auto;
        outline: none;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;

        resize: none; /*remove the resize handle on the bottom right*/
    }
`

export const TabulatiosContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #4D4D4D;

    div {
        display: flex;
        flex-direction: column;
        width: 100%;

        input, select {
            width: 100%;
            border: none;
            outline: none;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #4D4D4D;
        }
    }

    > div {
        margin-left: 0.2rem;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    height: 100%;
    border: none;

`

interface IButtonProps {
    backgroundColor?: string;
    fontColor?: string;
}
export const Button = styled(motion.button) <IButtonProps>`
    width: 30%;
    height: 3rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background: ${props => props.backgroundColor ? props.backgroundColor : 'none'};

    color: ${props => props.fontColor ? props.fontColor : '#979797'};
    font-size: 0.8rem;
    font-weight: 700;
    font-family: 'Roboto';
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3.5rem;
    height: 100%;
    background-color: #FFFFFF;
    border-right: 0.1rem solid #9E9E9E;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        margin-top: 0.8rem;
    }
`

interface ISideBarContentProps {
    open: boolean
}
export const SidebarContent = styled(motion.div) <ISideBarContentProps>`
    display: flex;
    width: ${props => props.open ? '20rem' : '0'};
    height: 100%;
    background-color: #FFFFFF;
`
