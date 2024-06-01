import axios from 'axios';

const API_URL = 'http://localhost:8080/user/model'; // Api url
const MODEL_API_URL = 'http://localhost:2000/model';

const boughtModels = async(setModels) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/bought-models`,  {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
            });

        const modelData = response.data;
        setModels({
            id: modelData.id || '',
            name: modelData.name || '',
            description: modelData.description || '',
            date: modelData.createdAt || '',
            price: modelData.price || ''
        });
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const myModels = async(setUpload) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/my-models`,  {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
            });

        const modelData = response.data;
        setUpload({
            id: modelData.id || '',
            name: modelData.name || '',
            description: modelData.description || '',
            availability: modelData.availability || '',
            date: modelData.createdAt || '',
            price: modelData.price || ''
        });
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const myDatasets = async(setData) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${MODEL_API_URL}/my-datasets`,  {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'application/json'
            }
            });

        const modelData = response.data;
        setData({
            name: modelData.name || '',
            date: modelData.createdAt || ''
        });
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const modelService = { boughtModels, myModels, myDatasets };
export default modelService;