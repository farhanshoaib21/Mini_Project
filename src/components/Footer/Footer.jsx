import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h2 className="footer-logo">Gym<span>Connect</span></h2>
          <p>Stay fit, stay strong! Join us today and achieve your fitness goals with GymSick. 💪"</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#home">ABOUT US</a></li>
            <li><a href="#membership">MEMBERSHIP</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
          </ul>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Personal Training</li>
            <li>Group Workouts</li>
            <li>Nutrition Plans</li>
            <li>Premium and best Equpiment</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>+91 9876543210</p>
          <p>contact@gymsick.com</p>
          <p>VIT Vellore, 632014</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 GymSick. All Rights Reserved.</p>
        <p>23BCE0667 MD Farhan Shoaib</p>
      </div>
    </footer>
  );
};

export default Footer;
