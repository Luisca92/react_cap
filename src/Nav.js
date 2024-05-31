import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/booking">Book a Table</Link></li>
      </ul>
    </nav>
  );
}
