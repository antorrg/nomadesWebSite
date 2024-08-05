import styled from 'styled-components'


export const FormularyContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%; /* Ajusta según sea necesario */
  width: 50%; /* Ajusta según sea necesario */
  overflow: auto;
  background: white; /* Fondo blanco o cualquier color que prefieras */
  padding: 3rem; /* Espaciado interno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para darle un efecto de elevación */
  border-radius: 8px; /* Bordes redondeados */
`;

export const FormCreate = styled.div`
  max-height: 100%;
  overflow: auto;
    background: radial-gradient(circle, rgba(255,255,246,1) 0%, rgba(85,83,80,1) 96%, rgba(64,63,62,1) 100%);
    /* background-color: rgb(255, 255, 230); */
    padding: 1.5rem;
    font-size: larger;
    font-weight:bolder;
    border: 1px solid rgb(255, 245, 221);
    border-radius:1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 
    0 0 5px rgb(255, 245, 221), /* Amarillo casi naranja */
    0 0 10px rgb(255, 240, 202),
    0 0 15px rgb(255, 235, 183),
    0 0 20px rgb(255, 230, 164),
    0 0 25px rgb(255, 225, 145), /* Amarillo claro */
    0 0 30px rgb(255, 255, 255); /* Blanco */
    z-index:1000;
`;
export const FormContUser = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%; /* Ajusta según sea necesario */
  width: 50%; /* Ajusta según sea necesario */
  overflow: auto;
  background: white; /* Fondo blanco o cualquier color que prefieras */
  padding: 3rem; /* Espaciado interno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para darle un efecto de elevación */
  border-radius: 8px; /* Bordes redondeados */
`;
export const Formulary = styled.div`
  max-height: 100%;
  overflow: auto;
     /* position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background: radial-gradient(circle, rgba(255,255,246,1) 0%, rgba(85,83,80,1) 96%, rgba(64,63,62,1) 100%);
    /* background-color: rgb(255, 255, 230); */
    padding: 1.5rem;
    font-size: larger;
    font-weight:bolder;
    border: 1px solid rgb(255, 245, 221);
    border-radius:1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 
    0 0 5px rgb(255, 245, 221), /* Amarillo casi naranja */
    0 0 10px rgb(255, 240, 202),
    0 0 15px rgb(255, 235, 183),
    0 0 20px rgb(255, 230, 164),
    0 0 25px rgb(255, 225, 145), /* Amarillo claro */
    0 0 30px rgb(255, 255, 255); /* Blanco */
    z-index:1000;
   
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;

export const ButtonEye = styled.button`
  background-color:transparent; 
  border: none ;
  border-radius:1 rem;
  padding: 0.6em 1.2em;
  margin: 0.3em;
 
 & :active {
  border-color: none;
}
`
export const ErrorMsg = styled.p`
      color:red;
      font-size: large;
    font-weight:bold;
    
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  margin: 0;
 
`;
export const VertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  margin: 0;
 
`;
export const InputUpd = styled.input`
  min-width: 300px;
  font-size: normal;
  font-weight:bold;
`
export const AreaText = styled.textarea({
  fontSize: 'normal',
  fontWeight:'bold',
   minWidth: '400px', 
   minHeight: '80px'
});

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255,255,246,1) 0%, rgba(85,83,80,1) 96%, rgba(64,63,62,1) 100%);
  /* background-color: rgb(255, 255, 230); */
  padding: 20px;
  border: 1px solid rgb(255, 245, 221);
  border-radius:1rem;
  width: 40%; /* Increase to 75% for a 15% increase */
  height: 60%;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  box-shadow: 
  0 0 5px rgb(255, 245, 221), /* Amarillo casi naranja */
  0 0 10px rgb(255, 240, 202),
  0 0 15px rgb(255, 235, 183),
  0 0 20px rgb(255, 230, 164),
  0 0 25px rgb(255, 225, 145), /* Amarillo claro */
  0 0 30px rgb(255, 255, 255); /* Blanco */

  /* max-height: 100vh; */
  overflow: auto; /* Agrega esta línea para permitir el desplazamiento (scroll) */

`
export const ButtonModal = styled.button`
  background: radial-gradient(circle, rgba(255,204,112,1) 0%, rgba(85,83,80,1) 98%, rgba(64,63,62,1) 100%);;
    padding: 0.10rem 1rem; /* Ajusta el padding según tu preferencia */
    font-size: 1rem; /* Tamaño de la fuente */
    font-weight: bold; /* Negrita */
    color: rgb(50, 49, 50);
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
  
  
  & :hover {
    /* background: rgb(211, 175, 147); Cambia el color en hover */
    /* background: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%); */
    background: rgb(2,0,36);
     background: rgb(230,138,18);
    background: linear-gradient(90deg, rgba(230,138,18,1) 0%, rgb(239, 193, 132) 30%, rgba(255,250,66,1) 100%);
  }
  
  & :active {
    transform: translateY(2px); /* Efecto de hundimiento en click */
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Sombra ligera en click */
  }
`