import styled, {css} from 'styled-components'

interface IMenuUserProps {
    isActive: boolean
}
interface INavigationLink {
    isActive: boolean
}
export const Container = styled.div<IMenuUserProps>`
    display: ${props => props.isActive ? 'flex' : 'none'};
    flex-direction: column;
    /* Rectangle 81 */
    position: absolute;
    width: 32rem;
    height: 39rem;
    right: 10rem;
    top: 4rem;
    z-index: 10;
    /* Backgrounds/Primary */
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
`

export const NotificationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem;

    width: 100%;
    height: 2rem;
`

export const NotificationTitle = styled.span`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;

    color: #005178;


    span {
        margin-left: 0.5rem;
    }
`

export const ToHead = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100%;
    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    cursor: pointer;

    color: #9E9E9E;
`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    padding: 1rem;

    width: 100%;
    height: 3rem;

    border-bottom: 0.2rem solid #D6D6D6;
`

export const NavigationLinkButton = styled.button<INavigationLink>`
    display: flex;
    align-items: end;
    justify-content: start;
    height: 3rem;
    margin-left: 1rem;
    background: none;
    cursor: pointer;

    ${props => props.isActive && css`
        border-bottom: 4px solid #0692C8;
    `}

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #4D4D4D;
`