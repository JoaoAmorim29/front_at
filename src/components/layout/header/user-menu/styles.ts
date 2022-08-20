import styled, {css} from 'styled-components'

interface IMenuUserProps {
    isActive: boolean
}
export const Container = styled.div<IMenuUserProps>`
    display: ${props => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    /* Rectangle 81 */
    position: absolute;
    width: 23rem;
    height: 16rem;
    right: 4.5rem;
    top: 4rem;
    z-index: 10;
    /* Backgrounds/Primary */
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
    height: 5.7rem;

    border-bottom: 0.2rem solid #D6D6D6;
`

export const Main = styled.div`
    display: grid;
    box-sizing: border-box;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    height: 7rem;
    button {
        display: flex;
        width: 100%;
        cursor: pointer;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;

        color: #9E9E9E;
        background: none;

        &:hover {
            color: #36AAE2;
        }
    }
`

export const Footer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    border-top: 0.2rem solid #D6D6D6;
    cursor: pointer;

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 14px;
    }

    span {
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translate(0, -50%);

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
        color: #9E9E9E;
    }
`

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;

    background-color: #4D4D4D;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    color: #4D4D4D;
    margin: 1rem;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.05em;

    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.05em;
    }
`