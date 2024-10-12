import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">LearningBeta</h1> 
        <h1 className="navbar-title">API Learning Platform</h1>
      </div>
    </nav>
  );
};

export default Navbar;
