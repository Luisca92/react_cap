// src/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ submitForm }) => {
    console.log('BookingPage rendered with submitForm:', submitForm); // Debugging log to check if submitForm is received

    return (
        <div>
            <BookingForm submitForm={submitForm} />
        </div>
    );
};

export default BookingPage;
