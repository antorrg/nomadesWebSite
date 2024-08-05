import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  width: 97vw; /* Asegura que ocupe todo el ancho de la pantalla */
  max-height: 2rem;
  z-index: 1000;
  ${({ isOpen }) => isOpen && `
    max-height: 4rem;
  `}
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #333;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    position: static;
    width: 100vw;
    margin-left: 20px;  /* Espaciado entre el título y los enlaces */
    text-align: left; /* Alinea los enlaces a la izquierda */
  }
`;
const Dinamic = styled.div`
 display:flex;
 flex-direction: column;
 align-items: left;
 justify-content: space-between;
`
const NavLink = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #575757;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  left: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 1;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px;
    transition: 0.4s;
  }

  @media (min-width: 768px) {
    
  }

  ${({ isOpen }) => isOpen && `
    div:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`;

export default function NavbarDetalle ({info, setIsNavbarOpen}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsNavbarOpen(!isOpen);
  };

  const handleNavigate = (path) => {
    setIsOpen(false);
    setIsNavbarOpen(false);
    navigate(path);
  };

  return (
    <Navbar isOpen={isOpen}>
      <Brand>
      {isOpen?
      <Dinamic>
        <p><strong>{info?.title}</strong> : {info?.infoHeader}</p>
      </Dinamic> :
      <h4>Proyecto: </h4>}
         </Brand>
      {isOpen?
      <NavLinks isOpen={isOpen}>
        <NavLink to="/home" onClick={() => handleNavigate('/home')}>Home</NavLink>
        <NavLink to="/about" onClick={() => handleNavigate('/about')}>About</NavLink>
        <NavLink to="/services" onClick={() => handleNavigate('/services')}>Services</NavLink>
        <NavLink to="/contact" onClick={() => handleNavigate('/contact')}>Contact</NavLink>
      </NavLinks> : null}

        <HamburgerIcon isOpen={isOpen} onClick={handleToggle}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerIcon>
    </Navbar>
  );
};

