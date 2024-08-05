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
  @media (max-width: 768px){
    width: 100vw;
    height:fit-content;
    
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px;
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

const NabLink = styled.a`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #575757;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  right: 0;
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
    display: none;
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

const HamburgerMenu = ({goGo}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };
  const homeNavigate = () => {
    setIsOpen(false);
    goGo()
    console.log('Yo ando bien')
  };

  return (
    <Navbar>
      <Brand>
        <h4>MyApp</h4>
        <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerIcon>
      </Brand>
      <NavLinks isOpen={isOpen}>
        <NabLink onClick={homeNavigate}>Home</NabLink>
        <NabLink to="/about" onClick={() => handleNavigate('/about')}>About</NabLink>
        <NabLink to="/services" onClick={() => handleNavigate('/services')}>Services</NabLink>
        <NabLink to="/contact" onClick={() => handleNavigate('/contact')}>Contact</NabLink>
      </NavLinks>
    </Navbar>
  );
};

export default HamburgerMenu;
