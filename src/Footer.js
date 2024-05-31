import React from 'react';
import './Footer.css'; // Ensure you create this CSS file for styling
import footerImage from './icons_assets/footerlogo.png'; // Replace with the actual path to your footer image
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media icons

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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Order Online</a></li>
              <li><a href="#login">Login</a></li>
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
