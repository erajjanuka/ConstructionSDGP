import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
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
          src="https://i.pinimg.com/736x/4d/6d/ce/4d6dce9459be98e677b79655c0d37d42.jpg" // Replace with your image URL
          alt="Dream House"
        />
      </div>
    </div>
  );
};

export default HeroSection;

