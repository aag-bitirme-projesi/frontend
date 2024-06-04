import axios from 'axios';
import modelService from './ModelService';

const API_URL = 'http://localhost:8080/user/user'; // Api url

const forgot_password = async(email) => {  
    try {
        const response = await axios.post(`${API_URL}/forget-password`, email, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const resetPassword = async(newPassword, token) => {
  try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, newPassword, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return response;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

const profile = async() => {
    try {
        console.log("i p1");
        const token = localStorage.getItem('jwtToken');
        const email = modelService.getEmailFromToken(token);

        const response = await axios.get(`${API_URL}/get-user/${email}`,  {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

        console.log(response.data);
        
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      } 
};

const updateUser = async(payload) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post(`${API_URL}/update-user`, payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
};

const deleteAccount = async() => {  //TODO bunu tamamla
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.delete(`${API_URL}/delete-account`,  {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      localStorage.removeItem('jwtToken');
  } catch (error) {
    console.log(error);
    throw error;
  } 
};

const userService = { forgot_password, profile, updateUser, deleteAccount, resetPassword };
export default userService;