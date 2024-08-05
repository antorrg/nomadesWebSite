import styled from 'styled-components'
import { Suspense, useEffect, useState, lazy } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getProjectById, cleanDetail} from '../../redux/actions'
const UserItem = lazy(()=>import('./DetalleModules/UserItem'))
const NavbarDetalle = lazy(()=>import('./NavbarDetalle'))
const Loading = lazy(()=>import('../Loading'))


const InfoContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
position: relative;
margin-top: 4rem;
margin-top: ${({ isNavbarOpen }) => (isNavbarOpen ? '6rem' : '4rem')};
transition: margin-top 0.4s ease;
`
const ItemsContainer = styled.div`
    width: 85vw;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr ;
    grid-gap: 1.25rem;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        align-items:center;
        justify-items: center;
    }
  
`
const Link = styled.a`
    width: 15%;
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    margin: 1rem;
    margin-bottom:3rem;

&:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
@media (max-width: 768px) {
        width: 50%;
        font-size: 14px;
        padding: 6px;
    }
  
`
const Text = styled.p`
max-width:50%;
 text-align: justify;
 font-family: sans-serif;
 font-size: 1.2em;
 font-weight: 500;
 line-height:1.5;
 @media (max-width: 768px) {
        max-width:85%;
        font-size: 1em;
        padding: 1rem;
        text-align: center;
    }

`

export default function Detalle (){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const response = useSelector((state)=>state.singleProject)
    const loading = useSelector((state)=>state.loading)
    const info = response?.info;
    const items= response?.items;
    const [ isNavbarOpen, setIsNavbarOpen]= useState(false)
    console.log('soy detalle: ',response)
  useEffect(()=>{
    dispatch(getProjectById(id));

    return ()=>{dispatch(cleanDetail())}

  },[id])

    return (
        <Suspense fallback={<Loading/>}>
        {loading? 
        <Loading/> : 
        <>
        <NavbarDetalle info={info} setIsNavbarOpen={setIsNavbarOpen}/>
        <InfoContainer isNavbarOpen={isNavbarOpen}>
        <h2>{info?.title}</h2>
        <Text>{info?.infoBody}</Text>
        </InfoContainer>
        <Link href={info?.url} target='_blank'>Ir al sitio</Link>
        <Link onClick={()=> navigate('/')}>Volver</Link>
        <ItemsContainer>
        {items?.map((it)=>
        <UserItem key={it.id} item={it}/>
          )}
    </ItemsContainer>
    </>}
        </Suspense>
        
    )
}






// export default function Items({response, onShow}) {
//   const items = response.items
//   const info = response.info
//   const infoEnable = info?.enable? 'True': 'False'
//   return (
//     <Suspense fallback={<div>Loading...</div>}> 
//     <div>
//       <InfoContainer>
//       <InfoGroup>
//       <h3>Logo:</h3>
//       <Logo src= {info?.logo} alt= 'Not found'/>
//       </InfoGroup>
//       <InfoGroup>
//       <h3>Landing:</h3>
//       <Image src= {info?.landing} alt='Not found'/>
//       </InfoGroup>
//       <InfoGroup>
//       <h2>Id:</h2>
//       <p>{info?.id}</p>
//       </InfoGroup>
//       <InfoGroup>
//       <h2>Title:</h2>
//       <p>{info?.title}</p>
//       </InfoGroup>
//       <InfoGroup>
//       <h2>InfoHeader:</h2>
//       <p>{info?.infoHeader}</p>
//       </InfoGroup>
//       <InfoGroup>
//       <h2>InfoBody:</h2>
//       <p>{info?.infoBody}</p>
//       </InfoGroup>
//       <InfoGroup>
//       <h2>Url:</h2>
//       <p>{info?.url}</p>
//       </InfoGroup>
//       <InfoGroup>
//       <h2>Enable:</h2>
//       <p>{infoEnable}</p>
//       </InfoGroup>
//       <GenericButton className={style.button} buttonText={'Agregar Item'} onClick={()=>onShow()} style={{maxWidth: '2rem'}}/>
//       </InfoContainer>
//      <ItemsContainer>
//      {items?.map((it)=>
//      <Item key={it.id} item={it}/>
//     )}
//     </ItemsContainer>
//    </div>
//    </Suspense>
//   )
// }