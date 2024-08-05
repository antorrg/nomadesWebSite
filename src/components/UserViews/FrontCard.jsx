import {useNavigate}from 'react-router-dom'
import styled from 'styled-components'

const FCard = styled.div`
  max-width: 33vw;
  height: 15rem;
  border: none;
  padding: 1rem;
  margin: 0.5rem;
  margin-top:4rem;
  @media (max-width:768px){
    max-width:fit-content;
    height: fit-content;
    padding:0.2rem;
    margin-left: none;
    margin-top:4rem;
  }
`
const Logo = styled.img`
  max-width: 5rem;
  max-height: 5rem;
  border-radius:2rem;

`
const Title = styled.p`
font-family: sans-serif;
font-size:2rem;
font-weight: 300;
line-height:1;
`
const Text = styled.p`
   
`
const Botoncito = styled.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

&:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
`
export default function FrontCard ({project}){
    const navigate =useNavigate()
    const {id, logo, title, infoHeader} = project;
    const goDetail = ()=>{navigate(`/detalle/${id}`)}
    return(
        <FCard>
        <Logo src={logo} alt='Not found'/>
        <Title>{title}</Title>
        <p>{infoHeader}</p>
        <Botoncito onClick={goDetail}>Ver mas...</Botoncito>
        </FCard>
    )
}

// --bs-primary: #0d6efd;
//     --bs-secondary: #6c757d;