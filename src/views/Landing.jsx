import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getInfo, getProduct} from '../redux/actions'
import Header from '../components/Header'
import Carousel from '../components/carousel/Carousel'
import Footer from '../components/Footer'


const Landing = () => {
  const dispatch = useDispatch()
  const info = useSelector((state)=>state.Landing)
  const products = useSelector((state)=>state.Products)
  useEffect(()=>{
    dispatch(getInfo())
    dispatch(getProduct())
  },[])
  //console.log('soy info',info)

  return (
    <>
    <div className='min-vh-100 cover-container1 d-flex w-100 p-3 mx-auto flex-column' style={{backgroundImage:`url(${info.image}||https://img.freepik.com/foto-gratis/cascada-barco-limpio-china-natural_1417-1356.jpg)`}}>
    <Header/>
    <section className='px-3'>
      <div className='caption-title'>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        <p className='lead'>
          <Link className='btn btn-lg btn-ligth fw-bold border-white bg-white ' to='/error'>
            Vea más...
        </Link>
        </p>
      </div>
      <br/>
      <br/>
    </section>
    </div>
    <div className='my-1'></div>
    <section>
    <Carousel info={products}/>
    <div className='container marketing'>
      <div className='row'>
        {products?.map((info)=>
        <div className='col-lg-4' key={info.id}>
          <img className='bd-placeholder-img-fluid'  src={info.landing} alt='Imagen' style={{maxWidth:'20rem'}}/>
          <h2 className='fw-normal'>{info.title}</h2>
          <p>{info.infoHeader}</p>
          <p><Link className='btn btn-secondary' to={`/detalle/${info.id}`}>Ver detalles</Link></p>
        </div>
        )}
      </div>
    </div>
    </section>
    <Footer/>
    
    </> 
    
  )
}

export default Landing
