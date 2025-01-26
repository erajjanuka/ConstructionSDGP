import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        {/* Left Section - Image */}
        <div className="about-image">
          <img
            src="about.png" 
            alt="About Us"
          />
        </div>

        {/* Right Section - Content */}
        <div className="about-content">
          <h2>Mr.බාස්</h2>
          <p>
          The “Mr. බාස්” Housing Construction Management <b>Mobile Application</b> tackles the inefficiencies present in Sri Lanka’s housing construction sector, especially for small and medium enterprises, by offering a streamlined, user-friendly digital platform. This mobile app improves communication among stakeholders, optimizes resource allocation, and guarantees transparency throughout project processes. Notable features include support for multiple languages, real-time progress monitoring, and inventory notifications, specifically designed for project managers and construction professionals. With a subscription model and strong role-based access controls, "Mr. බාස්" aims to transform construction management in Sri Lanka, enhancing productivity and lowering costs while promoting collaboration and accountability.
          </p>
          <h3>Our Vision</h3>
          <p>
            <strong>Empowering construction with precision, transparency, and innovation</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
