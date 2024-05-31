import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ReservationsPage from './ReservationsPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import BookingPage from './BookingPage'; // Import BookingPage

export default function Main() {
  // Stateful array for available times
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} />} /> {/* Pass availableTimes */}
      </Routes>
    </main>
  );
}
