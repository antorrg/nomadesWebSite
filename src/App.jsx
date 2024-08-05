import {Routes, Route, Navigate} from 'react-router-dom'
import {useAuth} from './Auth/AuthContext/AuthContext'
//import V from './views/Index'
import React, { Suspense, lazy, useEffect } from 'react'
import './App.css'
const Landing = lazy(() => import('./views/Landing'));
//const ViewProject = lazy(() => import('./components/UserViews/ViewProject'));
const Detalle = lazy(() => import('./components/UserViews/Detalle'))
const ItemDetail = lazy(() => import('./components/UserViews/ItemDetail'))
const Home = lazy(() => import('./views/Home'));
const Detail = lazy(() => import('./views/Detail'));
const About = lazy(() => import('./views/About'));
const Create = lazy(() => import('./views/Create'));
const Update = lazy(() => import('./views/Update'));
const Form = lazy(() => import('./views/Form'));

// Works also with SSR as expected



export default function App() {
  const {authenticated} = useAuth()
 

  return (
    <div>
      <ErrorBoundary>
   <Suspense fallback={<div>Loading...</div>}> 
    <Routes>
    <Route path={'/'} element={<Landing/>}/>
    <Route path={'/detalle/:id'} element={<Detalle/>}/>
    <Route path={'item/:id'} element = {<ItemDetail/>}/>
    <Route path={'/about'} element={<About/>}/>
    <Route path={'/home'} element={authenticated? <Home/>: <Navigate to= '/'/>}/>
    <Route path={'/home/:id'} element={authenticated? <Home/>: <Navigate to= '/'/>}/>
    <Route path={'/detail/:id'} element={authenticated? <Detail/> : <Navigate to = '/'/>}/>
    <Route path={'/login'} element={!authenticated? <Form/>: <Navigate to= '/home'/>}/>
    <Route path= {'/create'} element={authenticated? <Create/>: <Navigate to= '/home'/>}/>
    <Route path= {'/update/:id'} element={authenticated? <Update/> : <Navigate to= '/home'/>}/>
    </Routes>
    </Suspense>
    </ErrorBoundary>
    </div>
  )
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes enviar el error a un servicio de reporte de errores
    console.error("Error durante la hidratación:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

{/* <Suspense fallback={<p>Loading card component...</p>}>
<Card />
</Suspense> */}