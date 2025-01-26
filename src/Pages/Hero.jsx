import React, { useState, useEffect } from 'react';
import './Hero.css';

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

 // List of image paths
 const images = [
  './assets/images/1.png',
  './assets/images/2.png',
  './assets/images/3.png',
  './assets/images/4.png',
  './assets/images/5.png',
  './assets/images/6.png',
  './assets/images/7.png',
  './assets/images/8.png',
  './assets/images/9.png',
  './assets/images/10.png',
  './assets/images/11.png',
  './assets/images/12.png',
  './assets/images/13.png',
];

  useEffect(() => {
    // Simulate loading time (e.g., fetching data or loading resources)
    const timer = setTimeout(() => setLoading(false), 750); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <img src="logo.png" alt="Logo" className="spinner-logo" />
        </div>
      ) : (
        <div className="hero-section">
          <div className="hero-content">
            <h1>
              <span className="highlight">Empowering Builders</span> Enabling Dreams.
            </h1>
            <p>
              "Building with precision, managing every detail with excellence. From concept to completion, we transform visions into enduring realities."
            </p>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="hero-image">
            <img
              src="https://i.pinimg.com/736x/4d/6d/ce/4d6dce9459be98e677b79655c0d37d42.jpg" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
