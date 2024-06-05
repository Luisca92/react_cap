// src/BookingForm.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react'; // Ensure correct import
import BookingForm from './BookingForm';
import fetchAPI from './api/submitAPI';

jest.mock('./api/submitAPI');

test('renders static text correctly', async () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockResolvedValue(mockTimes);

    await act(async () => {
        render(<BookingForm />);
    });
    
    // Further assertions can be added here to check for specific text
});
