import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes }) => {
    return (
        <div className="booking-container">
            <h1>Book a Table</h1>
            <BookingForm availableTimes={availableTimes} />
        </div>
    );
};

export default BookingPage;
