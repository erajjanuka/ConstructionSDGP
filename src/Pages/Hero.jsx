import React, { useState, useEffect } from 'react';
import './Hero.css';

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

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
        <>
          {/* Hero Section */}
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
                alt="Construction Visual"
              />
            </div>
          </div>


          {/* New Section */}
          <div className="middle-section">
            <h2 className="middle-heading">Who We Are</h2>
            <p className="middle-para">
            We are a passionate team committed to revolutionizing Sri Lanka’s housing construction sector. Our goal is to empower small and medium enterprises with innovative solutions that streamline processes, enhance communication, and drive efficiency. With a focus on collaboration, transparency, and user-friendly technology, we aim to transform construction management into a seamless experience for all stakeholders.            </p>
            <div className="image-container">
              <img src="1.png" alt="Expertise 1" className="middle-image" />
              <img src="2.png" alt="Expertise 2" className="middle-image" />
              <img src="7.png" alt="Expertise 2" className="middle-image" />
              <img src="10.png" alt="Expertise 2" className="middle-image" />
            </div>
            
          </div>
        </>
      )}
    </>
  );
};

export default HeroSection;
