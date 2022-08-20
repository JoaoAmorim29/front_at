import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #F3F3F3;

    @media (max-width: 650px) {
        justify-content: center;
        align-items: center;
    }
`
export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 28rem;
    height: 100%;
    background-color: #FFF;

    @media (max-width: 650px) {
        width: 100%;
    }
`

export const Logo = styled.div`
    cursor: pointer;
    margin-bottom: 1rem;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 18rem;
    height: 18rem;

    > div {
        margin-top: 1rem;
    }

    @media (max-width: 650px) {
        width: 100%;
        height: 100%;
    }
`

export const ButtonSignin = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 0.4rem;
    width: 80%;
    margin-top: 1rem;

    color: #FFF;
    background-color: #36AAE2;

    &:hover {
        background-color: #369AE2;
    }
`

export const BackgroundImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media (max-width: 650px) {
        display: none;
    }
`

export const Terms = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0.25rem;
    bottom: 0.25rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9E9E9E;
`

export const Helpme = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    
    p {
        color: #4C4C4C;
    }

    a {
        color: #0692C8;
    }
`
