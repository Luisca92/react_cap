import React from 'react';
import './Footer.css'; // Ensure you create this CSS file for styling
import footerImage from './icons_assets/footerlogo.png'; // Replace with the actual path to your footer image
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media icons
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image-container">
          <img src={footerImage} alt="Footer" className="footer-image" />
        </div>
        <div className="footer-nav-container">
          <nav>
            <ul className="footer-nav">
            <li><Link to="/HomePage">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/booking">Book a Table</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-contact-container">
          <address>
            <p>123 Main St, Chicago, IL 60601</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@littlelemon.com</p>
          </address>
        </div>
        <div className="footer-social-container">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
