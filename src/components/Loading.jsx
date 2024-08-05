import styled from 'styled-components'

const Container = styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 flex-direction: column;
 justify-content:center;
 align-items: center;
  font-family: roboto;
  background-color: #2a3e6e;
  background-size:cover;
  color: aliceblue;
  @media (max-width: 768px){
    width:100vw;
  height:100vh;
  }

`
const Spinner = styled.div`
  margin: 30px auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #ccc;
  animation: spin 1s linear infinite;
  border-bottom-color: #614ad3;

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
`

const Loading = () => {
  return (
    <Container>
        <h1>
        Cargando . . .
        </h1>
        <Spinner/>
    </Container>
  )
}

export default Loading