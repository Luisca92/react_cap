import React from 'react';
import logo from './icons_assets/Logo.svg'; // Adjust the path as necessary
import './App.css';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}
