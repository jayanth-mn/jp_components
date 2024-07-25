// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import CSS for styling

const images = [
  'https://via.placeholder.com/800x300?text=Slide+1',
  'https://via.placeholder.com/800x300?text=Slide+2',
  'https://via.placeholder.com/800x300?text=Slide+3',
  'https://via.placeholder.com/800x300?text=Slide+4'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={goToPrevious}>
        &#9664;
      </button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="carousel-button right" onClick={goToNext}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
