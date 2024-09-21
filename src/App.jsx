import {Routes, Route, Navigate}from 'react-router-dom'
import {useAuth} from './Auth/AuthContext/AuthContext'
import { useEffect } from 'react'
import interceptor from './Interceptor'
import * as View from './views/Index'

function App() {
  const {authenticated, user, logout}= useAuth()

 useEffect(()=>{
  interceptor(logout)
 },[])

  const isAllowed = (roles) => {
    return authenticated && roles.includes(user?.role);
  };

  return (
    <>
    <Routes>
      <Route path='/' element={<View.Landing/>}/>
      <Route path='/detalle/:id' element={<View.Detail/>}/>
      <Route path='/detalle/item/:id' element={<View.Item/>}/>
      <Route path='/contacto' element={<View.Contact/>}/>
      <Route path='/acerca' element={<View.About/>}/>
      <Route path='/login' element={<View.Login/>}/>
      <Route path='/admin' element={isAllowed(['Admin', 'Moderador', 'Super Admin']) ? <View.Admin/> : <Navigate to="/error" state={{ status: 403, message: "No tienes permiso para acceder a esta página" }}/>}/>
      <Route path='/error' element={<View.Error/>}/>
      <Route path='/*' element={<View.Error  state={{ status: 404, message: "Página no encontrada" }}/>}/>
    </Routes>
    </>
  )
}

export default App
