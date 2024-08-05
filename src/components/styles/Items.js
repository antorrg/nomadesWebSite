import styled from 'styled-components'

export const InfoContainer = styled.div`
    width: 85vw;
    margin: 0;
    margin-left: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    grid-gap: 1.25rem; 
`
export const InfoVerticalCont = styled.div`//para la landing o zona del visitante
    width: 85vw;
    margin: 0;
    margin-left: 2rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    & p {
    color: rgb(37, 37, 103); /* Ejemplo: cambia el color del texto a azul */
    font-weight: bold; /* Ejemplo: pone el texto en negrita */
    margin: 0; /* Ejemplo: elimina el margen por defecto */
    text-align: left;
  }
`
export const InfoGroupInvisible = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center; /* Alinea los elementos dentro del grupo horizontalmente */
    gap: 0.5rem; /* Espacio entre los elementos del grupo */
    border:none;
& p {
    color: rgb(37, 37, 103); /* Ejemplo: cambia el color del texto a azul */
    font-weight: bold; /* Ejemplo: pone el texto en negrita */
    margin: 0; /* Ejemplo: elimina el margen por defecto */
    text-align: left;
  }
`

export const InfoGroup = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center; /* Alinea los elementos dentro del grupo horizontalmente */
    gap: 0.5rem; /* Espacio entre los elementos del grupo */
    border:solid grey;
    box-shadow: -10px 1px 6px rgba(0, 0, 0, 0.1), -10px 15px 6px rgba(0, 0, 0, 0.1);
  
   & :hover {
    box-shadow: -10px 1px 12px rgba(0, 0, 0, 0.2), -10px 15px 12px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  }
& p {
    color: rgb(37, 37, 103); /* Ejemplo: cambia el color del texto a azul */
    font-weight: bold; /* Ejemplo: pone el texto en negrita */
    margin: 0; /* Ejemplo: elimina el margen por defecto */
    text-align: left;
  }
`
export const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    border: solid black 1px;
    background-color: #dddddd;
    border-radius: 2.5rem;
`

export const Image = styled.img`
max-width: 20rem;
`
export const ItemsContainer = styled.div`
     width: 85vw;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    grid-gap: 1.25rem;
`