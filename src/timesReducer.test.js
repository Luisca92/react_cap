// src/components/timesReducer.test.js
import { initializeTimes, updateTimes } from './timesReducer';
import fetchAPI from './api/submitAPI';

jest.mock('./api/submitAPI');

test('initializeTimes returns correct initial times from fetchAPI', async () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockResolvedValue(mockTimes);

    const times = await initializeTimes();
    expect(times).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalled();
});

test('updateTimes returns updated times from fetchAPI for a given date', async () => {
    const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const selectedDate = '2024-06-10';
    fetchAPI.mockResolvedValue(mockTimes);

    const times = await updateTimes(selectedDate);
    expect(times).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
});
