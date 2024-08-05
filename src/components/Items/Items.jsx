import Item from './Item'
import { InfoContainer, InfoGroup, Logo, Image, ItemsContainer } from '../styles/Items'
import GenericButton from '../../Auth/userComponents/GenericButton/GenericButton'
import style from './ButtonItems.module.css'
import { Suspense } from 'react'


export default function Items({response, onShow}) {
  const items = response.items
  const info = response.info
  const infoEnable = info?.enable? 'True': 'False'
  return (
    <Suspense fallback={<div>Loading...</div>}> 
    <div>
      <InfoContainer>
      <InfoGroup>
      <h3>Logo:</h3>
      <Logo src= {info?.logo} alt= 'Not found'/>
      </InfoGroup>
      <InfoGroup>
      <h3>Landing:</h3>
      <Image src= {info?.landing} alt='Not found'/>
      </InfoGroup>
      <InfoGroup>
      <h2>Id:</h2>
      <p>{info?.id}</p>
      </InfoGroup>
      <InfoGroup>
      <h2>Title:</h2>
      <p>{info?.title}</p>
      </InfoGroup>
      <InfoGroup>
      <h2>InfoHeader:</h2>
      <p>{info?.infoHeader}</p>
      </InfoGroup>
      <InfoGroup>
      <h2>InfoBody:</h2>
      <p>{info?.infoBody}</p>
      </InfoGroup>
      <InfoGroup>
      <h2>Url:</h2>
      <p>{info?.url}</p>
      </InfoGroup>
      <InfoGroup>
      <h2>Enable:</h2>
      <p>{infoEnable}</p>
      </InfoGroup>
      <GenericButton className={style.button} buttonText={'Agregar Item'} onClick={()=>onShow()} style={{maxWidth: '2rem'}}/>
      </InfoContainer>
     <ItemsContainer>
     {items?.map((it)=>
     <Item key={it.id} item={it}/>
    )}
    </ItemsContainer>
   </div>
   </Suspense>
  )
}
