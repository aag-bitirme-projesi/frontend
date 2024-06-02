import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PP from "../../assets/pics/profilphoto.png";
import modelService from '../../services/ModelService';
import orderService from "../../services/OrderService";

const Model = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [newModel, setNewModel] = useState({
        name: '',
        dockerImage: '',
        price: '',
        description: '',
        username: modelService.getUsernameFromToken() // Assuming username is available in some context
      });

    const [files, setFiles] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewModel(prevNewModel => ({ ...prevNewModel, [name]: value }));
    };
    
    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = new FormData();
        
        for (const key in newModel) {
          payload.append(key, newModel[key]);
        }
    
        for (let i = 0; i < files.length; i++) {
          payload.append('files', files[i]);
        }
    
        try {
          const response = await modelService.uploadModel(payload);
          console.log('Model uploaded successfully:', response.data);
        } catch (error) {
          console.error('Error uploading model:', error);
        }
      };

    useEffect(() => {  //TODO modellerin fotolarının da çekilmesi lazım
        const fetchData = async () => {
            try {
                await modelService.allModels(setProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleViewDetails_sales = (modelId) => {
        navigate(`/details_sales/${modelId}`);
    };

    const handleAddToCart = async(modelId) => {
        try {
            const response = await orderService.addToCart(modelId);
            console.log('Added to cart:', response.data);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (

    <div>
<div className="bg-white p-8 shadow-lg rounded-3xl w-9/12 ml-dashboard-table mt-16 flex justify-center items-center">
<div className="bg-gray-100 rounded-3xl p-6 w-9/12">
        <div className="border-b-2 pb-4 mb-4 text-2xl font-semibold text-black">
            <p>Model Upload</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <div className="flex-1 mr-4 mt-12">
                    <div className="grid w-full max-w-xs items-center gap-1.5">
                        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-20">Upload Model Photo</label>
                        <input id="picture" type="file" multiple className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" onChange={handleFileChange}/>
                    </div>
                </div>

                <div className="flex-1 mr-4 mt-12">
                    <div className="grid w-full max-w-xs items-center gap-1.5">
                        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-20">Upload Docker Image</label>
                        <input id="dockerImage" name="dockerImage" type="text" className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" value={newModel.dockerImage} onChange={handleChange} />
                    </div>
                </div>
            </div>
            
            <div className="flex w-full">
                <div className="w-1/3 items-center mt-4">
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2" htmlFor="name">Project Name</label>
                        <input name="name" className="shadow-lg appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Project Name . . ." value={newModel.name} onChange={handleChange}/>
                    </div>
                    <div className="w-full mt-6 flex items-center">
                        <span className="block text-black text-lg font-bold">Price:</span>
                        <input type="number" name="price" placeholder="Price . . ." className="shadow-lg appearance-none border rounded-xl w-full mr-16 ml-10 p-2 text-afafaf leading-tight focus:outline-none focus:shadow-outline" value={newModel.price} onChange={handleChange}/>
                        
                    </div>
                </div>
                <div className="w-2/3  items-center mt-4 ml-12">
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2">Description</label>
                        <textarea name="description" placeholder="Enter description . . ." className="shadow-lg appearance-none border rounded-xl w-full h-28 mb-6 p-2 text-afafaf leading-tight focus:outline-none focus:shadow-outline" value={newModel.description} onChange={handleChange}></textarea>
                    </div>
                </div>
            </div>
            
            <div className="text-right">
                <button className=" px-12 py-2 bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white rounded-xl font-bold" type="submit">Save</button>
            </div>
        </form>
    </div>
</div>


    
        
    </div>    
    );
};

export default Model;

