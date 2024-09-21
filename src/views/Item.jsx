import {Link, useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getItem, cleanState} from '../redux/actions'
import './styles/item.css'

const Item = () => {
  const dispatch = useDispatch()
  const item = useSelector((state)=>state.Item)
  const {id}=useParams()
  
  useEffect(()=>{
    dispatch(getItem(id))
    return ()=>{cleanState()}
  },[id])

  return (
    <div className='modal modal-tour position-static d-block modal-custom py-5' tabindex="-1" role="dialog" id="modalTour">
      <div className='modal-dialog modal-dialog-centered modal-xl'>
        <div className='modal-content'>
          <div className='modal-body p-5 text-center'>
            <img className='d-block.mx-auto mb-4' src={item?.img} alt="image not found"/>
            <p className='text-muted'>{item?.text}</p>
            <Link className='btn btn-lg btn-primary mt-3 mx-auto w-50' to={`/detalle/${item?.ProductId}`}>Cerrar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
