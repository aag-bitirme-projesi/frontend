import axios from 'axios';

const API_URL = 'http://localhost:8080/user/order'; // Api url

const shoppingCart = async(setOrderItems) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/get-cart`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        // console.log("in shopping cart: ", response.data);
        const orderData = response.data;
        setOrderItems(orderData);

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const addToCart = async(modelId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.put(`${API_URL}/add-to-cart`, modelId, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const removeFromCart = async(modelId) => {
  try {
    const token = localStorage.getItem('jwtToken');
    const response = await axios.delete(`${API_URL}/remove-from-cart/${modelId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      } 
    });

    return response;
  } catch (error) {
      console.log(error);
      throw error;
  }
};

const pay = async(paymentDetails) => {
  try {

    console.log('Payment details:', paymentDetails);

    const token = localStorage.getItem('jwtToken');
    const response = await axios.post(`${API_URL}/pay`, paymentDetails, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error during payment:', error);
    throw error;
  }
};

const orderService = { shoppingCart, addToCart, removeFromCart, pay };
export default orderService;