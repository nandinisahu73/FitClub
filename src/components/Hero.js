// src/components/Hero.js
import React from 'react';
import './Hero.css';
import heroImage from '../assets/background3.jpg';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container">
        <Fade bottom>
          <h2>Welcome to Our Gym</h2>
          <p>Get fit, stay healthy.</p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;

