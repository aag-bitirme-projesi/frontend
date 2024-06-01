import axios from 'axios';

const API_URL = 'http://localhost:8080/user/auth'; // Api url

const signin = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.data.token) {
      localStorage.setItem('jwtToken', response.data.token);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.token) {
      localStorage.setItem('jwtToken', response.data.token);
    }

    console.log('Signup successful:', response.data);
    return response.data; 
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('jwtToken');
};

const authService = { signin, signup, logout };
export default authService;
