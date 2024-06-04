import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import AI from "../../assets/pics/ai.png";

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();


    const models = [
        { id: 1, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' },
        { id: 2, name: 'historical reporting module', description: 'You can upload x csvs to this data. It gives you x outputs. These outputs will be very useful to you.', date: '11.02.2024', price: '18 $' },
        { id: 3, name: 'classification module', description: 'It helps to classify the csvs you upload.', date: '13.02.2024', price: '30 $' },
        { id: 4, name: 'coloring module', description: 'It is used to color the cells in the csvs you upload.', date: '28.05.2024', price: '32 $' },
        { id: 5, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' }
    ];

    const [modelDetails, setModelDetails] = useState({ name: '', description: '', price: '' });
    const [files, setFiles] = useState([]);  
    const [images, setImages] = useState([]);

    useEffect(() => {
        const model = models.find(m => m.id.toString() === id); // URL'deki id'ye göre modeli buluyoruz
        if (model) {
            setModelDetails(model);
        } else {
            console.error('Model not found');
            navigate("/models"); // Model bulunamazsa ana listeye yönlendir
        }
    }, [id, navigate]);

    const handleCancel = () => {
        navigate(-1);
    };

    const handleSave = () => {
        //güncelleme işlemlerini yapabilirsiniz
        console.log('Save functionality to be implemented');
        navigate("/models");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setModelDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="bg-white p-8 shadow-lg rounded-3xl w-9/12 ml-dashboard-table mt-32 mb-16">
            <div className="border-b-2 pb-4 mb-4 text-2xl font-semibold text-black">
                <p>Model Details</p>
            </div>

            <div className="flex w-full">
                <div className="w-1/3 items-center mt-4">
                    
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2" htmlFor="name">Project Name</label>
                        <input className="shadow-lg appearance-none border rounded-xl w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Project Name . . ." name="name" value={modelDetails.name} onChange={handleChange} />
                    </div>
                    <div className="w-full mt-6 flex items-center">
                        <span className="block text-black text-lg font-bold">Price:</span>
                        <input type="text" placeholder="Price . . ." className="shadow-lg appearance-none border rounded-xl w-full mr-16 ml-10 p-2 text-slate-600 leading-tight focus:outline-none focus:shadow-outline" name="price" value={modelDetails.price} onChange={handleChange} />
                        <span className="mr-16 font-thin">/sell</span>
                    </div>
                </div>
                <div className="w-2/3 items-center mt-4 ml-12">
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2">Description</label>
                        <textarea name="description" placeholder="Enter description . . ." className="shadow-lg appearance-none border rounded-xl w-full h-28 mb-6 p-2 text-slate-600 leading-tight focus:outline-none focus:shadow-outline" value={modelDetails.description} onChange={handleChange}></textarea>
                    </div>
                </div>
            </div>

            <div className="flex w-full">
                <div className="w-1/2">
                    <div className="p-8">
                        <h2 className="text-lg font-semibold mb-4 border-b-2">Files</h2>
                        <ul>
                            {files.map(file => (
                                <li key={file.id} className="flex justify-between items-center py-2 border-b">
                                    <span>{file.name}</span>
                                    <button className="bg-red-600 text-white font-semibold px-4 py-1 rounded-lg hover:bg-red-700">delete</button>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-lg font-semibold mt-8 mb-4 border-b-2">Images</h2>
                        <ul>
                            {images.map(image => (
                                <li key={image.id} className="flex justify-between items-center py-2 border-b">
                                    <span>{image.name}</span>
                                    <button className="bg-red-600 text-white font-semibold px-4 py-1 rounded-lg hover:bg-red-700">delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 mt-4 mb-8 ml-12">
                    <img src={AI} style={{ width: '600px', height: '400px' }} className="rounded-2xl" alt="Artificial Intelligence" />
                </div>
            </div>
            
            <div className="text-right">
                <button onClick={handleCancel} className="px-11 py-2 mr-10 bg-black shadow-lg text-white rounded-xl font-bold">Cancel</button>
                <button onClick={handleSave} className="px-12 py-2 shadow-lg bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white rounded-xl font-bold">Save</button>
            </div>
        </div>    
    );
};

export default Details;
