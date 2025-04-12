import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    membershipType: 'basic',
    duration: '1',
    emergencyContact: '',
    healthConditions: '',
    agreeTerms: false
  });

  const plans = {
    basic: 2000,
    standard: 3000,
    premium: 5000,
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const totalAmount = plans[formData.membershipType] * parseInt(formData.duration);

  const storeUserCredentials = (username, password, callback) => {
    const request = indexedDB.open('GymDB', 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'username' });
      }
    };
  
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction('users', 'readwrite');
      const store = transaction.objectStore('users');
      store.put({ username, password });
  
      transaction.oncomplete = () => {
        alert(`Signup Successful!\nYour login credentials:\nUsername: ${username}\nPassword: ${password}`);
        if (callback) callback(); // <- Call generateReceipt after storing
      };
    };
  
    request.onerror = () => {
      alert('Error storing credentials!');
    };
  };
  
  const generateReceipt = (username) => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text("Gym Membership Receipt", 20, 20);
  
    doc.setFontSize(12);
    doc.text(`Name: ${formData.fullName}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text(`DOB: ${formData.dob}`, 20, 70);
    doc.text(`Gender: ${formData.gender || 'Not specified'}`, 20, 80);
    doc.text(`Membership Type: ${formData.membershipType}`, 20, 90);
    doc.text(`Duration: ${formData.duration} Month(s)`, 20, 100);
    doc.text(`Total Paid: Rs. ${totalAmount}`, 20, 110);
    doc.text(`Username: ${username}`, 20, 120);
    doc.text(`Password: Qwerty@123`, 20, 130);
  
    doc.save(`${username}_receipt.pdf`);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = formData.fullName.replace(/\s+/g, '').toLowerCase();
    const password = 'Qwerty@123';
  
    storeUserCredentials(username, password, () => {
      generateReceipt(username); // This triggers auto-download
    });
  };
  

  return (
    <div className="membership-container">
      <div className="membership-header">
        <h1>Gym Membership Application</h1>
        <p>Complete this form to join our fitness community and start your journey toward better health.</p>
      </div>
      <div className="plans-divider"></div>
      <form onSubmit={handleSubmit} className="membership-form">
        <div className="form-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label>Full Name*</label>
            <input type="text" name="fullName" placeholder='Enter your name' value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input type="email" name="email" placeholder='Enter your mail' value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number*</label>
            <input type="tel" name="phone" placeholder='Enter your Phone number' value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date of Birth*</label>
            <input type="date" name="dob" placeholder='Date of Birth' value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="form-section">
          <h2>Membership Selection</h2>
          <div className="form-group">
            <label>Membership Type*</label>
            <div className="plan-options">
              {Object.keys(plans).map((plan) => (
                <label key={plan} className={`plan-option ${formData.membershipType === plan ? 'selected' : ''}`}>
                  <input type="radio" name="membershipType" value={plan} checked={formData.membershipType === plan} onChange={handleChange} />
                  <div className="plan-content">
                    <h3>{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</h3>
                    <p className="plan-price">Rs. {plans[plan]} per month</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Duration (months)*</label>
            <select name="duration" value={formData.duration} onChange={handleChange} required>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
          </div>
        </div>
        <h3>Total: Rs. {totalAmount}</h3>
        <button type="submit" className="get-started-btn">Confirm Membership</button>
      </form>
    </div>
  );
};

export default Signup;