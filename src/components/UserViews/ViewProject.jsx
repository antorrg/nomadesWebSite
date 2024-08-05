import {useEffect, Suspense, lazy} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from 'react-router-dom'
import {getProjectById} from '../../redux/actions'
import { InfoVerticalCont, InfoGroupInvisible, ItemsContainer } from "../styles/Items";
import { Botoncito, PrimaryButton } from "../styles/LandingStyles";
const Item = lazy(()=>import('../Items/Item'));
const Loading = lazy(()=>import('../Loading'))


export default function ViewProject (){
  const dispatch = useDispatch()
  const {id} = useParams()
  const response = useSelector((state)=>state.singleProject)
  const load = useSelector((state)=>state.loading)
    const items = response.items
    const info = response.info

    useEffect(()=>{
        dispatch(getProjectById(id))
    },[id])

  return (
    <Suspense fallback={<div>Loading...</div>}> 
    {load?
    <Loading/>:
    <div>
      <InfoVerticalCont>
      <p>{info?.title}</p>
      <p>{info?.infoBody}</p>
      <InfoGroupInvisible>
      <PrimaryButton href='/'>Volver </PrimaryButton>
      <PrimaryButton href={info?.url}target='_blank'>Ir al sitio</PrimaryButton>
      </InfoGroupInvisible>
      </InfoVerticalCont>
     <ItemsContainer>
     {items?.map((it)=>
     <Item key={it.id} item={it}/>
    )}
    </ItemsContainer>
   </div>
    }
   </Suspense>
  );
};


