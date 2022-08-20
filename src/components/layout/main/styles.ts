import styled from 'styled-components'

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3.5rem auto auto 20px;
    grid-template-rows: 4.5rem auto 52px;
    grid-template-areas:
        'HD HD HD HD'
        'SD CT CT CT'
        'SD CT CT CT';
    width: 100vw;
    height: 100vh;

    background-color: #EFEFEF;
`

export const Content = styled.div`
    grid-area: CT;
    
    display: flex;
    width: 100%;
    height: 100%;

    overflow: auto;
    
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #949494;
        border-radius: 4px;
    }
`