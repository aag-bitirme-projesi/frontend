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

const getEmailFromToken = () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        return null;
    }
    const decodedToken = decodeToken(token);
    return decodedToken ? decodedToken.email : null;
}

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
        // console.log("bought: ", modelData);
        setModels(modelData);
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
        // console.log("my models: ", modelData);
        setUpload(modelData);
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const myDatasets = async(username) => {
    try {
        console.log("tryna get datasets: ");
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${MODEL_API_URL}/my-datasets`,   {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'application/json'
            },
            params: {
                username: username
            }
        });
        console.log("actual response: ", response);
        console.log("got datasets: ", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const uploadDataset = async(datasetDto) => {   //TODO
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.post(`${MODEL_API_URL}/upload-dataset`, datasetDto,  {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log("Dataset uploaded: ", response.data);
        return response.data;
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

const allModels = async() => {
    try {
        
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${MODEL_API_URL}/all`, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;;
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
                'Content-Type': 'multipart/form-data'
            }
            });
        
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const modelPhoto = async(modelInfo) => {
    try {
        console.log("foto username: ", modelInfo['username']);
        console.log("foto name: ", modelInfo['name']);
        const token = localStorage.getItem('jwtToken');
        const params = new URLSearchParams(modelInfo).toString(); // Convert modelInfo to query string

        const response = await axios.get(`${MODEL_API_URL}/get-image?${params}`, params, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'multipart/form-data'
            }
        });
        
        console.log("from s3: ", response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const openContainer = async(payload) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.post(`${MODEL_API_URL}/open-container`, payload, {
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

const closeContainer = async(payload) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.post(`${MODEL_API_URL}/close-container`, payload, {
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

const getDataset = async(payload) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.post(`${MODEL_API_URL}/get-dataset`, payload, {
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




const getModel = async(modelId) => {
    try {
        const token = localStorage.getItem('jwtToken');
        const response = await axios.get(`${MODEL_API_URL}/by-id${modelId}`, {
            headers: {
                'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;;
    } catch (error) {
        console.log(error);
        throw error;
    } 
};

const modelService = { decodeToken, getUsernameFromToken, getEmailFromToken, boughtModels, 
    myModels, myDatasets, deleteDatasets, deleteMyModels, allModels, uploadModel, 
    modelPhoto, uploadDataset, openContainer, closeContainer, getModel };
export default modelService;