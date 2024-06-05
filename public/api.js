const fetchAPI = (date) => {
    // Convert date string to Date object if necessary
    if (typeof date === 'string') {
        date = new Date(date);
    }

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }

    // Simulate fetching available times for the given date
    const availableTimes = [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    return new Promise((resolve) => {
        setTimeout(() => resolve(availableTimes), 1000);
    });
};

const submitAPI = (formData) => {
    // Simulate successful form submission
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
    });
};
