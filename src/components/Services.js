// src/components/Services.js
import React from 'react';
import './Services.css';
import personalTraining from '../assets/image2.png';
import groupClasses from '../assets/workoutt.webp';
import nutritionCoaching from '../assets/nutrition.jpg';
import Zoom from 'react-reveal/Zoom';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-items">
          <Zoom>
            <div className="service-item">
              <img src={personalTraining} alt="Personal Training" />
              <h3>Personal Training</h3>
              <p>Customized workouts for your fitness goals.</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="service-item">
              <img src={groupClasses} alt="Group Classes" />
              <h3>Group Classes</h3>
              <p>Join our fun and energetic group classes.</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="service-item">
              <img src={nutritionCoaching} alt="Nutrition Coaching" />
              <h3>Nutrition Coaching</h3>
              <p>Get personalized nutrition advice and plans.</p>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Services;
