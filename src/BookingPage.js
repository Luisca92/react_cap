// src/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ submitForm }) => {
    return (
        <div>
            <BookingForm submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;
