import React from 'react';
import { Mountain } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <Mountain className="hero-icon" />
        <h1>Tiwanaku Culture</h1>
        <h2>Andean Civilization (300-1000 CE)</h2>
        <p>
          Explore the remarkable legacy of the pre-Incan civilization that thrived 
          at Lake Titicaca and developed advanced architecture, agriculture, and 
          cosmic understanding.
        </p>
        <div className="hero-cta">
          <a href="#overview" className="primary-button">
            Discover Tiwanaku
          </a>
          <a href="#architecture" className="secondary-button">
            View Monuments
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
