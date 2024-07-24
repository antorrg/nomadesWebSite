import {useEffect, Suspense, lazy} from 'react'
const Cards = lazy(() => import('./Cards'))
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProduct } from './Redux/actions'
import style from './Cards.module.css'


const Home = () => {
    const dispatch = useDispatch()
    const info = useSelector((state)=>state.product)
    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <Cards info={info}/>
    </Suspense>
  )
}

export default Home