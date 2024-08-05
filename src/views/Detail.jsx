import style from './styles/Detail.module.css'
import C from '../components/Index'
import {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'
import { getById, cleanDetail } from '../redux/actions'


const Detail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  const item = useSelector((state)=> state.detail)
  //console.log('hay algo aca? ',item)
  useEffect(()=>{
    dispatch(getById(id))

    return ()=>{dispatch(cleanDetail())}

  },[dispatch, id])

 const goBack = ()=>{
    navigate(`/home/${item.pageId}`)
 }
  const toShow = item.enable? 'Activa': 'Inactiva'
  return (
    <div className={style.detailContainer}>
    <div className={style.card}>
    <p className = {style.clickableText} onClick={goBack}>🔙</p>
    <div className={style.content}>
    <ul>
      <li><strong>Text: </strong>{item.text}</li>
      <li><strong>Enable: </strong>{toShow}</li>
    </ul>
    <img src={item.img} alt='Not found' className={style.image}/>
    </div>
    </div>
   
    </div>
  )
}

export default Detail