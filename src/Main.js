import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ReservationsPage from './ReservationsPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { submitAPI } from './api/submitAPI'; // Ensure correct import
/* global submitAPI */
/* eslint-enable no-unused-vars */

export default function Main() {

    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const success = await submitAPI(formData); // Ensure this line is present
        if (success) {
            navigate('/confirmed'); // Corrected route path
        } else {
            console.log('Booking failed');
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/order-online" element={<OrderOnlinePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/booking" element={<BookingPage submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}
