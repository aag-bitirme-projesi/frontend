import React, { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import modelService from '../../services/ModelService';

const Dataset = () => {

    const [selectedDataIds, setSelectedDataIds] = useState([]);
    const [data, setData] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [datasetName, setDatasetName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setSelectedFiles(files);
    };

    const handleNameChange = (e) => {
        setDatasetName(e.target.value);
    };

    const handleDeleteData = async () => {
        console.log('Deleting data IDs:', selectedDataIds);
        const updatedData = data.filter(dataset => !selectedDataIds.includes(dataset.id));

        const response = await modelService.deleteDatasets(selectedDataIds);
        console.log(response)

        setData(updatedData);
        setSelectedDataIds([]); 
    };

    const handleDataCheckboxChange = (dataId) => {
        setSelectedDataIds(prevIds => {
            if (prevIds.includes(dataId)) {
            return prevIds.filter(id => id !== dataId);
            } else {
            return [...prevIds, dataId];
            }
        });
    };

    const handleUpload = async () => {
        const formData = new FormData();
        const token = localStorage.getItem('jwtToken');
        const username = modelService.getUsernameFromToken(token);

        formData.append('username', username);
        formData.append('dataset_name', datasetName);

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }

        try {
            setIsLoading(true);
            const response = await modelService.uploadDataset(formData);

            console.log('Upload success:', response.data);
            fetchDatasets(); // Refresh the datasets list
        } catch (error) {
            console.error('Error uploading dataset:', error);
            // setData([]);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchDatasets = async () => {
        const token = localStorage.getItem('jwtToken');
        const username = modelService.getUsernameFromToken(token);

        try {
            const response = await modelService.myDatasets(username);
            setData(response);
        } catch (error) {
            console.error('Error fetching datasets:', error);
            setData([]);
        }
    };

    useEffect(() => {
        console.log("heloourrrrr: ", data);
        fetchDatasets();
    }, []);   


    useEffect(() => {
        console.log("is it: ", data);
    }, [data]);

    return (

    <div>
<div className="bg-white p-8 shadow-lg rounded-3xl w-9/12 ml-dashboard-table mt-16 flex justify-center items-center">
    <div className="bg-gray-100 rounded-3xl w-full max-w-2xl">
        <div className='border-b-2 text-2xl font-semibold text-black p-6'>
            <p>Dataset Upload</p>
        </div>
        <div className="grid w-full max-w-xs items-center gap-1.5 p-6">
            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4">File Input Area</label>
            <input id="picture" type="file" webkitdirectory="true" multiple onChange={handleFileChange} className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
        </div>
        <div className="grid w-full max-w-xs items-center gap-1.5 p-6">
            <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-4">Dataset Name</label>
            <input id="picture" type="text" value={datasetName} onChange={handleNameChange} className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
        </div>
        <div className="flex justify-center p-6">
            <button onClick={handleUpload} className="px-14 font-extrabold py-2 bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white rounded-xl">Add</button>
        </div>
    </div>
</div>


        <div className="bg-blue-950 rounded-3xl p-6 w-9/12 ml-dashboard-table mt-16">
          <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-white font-black text-2xl">My Datasets</h1>
                <div className="flex">
                    <button onClick={handleDeleteData} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 mr-6 rounded-lg">
                        Delete
                    </button>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-white">
                <thead className="text-xs text-white uppercase bg-gradient-to-r from-green-500 to-purple-500">
                    <tr>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">
                            Dataset Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            Upload Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((dataset, index) => (
                        <tr key={index} className='border-b-2 border-slate-500'>
                            <td className="px-6 py-4">
                            <input type="checkbox"
                                    id={`dataset-${dataset.id}`} // Changed for better HTML structure
                                    className="appearance-none h-4 w-4 border-2 border-side-gri rounded-md bg-transparent checked:bg-gradient-to-r from-green-500 to-purple-500 focus:outline-none focus:ring-0" 
                                    checked={selectedDataIds.includes(dataset.id)}
                                    onChange={() => handleDataCheckboxChange(dataset.id)}
                            />
                            </td>
                            <td className="px-6 py-4">
                            {dataset.dataset_name}
                            </td>
                            <td className="px-6 py-4 text-right">
                            {dataset.created_at}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-16 rounded-2xl shadow-lg">
              <RingLoader color="rgb(179, 0, 255)" size={75} speedMultiplier={1.5}/>
            </div>
          </div>
        )}
        </div>
    </div>    
    );
};

export default Dataset;
