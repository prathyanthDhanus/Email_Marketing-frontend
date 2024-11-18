import axios from 'axios';

// Create an axios instance for  API requests
const Axios = axios.create({
  baseURL: 'https://email-marketing-backend-vok0.onrender.com', 
  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json', 
  },
});


// Request Interceptor
Axios.interceptors.request.use(
  (config) => {
    // If you need to add a token to headers, you can do it here
    // For example, if using JWT stored in localStorage:
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;  // Return the config object to proceed with the request
  },
  (error) => {
    // Handle any errors in the request before sending
    console.error("Request Error: ", error);
    return Promise.reject(error); // Reject the promise to propagate the error
  }
);

// Response Interceptor
Axios.interceptors.response.use(
  (response) => {
    // You can manipulate or log the response here if needed
    return response;  // Return the response if no errors
  },
  (error) => {
    // Handle any errors that happen during the response (like 404, 500, etc.)
    console.error("Response Error: ", error.response || error.message);
    
    // You can handle different HTTP status codes and show error messages
    // For example, for unauthorized error (401), you could prompt the user to log in again
    
    return Promise.reject(error); // Reject the promise to propagate the error
  }
);

export default Axios;
