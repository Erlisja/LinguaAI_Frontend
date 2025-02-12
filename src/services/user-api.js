// user-api.js
// *** This file is the API for the user routes. ***
import axios from 'axios';

const LOCAL_URL = 'http://localhost:3030';
const API_URL = '/api/users';
const URL = LOCAL_URL + API_URL;

// function to register a new user
export const register = async (user) => {
    try {
        const response = await axios.post(`${URL}/register`, user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
export const login = async (credentials) => {
    try {
        const response = await fetch(URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const data = await response.json(); // Parse the JSON response

        if (!response.ok) {
            throw new Error(data.msg || 'Invalid credentials'); // Use backend error message if available
        }

        localStorage.setItem('token', data.token);
        return data.user; // Return user data
    } catch (error) {
        console.error("Login Request Error:", error);
        throw new Error(error.message || "Network error");
    }
};


// function to authenticate a user with Google
export const google = async () => {
    try {
        const response = await axios.get(`${URL}/auth/google`);
        if (response.data) {
            localStorage.setItem('token', response.data.token);
            return response.data.user;
        } else {
            throw new Error('Invalid Google authentication');
        }
    } catch (error) {
        return error.response.data;
    }
};

// function to login a guest user
export const guest = async () => {
    try {
        const response = await axios.get(`${URL}/guest`);
        if (response.data) {
            localStorage.setItem('token', response.data.token);
            return response.data.user;
        } else {
            throw new Error('Invalid guest authentication');
        }

    } catch (error) {
        return error.response.data;
    }
};

// function update a user credentials
export const update = async (user) => {
    try {
        // get the token from local storage to authenticate the user
       
        const response = await axios.put(`${URL}/update`, user, {
        
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            },
        });
        if (!response.data) {
            throw new Error('Invalid update');
        }
        const updatedUser = response.data;
        return updatedUser;
       
    } catch (error) {
        return error.response.data;
    }
};