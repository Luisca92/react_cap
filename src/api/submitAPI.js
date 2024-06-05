// src/api/submitAPI.js

const submitAPI = async (formData) => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true); // Change to false to simulate failure
        }, 1000);
    });
};

export default submitAPI;
