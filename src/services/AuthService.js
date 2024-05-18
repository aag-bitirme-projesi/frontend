import axios from 'axios';

const API_URL = 'api isteği yolu'; // Api url

const signin = async (email, password) => {
  try {
    const response = await axios.post(API_URL + '/signin', {
      email,
      password
    });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};


const API_BASE_URL = 'api yolu girilecek'; // API url

const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data; 
  } catch (error) {
    throw error;
  }
};

const authService = { signin, signup };
export default authService;
