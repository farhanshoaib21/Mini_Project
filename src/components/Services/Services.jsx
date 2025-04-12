import React from "react";
import "./Services.css";
import program1 from "../../assets/pt.jpg";
import program2 from "../../assets/gft.jpg";
import program3 from "../../assets/equip.jpg";
import program4 from "../../assets/diet.jpg";
import program5 from "../../assets/member.jpg";
import program6 from "../../assets/lock.jpg";

const Services = () => {
  return (
    <div className="services-section" id='services'>
      <h2 className="services-title">
        Transform Your Fitness with Our{" "}
        <span className="highlight">Specialized Services.</span>
      </h2>
      <p className="services-description">
        Achieve your fitness goals with expert training programs. Whether you
        prefer one-on-one coaching, group workouts, or in-depth assessments, we
        have the right service for you.
      </p>

      <div className="services">
        <div className="service-card">
          <img src={program1} alt="Personal Training" />
          <h3>Personal Training</h3>
          <p>
          Personal Training – Get expert guidance with one-on-one training and custom workout plans. Track progress and achieve fitness goals effectively.
          </p>
        </div>
        <div className="service-card">
          <img src={program2} alt="Group Fitness Classes" />
          <h3>Group Fitness Classes</h3>
          <p>
          Group Fitness Classes – Join fun and energetic classes like Yoga, Zumba, and HIIT. Stay motivated with professional instructors and a supportive community.
          </p>
        </div>
        <div className="service-card">
          <img src={program3} alt="Modern Equipment" />
          <h3>Modern Equipment</h3>
          <p>
          Strength & Cardio Equipment – Access modern machines, free weights, and resistance tools. Regular maintenance ensures a safe and clean workout environment.
          </p>
        </div>
        <div className="service-card">
          <img src={program4} alt="Nutrition Plans" />
          <h3>Nutrition Plans</h3>
          <p>
          Nutrition & Diet Plans – Get personalized meal plans from certified dietitians. Boost your fitness with proper nutrition and supplement guidance.
          </p>
        </div>
        <div className="service-card">
          <img src={program5} alt="Exclusive Membership" />
          <h3>Exclusive Membership</h3>
          <p>
          Membership Plans & Discounts – Choose flexible plans with exclusive discounts. Enjoy special offers for students, seniors, and corporate groups.
          </p>
        </div>
        <div className="service-card">
          <img src={program6} alt="Secure Lockers" />
          <h3>Secure Lockers</h3>
          <p>
          Locker Rooms & Shower Facilities – Secure lockers and clean showers for your convenience. Enjoy complimentary hygiene products and a well-maintained space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
