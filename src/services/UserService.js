import axios from 'axios';

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

const profile = async(setFormData) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/profile`,  {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
        const userData = response.data;
        setFormData({
            name: userData.name || '',
            username: userData.username || '',
            email: userData.email || '',
            github: userData.github || '',
            cv: userData.cv || '',
            profilePhoto: userData.profilPhoto || ''
          });
        return response;
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