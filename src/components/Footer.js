// src/components/Footer.js
import React from 'react';
import './Footer.css';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <b><p>Contact us: email:nandinisahu57920@gmail.com</p></b>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
        <b><p>&copy; 2024 FitClub. All rights reserved.</p> </b>
      </div>
    </footer>
  );
};

export default Footer;
