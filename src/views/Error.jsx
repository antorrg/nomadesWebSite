import {useLocation, Link} from 'react-router-dom'
import './styles/error.css'

const Error = () => {
    const location = useLocation()
    const error = location.state || { status: 'Desconocido', message: 'Ha ocurrido un error inesperado' };
  return (
    <div className='error-page'>
    <h1>Error {error.status}</h1>
    <p>{error.message}</p>
    <Link to={'/'}>Volver a inicio...</Link>
    </div>
  )
}

export default Error
