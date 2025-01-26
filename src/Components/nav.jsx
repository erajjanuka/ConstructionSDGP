import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="logo.png" alt="Company Logo" className="logo-image" />
        <span className="logo-text">Mr.බාස්</span>
      </div>

      {/* Nav links */}
      <nav className="nav-menu">
        <ul>
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item "><Link to="/team" className="nav-link">Team</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Service</Link></li>
          <li className="nav-item"><Link to="/contactUs" className="nav-link">Contact Us</Link></li>
          <li className="nav-item"><Link to="/AboutUs" className="nav-link">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
