import {useDispatch, useSelector} from 'react-redux'
import {useEffect, Suspense} from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { getProductById } from './Redux/actions'
import style from './Cards.module.css'

export default function Detail (){
    const dispatch = useDispatch()
    const info = useSelector((state)=>state.productById)
    const navigate =useNavigate()
    const {id}=useParams()
  const goBack = ()=>{
    navigate(-1)
  }
    useEffect(()=>{
        dispatch(getProductById(id))
    },[id])
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div className={style.card}>
        <a onClick={goBack} style={{cursor:'pointer'}}>
        <img src={info?.image} style={{maxWidth:'13rem'}}></img>
        <p>ID: {info?.id}</p>
        <p>Name: {info?.name}</p>
        </a>
        </div>
        </Suspense>
    )
}





  