
// src/components/About.js
import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <Fade left>
          <h2>About Us</h2>
          <p>We are a fitness center dedicated to helping you achieve your fitness goals.Take care of your body. It's the only place you have to live.

At THE GYM, our mission is to provide you with the ultimate fitness experience, one that focuses on your specific fitness needs, helps you achieve the results you are after and invigorates your soul. We guarantee the highest quality equipment and training programs available, an expert staff, special amenities that are often not found in other health clubs, attentive service and truly sophisticated surroundings. Our every Fitness training center is committed to being a unique Fitness training center in india.</p>
        </Fade>
      </div>
    </section>
  );
};

export default About;
