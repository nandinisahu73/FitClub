// src/components/JoinNow.js

import React, { useState } from 'react';
import './JoinNow.css';

const JoinNow = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle join now logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Plan:', plan);
  };

  return (
    <div className="join-container">
      <h2>Join Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plan">Choose a Plan:</label>
          <select id="plan" value={plan} onChange={(e) => setPlan(e.target.value)} required>
            <option value="">Select a plan</option>
            <option value="Basic Plan">Basic Plan</option>
            <option value="Standard Plan">Standard Plan</option>
            <option value="Premium Plan">Premium Plan</option>
          </select>
        </div>
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
};

export default JoinNow;
