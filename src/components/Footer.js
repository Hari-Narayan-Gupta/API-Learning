import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} API Learning Platform. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            {/* <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li> */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
