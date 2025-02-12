import * as usersAPI from './user-api.js';

export async function register(credentials) {
    const token = await usersAPI.register(credentials);
    localStorage.setItem('token', token);
    return getUser();
}
// this function will return the user object from the token
export async function login(credentials) {
    // call the logInUser function from the users-api file
    // this will make a POST request to the API to log in the user
    const response = await usersAPI.login(credentials);
    console.log('Full response:', response);
    const token = response.token;  // Extract the token
    if (token) {
        localStorage.setItem('token', token);  // Save the token if available
    } else {
        console.error('Token is missing in the response');
    }

    console.log('Token in localStorage:', localStorage.getItem('token'));
    console.log('Login Token:', token);
    // console.log('User:', response.user);
    return getUser();  // Get user info after login
}




export async function google() {
    const token = await usersAPI.google();
    localStorage.setItem('token', token);
    return getUser();
}


export const getToken = () => {
    let token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found in localStorage.");
        return null;
    }

    try {
        console.log("Raw Token:", token);

        const base64Url = token.split(".")[1]; // Extract payload
        if (!base64Url) throw new Error("Token format incorrect");

        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const decodedData = JSON.parse(atob(base64));

        console.log("Decoded Token Payload:", decodedData);
        return decodedData;
    } catch (error) {
        console.error("Error decoding the token:", error);
        return null;
    }
};



// the getUser function is used to get the user data from the token stored in local storage
export function getUser() {
    const tokenData = getToken(); // Already decoded in getToken()
    return tokenData ? tokenData.user : null;
}





// the function to logout the user
export function logout() {
    localStorage.removeItem('token');
}


export default { register, login, google, getUser, logout };
