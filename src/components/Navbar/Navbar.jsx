import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className='logo'/>
      <ul>
        <li><a href="#hero">HOME</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#home">ABOUT US</a></li>
        <li><a href="#membership">MEMBERSHIP</a></li>
        <li><a href="#testimonials">TESTIMONIALS</a></li>
        <li>23BCE0667 MD Farhan Shoaib</li>
        <li><button className='btn'><a href="#contact">CONTACT US</a></button></li>
        <li><button className="btn" onClick={() => window.open('/Login', '_blank', 'noopener,noreferrer')}>LOG IN</button></li>
        <li><button className="btn" onClick={() => window.open('/CalorieCalculator', '_blank', 'noopener,noreferrer')}>CALORIE CALCULATOR</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
