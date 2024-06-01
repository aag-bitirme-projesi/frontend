import axios from 'axios';

const API_URL = 'http://localhost:8080/user/model'; // Api url
const MODEL_API_URL = 'http://localhost:2000/model';

const decodeToken = (token) => {
    if (!token) {
        return null;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

const getUsernameFromToken = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        return null;
    }
    const decodedToken = decodeToken(token);
    return decodedToken ? decodedToken.sub : null;
};

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
        console.log("bought: ", modelData);
        setModels(modelData);
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const myModels = async(setUpload) => {
    try {
        console.log("h1");
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/my-models`,  {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const modelData = response.data;
        console.log("my models: ", modelData);
        setUpload(modelData);
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const myDatasets = async(setData) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${MODEL_API_URL}/my-datasets`,   {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'application/json'
            },
            params: {
                username: getUsernameFromToken(token)
            }
        });

        const modelData = response.data;
        console.log("datasets: ", modelData);
        setData(modelData);
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const deleteDatasets = async(datasets) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.delete(`${MODEL_API_URL}/delete-datasets`, {
            'ids': datasets
        }, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'application/json'
            }
            });

        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const deleteMyModels = async(models) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.put(`${API_URL}/delete-ids`, models, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'application/json'
            }
            });

        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const allModels = async(setProducts) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${API_URL}/all`, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'application/json'
            }
            });

        const products = response.data;
        console.log(response);

        setProducts(products.map(product => ({
            id: product.id || '',
            name: product.name || '',
            description: product.description || '',
            date: product.createdAt || '',
            price: product.price || 0 // Ensure price is not null
        })));

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const uploadModel = async(payload) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.post(`${MODEL_API_URL}/upload-model`, payload, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin' : '*'
            }
            });
        
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

// const modelPhoto = async() => {
//     try {
//         const token = localStorage.getItem('jwtToken');
//         const response = await axios.post(`${MODEL_API_URL}/get-image`, payload, {
//             headers: {
//                 'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
//                 'Content-Type': 'multipart/form-data',
//                 'Access-Control-Allow-Origin' : '*'
//             }
//             });
        
//         console.log(response);
//         return response;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     } 
// };

const modelService = { decodeToken, getUsernameFromToken, boughtModels, myModels, myDatasets, 
    deleteDatasets, deleteMyModels, allModels, uploadModel };
export default modelService;