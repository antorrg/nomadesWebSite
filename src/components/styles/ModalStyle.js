import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255,255,246,1) 0%, rgba(85,83,80,1) 96%, rgba(64,63,62,1) 100%);
 
  padding: 25px;
  border: 1px solid rgb(255, 245, 221);
  border-radius:1rem;
  width: 60%; /* Increase to 75% for a 15% increase */
  height: 90%;
  box-shadow: 
  0 0 5px rgb(255, 245, 221), /* Amarillo casi naranja */
  0 0 10px rgb(255, 240, 202),
  0 0 15px rgb(255, 235, 183),
  0 0 20px rgb(255, 230, 164),
  0 0 25px rgb(255, 225, 145), /* Amarillo claro */
  0 0 30px rgb(255, 255, 255); /* Blanco */

  /* max-height: 200vh; */
  overflow: auto; /* Agrega esta línea para permitir el desplazamiento (scroll) */
 z-index:900;
`