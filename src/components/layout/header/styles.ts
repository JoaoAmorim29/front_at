import styled, {css} from 'styled-components'


export const Container = styled.div`
    grid-area: HD;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(269.55deg, rgba(0, 0, 0, 0.25) 0%, #151216 50.39%), #151216;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const GroupIcons = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
`;

export const Notification = styled.div`
    display: flex;
    align-items: center;
    margin: 0.8rem;

    div {
        display: flex;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: green;
        margin-top: -1.4rem;
        margin-left: -0.3rem;
    }
`

export const Avatar = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 0.8em;
        color: #fff;
        margin-right: 0.8rem;
    }

    div {
        display: flex;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
    }
`