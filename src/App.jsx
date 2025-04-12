import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Membership from './components/Membership/Membership';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import CalorieCalculator from './components/pages/CalorieCalculator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Services />
          <Home />
          <Membership />
          <Testimonials />
          <ContactUs />
          <Footer />
        </>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/caloriecalculator" element={<CalorieCalculator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
