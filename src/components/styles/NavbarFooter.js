import styled from 'styled-components'

export const Foot =
    styled.div`
    position:relative;
    padding: 2rem;
    bottom :0;
    left:0;
    width:100vw;
    height: 6rem;
    background-color: ${props =>props.theme.colors.primary};
    color : ${props =>props.theme.colors.text};
    text-align: left;
    
`
export const Nav = styled.div`
   position:fixed;
    top:0;
    left:0;
    width:100vw;
    height: 8rem;
    background-color: ${(props)=>props.theme.colors.primary};
`



