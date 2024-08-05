import {MainContainer, Titulo, SecondContainer, Button} from './styles/About'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'


 const Skills = styled.div`
  width: 85vw;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1.25rem;
 `
 const LinkTo = styled.a`
 
 `
 const Imagen = styled.img`
   width : 35rem;
   height: 35rem;
 `

//*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export default function About () {
  const navigate = useNavigate()
  const goBackHome = ()=>{navigate('/')}
  return (
    <MainContainer>
    <Titulo>
      Quien soy:
    </Titulo>
    <SecondContainer>
    <h2>¡Hola! Mi nombre es Antonio R. Rodriguez Gramajo.</h2>
    <Button  href="/" onClick={goBackHome}>Volver</Button>
<h2>Quien soy:</h2>
<p>Soy un programador fullstack.</p>
<p>Desde hace mucho tiempo me interesó la programación pero no fue hasta el día que encontré una oportunidad de estudiar en "Soy Henry" que esto pudo hacerse realidad.</p>
<h2>Qué hago:</h2>
<p>Actualmente me dedico a realizar proyectos de frontend y backend que me permiten avanzar en mi formación como programador.</p>
<h2>Mi objetivo:</h2>
<p>Es mi intención poder dedicarme de tiempo completo a la programación y además poder también compartir mis conocimientos con aquellos que están dando sus primeros pasos en esta maravillosa profesión.</p>
    </SecondContainer>
    </MainContainer>
  )
}
