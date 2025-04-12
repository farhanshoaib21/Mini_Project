import React from "react";
import "./Home.css";
import gymImage from "../../assets/home.jpg";

const Home = () => {
  return (
    <div className="home-container" id='home'>
      <div className="home-content">
        <div className="image-section">
          <img src={gymImage} alt="Gym Training" />
        </div>

        <div className="text-section">
          <h2>
            Experience the <span className="highlight">Best in Fitness:</span> Here’s Why?
          </h2>
          <p>
            At our gym, we are committed to providing an exceptional fitness experience with top-tier facilities, expert trainers, and a motivating environment.
          </p>

          <div className="benefits">
            <div className="benefit-card">
              <h3>Highly Qualified Trainers</h3>
              <p>
                Get trained by certified professionals who will guide you through personalized workout programs.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Advanced Fitness Equipment</h3>
              <p>
                Experience cutting-edge gym equipment for strength training, cardio, and functional fitness.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Tailored Membership Plans</h3>
              <p>
                Choose from a variety of membership plans designed to suit your lifestyle and goals.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Inclusive & Supportive Community</h3>
              <p>
                Join a fitness community that encourages and supports you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
