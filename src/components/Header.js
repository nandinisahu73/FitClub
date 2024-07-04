// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#hero" className="logo-link">
          <img src={logo} alt="Gym Logo" className="logo" />
        </a>
        <nav className="nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
            

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
