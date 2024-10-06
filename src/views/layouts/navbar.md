
# Navbar con sidebar retraible: 

```implementacion en react```

```javascript

import React, { useState, useEffect, useRef } from 'react';
import { Offcanvas } from 'bootstrap';
import '../styles/admin.css'
import { useAuth } from '../../Auth/AuthContext/AuthContext';
import { showSuccess } from '../../Auth/userComponents/HandlerError';
import { useNavigate } from 'react-router-dom';
import Edition from '../../Auth/userComponents/Edition/Edition'

const AdminNav = ({setHelp}) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const offcanvasRef = useRef(null);
    console.log('soy useRef: ',offcanvasRef)

    //Inicializar el componente offcanvas
    useEffect(() => {
      const offcanvasEl = offcanvasRef.current;
      const bsOffcanvas = new Offcanvas(offcanvasEl);
      offcanvasRef.current.bsOffcanvas = bsOffcanvas;
    }, []);
  
    // Función para cerrar el offcanvas
    const cerrarOffcanvas = () => {
      if (offcanvasRef.current && offcanvasRef.current.bsOffcanvas) {
        offcanvasRef.current.bsOffcanvas.hide(); // Oculta el offcanvas
      }
    };
    //Funciones ejecutadas en la navbar:

    const productos =()=>{console.log('soy el producto')}
    const usuario =()=>{cerrarOffcanvas()}
    const ayuda = ()=>{setHelp(true)}
    const action =()=>{console.log('action')}
    const anotherAction =()=>{console.log('another action')}
    const algoMas =()=>{console.log('algo mas')}
    const newProduct =()=>{console.log('nuevo producto')}
    const settings =()=>{console.log('settings')}
    const profile =()=>{console.log('perfil')}
    const sessionCleaner = () => {
        showSuccess('Sesión cerrada');
        navigate('/');
        setTimeout(() => {
          logout();
        }, 1500);
      };

  return (
    <>
     <nav className="navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
        <div className="container-fluid">
          <button className="navbar-toggler me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-start" href="/">Administrador</a>
          <div className="offcanvas offcanvas-start text-bg-dark maxNavWidht" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Administrador</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body admin-content">
              <ul className="navbar-nav justify-content-start flex-grow-1 ps-3">
                <li className="nav-item">
                  <button className="nav-link active d-block text-start w-100"  onClick={()=>{productos()}}>Producto</button>
                </li>
                <li className="nav-item">
                <Edition allowedRoles={['Super Admin', 'Admin']} onClick={()=>{usuario()}} text={'Usuarios'} className="nav-link active d-block text-start w-100" />
                </li>
                <li className="nav-item">
                  <button className="nav-link active d-block text-start w-100"  onClick={()=>{ayuda()}}>Ayuda ?</button>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portada
                  </a>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={()=>{action()}}>Portada...</button></li>
                    <li><button className="dropdown-item" onClick={()=>{anotherAction()}}>Videos</button></li>
                    <li>
                      <hr className="dropdown-divider"/>
                    </li>
                    <li><button className="dropdown-item" onClick={()=>{algoMas()}}>Something else here</button></li>
                  </ul>
                </li>
              </ul>
            <hr/>
           <div className="dropdown">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={user.picture} alt="Not found" width="32" height="32" className="rounded-circle me-2"/> 
                <strong>{user.given_name?user.geiven_name:user.nickname}</strong>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
               <li><button className="dropdown-item" onClick={()=>{newProduct()}}>Nuevo proyecto...</button></li>
                <li><button className="dropdown-item" onClick={()=>{settings()}}>Settings</button></li>
                <li><button className="dropdown-item" onClick={()=>{profile()}}>Perfil</button></li>
                <li><hr className="dropdown-divider"/></li>
                <li><button className="dropdown-item" onClick={() => sessionCleaner()}>Cerrar sesion</button></li>
              </ul>
           </div>
           </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminNav
```