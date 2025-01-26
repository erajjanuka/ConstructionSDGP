import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <h2 className="footer-logo">Mr.බාස් </h2>
        <p>Construction Management Service</p>
        <div className="footer-socials">
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Center Section */}
      <div className="footer-center">
        <h4>Quick Link</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <h4>Contact</h4>
        <ul>
          <li><a href="mrrbasss@gmail.com">mrrbasss@gmail.com</a></li>
          <li>+94741973441</li>
          <li>Colombo, Sri Lanka</li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
