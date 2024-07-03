// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PlansData from './components/PlansData';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      
      <Header />
      <Hero />
      <Services />
      <PlansData/>
      <About />
      <Reviews/>
      <Footer />
    </>
  );
};

export default App;
