import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS file

const BookingForm = () => {
    // State variables for form fields
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    // Stateful array for available times
    const [availableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ date, time, guests, occasion });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Select a time</option>
                {availableTimes.map((availableTime, index) => (
                    <option key={index} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
};

export default BookingForm;
