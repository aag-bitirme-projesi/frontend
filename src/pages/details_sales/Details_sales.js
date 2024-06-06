import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import AI from "../../assets/pics/ai.png";

const Details_sales = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const models = [
        { id: 1, name: 'Data Analysis Module', description: 'Processes and graphs data.', date: '01.12.2023', price: '6 $' },
        { id: 2, name: 'Historical Reporting Module', description: 'You can upload x CSVs to this data. It gives you x outputs. These outputs will be very useful to you.', date: '11.02.2024', price: '18 $' },
        { id: 3, name: 'Classification Module', description: 'It helps to classify the CSVs you upload.', date: '13.02.2024', price: '30 $' },
        { id: 4, name: 'Coloring Module', description: 'It is used to color the cells in the CSVs you upload.', date: '28.05.2024', price: '32 $' },
        { id: 5, name: 'Data Analysis Module', description: 'Processes and graphs data.', date: '01.12.2023', price: '6 $' }
    ];

    const [modelDetails, setModelDetails] = useState({ name: '', description: '', price: '', date: '' });

    useEffect(() => {
        const model = models.find(m => m.id.toString() === id);
        if (model) {
            setModelDetails(model);
        } else {
            console.error('Model not found');
            navigate("/models");
        }
    }, [id, navigate]);

    const handleBack = () => {
        navigate("/landingPage");
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
                        <input readOnly className="shadow-lg appearance-none border rounded-xl w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none" id="name" type="text" value={modelDetails.name} />
                    </div>
                    <div className="w-full mt-6">
                        <span className="block text-black text-lg font-bold">Price:</span>
                        <input readOnly className="shadow-lg appearance-none border rounded-xl w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none mt-2" value={modelDetails.price} />
                    </div>
                    <div className="w-full mt-6">
                        <span className="block text-black text-lg font-bold">Release Date:</span>
                        <input readOnly className="shadow-lg appearance-none border rounded-xl w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none mt-2" value={modelDetails.date} />
                    </div>
                </div>
                <div className="w-2/3 items-center mt-4 ml-12">
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2">Description</label>
                        <textarea readOnly className="shadow-lg appearance-none border rounded-xl w-full h-28 mb-6 p-2 text-slate-600 leading-tight focus:outline-none" value={modelDetails.description}></textarea>
                    </div>
                </div>
            </div>

            <div className="flex w-full mt-6">
                <div className="w-1/2">
                    <img src={AI} className="rounded-2xl shadow-lg" alt="Artificial Intelligence" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            <div className="text-right mt-8">
                <button onClick={handleBack} className="px-11 py-2 bg-black shadow-lg text-white rounded-xl font-bold">Back</button>
            </div>
        </div>
    );
};

export default Details_sales;
