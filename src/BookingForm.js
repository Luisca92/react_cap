import React, { useState, useEffect } from 'react';
import './BookingForm.css';
import { fetchAPI } from './api/submitAPI'; // Ensure correct import

const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const availableTimes = await fetchAPI(today);
    return availableTimes;
};

const updateTimes = async (date) => {
    const availableTimes = await fetchAPI(date);
    return availableTimes;
};

const BookingForm = ({ submitForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const fetchInitialTimes = async () => {
            const times = await initializeTimes();
            setAvailableTimes(times);
        };
        fetchInitialTimes();
    }, []);

    useEffect(() => {
        if (date) {
            const fetchAvailableTimes = async () => {
                const times = await updateTimes(date);
                setAvailableTimes(times);
            };
            fetchAvailableTimes();
        }
    }, [date]);

    useEffect(() => {
        // Check if all form fields are valid
        if (date && time && guests >= 1 && guests <= 10 && occasion) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [date, time, guests, occasion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    return (
        <div>
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

                <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
            </form>
        </div>
    );
};

export default BookingForm;
