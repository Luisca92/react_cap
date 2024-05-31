// src/components/BookingForm.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the additional matchers
import BookingForm from './BookingForm';

test('renders static text correctly', () => {
    render(<BookingForm />);
    
    // Check for the presence of static texts
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Make Your reservation/i)).toBeInTheDocument();
});
