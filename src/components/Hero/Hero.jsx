import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className="hero-content">
        <p className="subtext">Fitness for Everyone</p>
        <h1>
          <span>STRONG</span>ER <br /> EVERYDAY
        </h1>
        <h3>SWEAT, SACRIFICE, SUCCESS.</h3>
        <button className="cta-button"><a href="#membership">GET STARTED</a></button>
      </div>
    </div>
  );
};

export default Hero;
