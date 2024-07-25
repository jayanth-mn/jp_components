// src/pages/MainPage.jsx
import React, { useState, useEffect } from 'react';
import './MainPage.css';

const images = [
  '/airportcar.jpg',
  './bmwwedding.jpeg',
  './luxury.jpeg',
  './oip.jpg',
];

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Adjust to 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={handlePrevClick}>&lt;</button>
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={handleNextClick}>&gt;</button>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator-bar ${index === currentIndex ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
