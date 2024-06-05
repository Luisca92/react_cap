// src/timesReducer.js
import fetchAPI from './api/submitAPI';

export const initializeTimes = async () => {
    const today = new Date().toISOString().split('T')[0];
    const availableTimes = await fetchAPI(today);
    return availableTimes;
};

export const updateTimes = async (date) => {
    const availableTimes = await fetchAPI(date);
    return availableTimes;
};
