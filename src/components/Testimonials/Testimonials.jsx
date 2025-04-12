import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aditya Sharma",
    role: "Personal Trainer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "I love how personal the experience is. The trainers listen to my goals and tailor my workouts to my needs. I’ve gained confidence in the gym and improved my strength more than I could’ve imagined!",
    rating: 5.0,
  },
  {
    name: "Sanket Kumar",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "The gym provides a fantastic atmosphere. The equipment is top-notch, and the trainers are always available for guidance. Highly recommend!",
    rating: 4.8,
  },
  {
    name: "Katrina ",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "A great place to work out! The staff is friendly, and the group classes are very motivating. My energy levels have improved significantly.",
    rating: 4.6,
  },
  {
    name: "Utsav Chauhan",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "The personalized training programs helped me reach my fitness goals faster. I appreciate the dedication of the trainers.",
    rating: 4.9,
  },
  {
    name: "David",
    role: "Yoga Instructor",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "I love the variety of workouts offered. The yoga sessions are particularly refreshing, and the trainers ensure proper form.",
    rating: 4.7,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" id='testimonials'>
      <h3 className="testimonials-subtitle">Testimonials</h3>
      <h2 className="testimonials-title">
        What <span className="highlight">Our Members</span> Are Saying
      </h2>
      <p className="testimonials-description">
        Discover what our members have to say about their experiences at our gym. We are committed to helping you achieve your fitness goals.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="review">"{testimonial.review}"</p>
            <div className="rating">
              {"★".repeat(Math.floor(testimonial.rating))}{"☆".repeat(5 - Math.floor(testimonial.rating))}
              <span>{testimonial.rating.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
