// src/components/timesReducer.test.js
import { initializeTimes, updateTimes } from './timesReducer';

test('initializeTimes returns correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
});

test('updateTimes returns the same state provided in the action', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'some_action_type', payload: null };
    const updatedState = updateTimes(initialState, action);
    expect(updatedState).toEqual(initialState);
});
