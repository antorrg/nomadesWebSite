import React from 'react'

const Header = () => {
  return (
    <header className='mb-auto'>
      <div>
        <h3 className='float-md-start mb-0 caption-nav colon-link'>
            Nomades
            <a className='nav-link' href='/error'>: </a>
            Cabañas de pastores
        </h3>
        <nav className='nav nav-masthead justify-content-center float-md-end caption-nav'>
            <a className='nav-link fw-bold py-1 px-0 active' aria-current='page' href='/'>Home</a>
            <a className='nav-link fw-bold py-1 px-0 active' href='/error'>Login</a>
            <a className='nav-link fw-bold py-1 px-0 active' href=''>Contacto</a>
            <a className='nav-link fw-bold py-1 px-0 active' href=''>Acerca de </a>
        </nav>
     </div>
    </header>
  )
}

export default Header
// header.mb-auto
//           div
//             h3.float-md-start.mb-0.caption-nav.colon-link
//               | Nomades
//               a.nav-link(href="/error") : 
//               |  Cabañas de Pastores
//             nav.nav.nav-masthead.justify-content-center.float-md-end.caption-nav
//               a.nav-link.fw-bold.py-1.px-0.active(aria-current='page' href='/') Home
//               a.nav-link.fw-bold.py-1.px-0.active(href='#') Login
//               a.nav-link.fw-bold.py-1.px-0.active(href='/contacto') Contacto
//               a.nav-link.fw-bold.py-1.px-0.active(href='#') Acerca de: