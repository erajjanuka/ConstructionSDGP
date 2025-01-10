import React from "react";
import './nav.css';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="logo.png" alt="Company Logo" className="logo-image" />
        <span className="logo-text">Mr.බාස්</span>
      </div>

      {/* Navigation Links */}
      <nav className="nav-menu">
        <ul>
          <li className="nav-item active">Home</li>
          <li className="nav-item">Team</li>
          <li className="nav-item">Service</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
