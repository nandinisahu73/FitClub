// src/components/Plans.js

import React from 'react';
import './PlansData.css';

const plans = [
  {
    name: 'Basic Plan',
    price: '$20/month',
    features: ['Access to gym', 'Free parking'],
  },
  {
    name: 'Standard Plan',
    price: '$35/month',
    features: ['Access to gym', 'Free parking', 'Access to swimming pool'],
  },
  {
    name: 'Premium Plan',
    price: '$50/month',
    features: ['Access to gym', 'Free parking', 'Access to swimming pool', 'Free personal training'],
  },
];

const Plans = () => {
  return (
    <div className="plans-container">
      <h2>Our Plans</h2>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
