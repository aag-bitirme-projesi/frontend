import axios from 'axios';

const API_URL = 'http://localhost:8080/user/order'; // Api url

const shoppingCart = async() => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/get-cart`, {
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

const getModelPhoto = async() => {

};

const pay = async() => {

};

const orderService = { shoppingCart, getModelPhoto, pay };
export default orderService;