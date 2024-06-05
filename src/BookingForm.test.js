// src/BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import BookingForm from './BookingForm';
import { fetchAPI } from './api/submitAPI';

jest.mock('./api/submitAPI', () => ({
    fetchAPI: jest.fn(),
    submitAPI: jest.fn(),
}));

test('renders static text correctly', async () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockResolvedValue(mockTimes);

    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });

    // Further assertions can be added here to check for specific text
});

test('renders BookingForm with HTML5 validation attributes', async () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockResolvedValue(mockTimes);

    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // Check HTML5 validation attributes
    expect(dateInput).toBeRequired();
    expect(timeSelect).toBeRequired();
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(occasionSelect).toBeRequired();
});

test('validates form input fields', async () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockResolvedValue(mockTimes);

    await act(async () => {
        render(<BookingForm submitForm={() => {}} />);
    });

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    // Initial form state
    expect(submitButton).toBeDisabled();

    // Fill out the form
    await act(async () => {
        fireEvent.change(dateInput, { target: { value: '2024-06-05' } });
        fireEvent.change(timeSelect, { target: { value: '18:00' } });
        fireEvent.change(guestsInput, { target: { value: '2' } });
        fireEvent.change(occasionSelect, { target: { value: 'birthday' } });
    });

    // Check form state after filling out
    expect(submitButton).not.toBeDisabled();

    // Test invalid state by setting guests to an invalid value
    await act(async () => {
        fireEvent.change(guestsInput, { target: { value: '0' } });
    });
    expect(submitButton).toBeDisabled();

    await act(async () => {
        fireEvent.change(guestsInput, { target: { value: '11' } });
    });
    expect(submitButton).toBeDisabled();

    await act(async () => {
        fireEvent.change(guestsInput, { target: { value: '2' } });
    });
    expect(submitButton).not.toBeDisabled();
});
