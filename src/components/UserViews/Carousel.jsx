import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  top: 3rem;
  left: 0;
  width: 99%;
  max-height: 80%;
  overflow: hidden;
  @media (max-width: 768px) {
    top: 0;
    width: 100vw;
    max-height: 60vh;
    overflow: hidden;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  position: relative;

  img {
    width: 100%;
    display: block;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    margin-top: 1rem;
  }

  button {
    border: none;
     background-color: #333;/*${({ isactive }) => (isactive ? '#333' : '#bbb')}; */
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
 
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  ${({ direction }) => direction}: 10px;

  span {
    font-size: 30px;
    color: #333;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
    top: auto;
    bottom: 10px;

    span {
      font-size: 24px;
    }
  }
`;

const CarouselCaption = styled.div`
  position: absolute;
  top: 8rem;
  left: 50;
  max-height:15rem;
  text-align: left;
  bottom: 3rem;
  z-index: 10;
  margin-top: 5rem;
  background: rgba(255, 255, 255, 0.5); /* Fondo semitransparente */
  backdrop-filter: blur(5px); /* Efecto de desenfoque */
  -webkit-backdrop-filter: blur(10px); /* Efecto de desenfoque para Safari */
  padding: 1.5rem;
  border-radius: 10px; /* Bordes redondeados */
  color: black; /* Asegúrate de que el texto sea visible */

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    bottom: 40px;
    left: 40px;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 90%;
    text-align: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
const PrimaryButton = styled.a`
    width: 100%;
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

&:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
@media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
    padding: 6px;
  }
`

export default function Carousel ({projects}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <CarouselContainer>
      <CarouselInner currentIndex={currentIndex}>
        {projects.map((info, index) => (
          <CarouselItem key={index}>
            <img src={info.landing} alt={info.title} />
            {index === currentIndex && (
              <CarouselCaption>
                <h1>{info.title}</h1>
                <p>{info.infoHeader}</p>
                <p>
                  <PrimaryButton href={info.url} target="_blank" rel="noopener noreferrer" >Visite el sitio</PrimaryButton>
                </p>
              </CarouselCaption>
            )}
          </CarouselItem>
        ))}
      </CarouselInner>
      <ControlButton direction="left" onClick={handlePrev}>
        <span>&#10094;</span>
      </ControlButton>
      <ControlButton direction="right" onClick={handleNext}>
        <span>&#10095;</span>
      </ControlButton>
      <Indicators>
        {projects.map((_, index) => (
          <button
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

