import styled from 'styled-components'

export const MainContainer = styled.div`
    font-family: Arial, sans-serif;
    /* background: url('/images/cieloError.jpg') no-repeat center center fixed; */
    background-size: cover;
    background-color: #0d0a26;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 400vh;
    
    `
   export const Titulo = styled.h1`
     font-size: 3em;
      color: #ffffff;
    margin-top: 1rem;
    `
 export const SecondContainer = styled.div`
   background-color: #ffffff;
    padding: 1.2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 60%;
    max-width: 35rem;
    margin: 20px auto;
  `
export const Button = styled.a`
   width: 100%;
    padding: 8px;
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
@media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
    padding: 6px;
  }
 `
 export const Skills = styled.div`
  width: 85vw;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1.25rem;
 `
 export const LinkTo = styled.a`
 
 `
 export const Imagen = styled.img`
   width : 35rem;
   height: 35rem;
 `
