import { useNavigate, Link} from 'react-router-dom'
import style from './Cards.module.css'

function Card({character}) {
  const {id, image, name }= character

  return (
    <div className={style.card}>
      <Link to={`/${id}`}>
     <img src={image} alt='not found' style={{maxWidth:'13rem'}}></img>
     <p>{name}</p>
     </Link>
    </div>
  )
}

export default Card
