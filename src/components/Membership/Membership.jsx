import React from "react";
import "./Membership.css";

const Membership = () => {
  return (
    <div className="membership-container" id='membership'>
      <h3 className="membership-subtitle">Membership</h3>
      <h2 className="membership-title">
        Choose the <span className="highlight">Perfect Plan</span> for Your Goals
      </h2>
      <p className="membership-description">
        Find the ideal membership plan that fits your fitness goals. Whether you're starting out or pushing your limits, we have a plan for you.
      </p>

      <div className="plans">
        <div className="plan-card">
          <h3>Basic Plan</h3>
          <h2>Rs. 2000 per month</h2>
          <p>Perfect for those just starting their fitness journey.</p>
          <ul>
            <li>✔ Access to gym facilities</li>
            <li>✔ Standard equipment usage</li>
            <li>✔ Nutrition Tracking</li>
            <li>✔ 3x Free Supplement</li>
            <li>✔ 5 Days per week</li>
            <li>✔ 1 Free Group Class per Month</li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>

        <div className="plan-card best-offer">
          <div className="ribbon">Best Offer</div>
          <h3>Standard Plan</h3>
          <h2>Rs. 3000 per month</h2>
          <p>Ideal for individuals looking to elevate their routine.</p>
          <ul>
            <li>✔ Full access to gym facilities</li>
            <li>✔ Standard equipment usage</li>
            <li>✔ Nutrition Tracking</li>
            <li>✔ 4x Free Supplement</li>
            <li>✔ 5 Days per week</li>
            <li>✔ 4 Free Group Classes per Month</li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>

        <div className="plan-card">
          <h3>Premium Plan</h3>
          <h2>Rs. 5000 per month</h2>
          <p>Perfect for those looking for the ultimate fitness experience.</p>
          <ul>
            <li>✔ Access to gym facilities</li>
            <li>✔ Premium equipment usage</li>
            <li>✔ Nutrition Tracking</li>
            <li>✔ 5x Free Supplement</li>
            <li>✔ Everyday per week</li>
            <li>✔ 8 Free Group Classes per Month</li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>
        <button className="get-started" onClick={() => window.open('/signup', '_blank', 'noopener,noreferrer')}>JOIN NOW</button>
      </div>
    </div>
  );
};

export default Membership;
