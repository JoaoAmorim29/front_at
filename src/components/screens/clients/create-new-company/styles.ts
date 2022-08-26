import styled, {css} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 4rem;
    margin: 1rem 0 0 5rem;
`

export const InputLabel = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;

    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #4C4C4C;
    }

    a {
        cursor: pointer;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #0692C8;  
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;


    input, select, textarea {
        width: 100%;
        height: 3rem;
        outline: none;
        box-sizing: border-box;
        padding: 0.5rem;
        border-radius: 0.1rem;
        background-color: #FFF;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;

        color: #A7A7A7;
    }

    textarea {
        height: 5rem;
        resize: none;
    }

    span {
        margin: 0 10px 0 10px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 14px;
        display: flex;
        align-items: center;
    }
`

export const RepeatTask = styled.select`
    width: 47%;
    height: 3rem;
    outline: none;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radius: 0.1rem;
    background-color: #FFF;
    margin-top: 0.5rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    color: #A7A7A7;
`

export const Spacing = styled.div`
    margin: 0 10px 0 0;
`

export const SpacingBottom = styled.div`
    margin: 0 0 10px 0;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
`

export const ButtonSave = styled.button`
    cursor: pointer;
    width: 110px;
    height: 41px;
    background: #36AAE2;
    border-radius: 5px;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #FFFFFF;
`

export const ButtonClose = styled.button`
    cursor: pointer;
    width: 110px;
    height: 41px;
    background: none;
    border-radius: 5px;
    margin-left: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #979797;
`
export const LabelAlert = styled.label`
    color: #FF0000,
    font-size: 2rem
`