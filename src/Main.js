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
import submitAPI from './api/submitAPI'; // Ensure this path is correct

/* global submitAPI */

export default function Main() {
    console.log('Main component rendered'); // Basic log to check if Main is rendered

    const navigate = useNavigate();
    console.log('useNavigate:', navigate); // Debugging log to check if useNavigate is defined

    const submitForm = async (formData) => {
        console.log('submitForm called with formData:', formData); // Add this log
        const success = await submitAPI(formData); // Ensure this line is present
        if (success) {
            navigate('/confirmed'); // Corrected route path
        } else {
            console.log('Booking failed');
        }
    };

    console.log('Main rendered with submitForm:', submitForm);

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
