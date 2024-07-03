// src/components/Reviews.js
import React from 'react';
import './Reviews.css';
import review1 from '../assets/t-image1.png';
import review2 from '../assets/t-image2.jpg';
import review3 from '../assets/t-image3.jpg';
import Slide from 'react-reveal/Slide';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2>What Our Members Say</h2>
        <div className="review-items">
          <Slide left>
            <div className="review-item">
              <img src={review1} alt="Review 1" />
              <p>"The personal training sessions are top-notch. Highly recommend!"</p>
              <h4>- John Doe</h4>
            </div>
          </Slide>
          <Slide bottom>
            <div className="review-item">
              <img src={review2} alt="Review 2" />
              <p>"Great atmosphere and the group classes are fantastic!"</p>
              <h4>- Jane Smith</h4>
            </div>
          </Slide>
          <Slide right>
            <div className="review-item">
              <img src={review3} alt="Review 3" />
              <p>"Excellent nutrition coaching that helped me achieve my goals."</p>
              <h4>- Sam Wilson</h4>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
