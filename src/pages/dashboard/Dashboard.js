import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import modelService from '../../services/ModelService';

const Dashboard = () => {

  const navigate = useNavigate();

  const [selectedModelIds, setSelectedModelIds] = useState([]);
  const [selectedUploadIds, setSelectedUploadIds] = useState([]);
  const [selectedDataIds, setSelectedDataIds] = useState([]);

  const [models, setModels] = useState([]);
  const [upload, setUpload] = useState([]);
  const [data, setData] = useState([]);

  /*const [models, setModels] = useState([
    { id: 1, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' },
    { id: 2, name: 'historical reporting module', description: 'You can upload x csvs to this data. It gives you x outputs. These outputs will be very useful to you.', date: '11.02.2024', price: '18 $' },
    { id: 3, name: 'classification module', description: 'It helps to classify the csvs you upload.', date: '13.02.2024', price: '30 $' },
    { id: 4, name: 'coloring module', description: 'It is used to color the cells in the csvs you upload.', date: '28.05.2024', price: '32 $' },
    { id: 5, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' }
  ]);

  const [upload, setUpload] = useState([
    { id: 1, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' },
    { id: 2, name: 'historical reporting module', description: 'You can upload x csvs to this data. It gives you x outputs. These outputs will be very useful to you.', date: '11.02.2024', price: '18 $' },
    { id: 3, name: 'classification module', description: 'It helps to classify the csvs you upload.', date: '13.02.2024', price: '30 $' },
    { id: 4, name: 'coloring module', description: 'It is used to color the cells in the csvs you upload.', date: '28.05.2024', price: '32 $' },
    { id: 5, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' }
  ]);

  const [data, setData] = useState([
    { id: 1, name: 'data analysis module', date: '01.12.2023' },
    { id: 2, name: 'historical reporting module', date: '11.02.2024' },
    { id: 3, name: 'classification module', date: '13.02.2024' },
    { id: 4, name: 'coloring module', date: '28.05.2024' },
    { id: 5, name: 'data analysis module', date: '01.12.2023' },
    { id: 6, name: 'historical reporting module', date: '11.02.2024' }
  ]); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        await modelService.boughtModels(setModels);
        await modelService.myModels(setUpload);
        await modelService.myDatasets(setData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // bought models için
  const handleCheckboxChange = (modelId) => {
    setSelectedModelIds(prevIds => {
      if (prevIds.includes(modelId)) {
        return prevIds.filter(id => id !== modelId);
      } else {
        return [...prevIds, modelId];
      }
    });
  };

  // benim yüklediklerim için
  const handleUploadCheckboxChange = (modelId) => {
    setSelectedUploadIds(prev => {
      if (prev.includes(modelId)) {
        return prev.filter(id => id !== modelId);
      } else {
        return [...prev, modelId];
      }
    });
  };
  
  // benim datasetlerim
  const handleDataCheckboxChange = (dataId) => {
    setSelectedDataIds(prevIds => {
      if (prevIds.includes(dataId)) {
        return prevIds.filter(id => id !== dataId);
      } else {
        return [...prevIds, dataId];
      }
    });
  };

  //TODO burada kaldın
  const handleDeleteUploads = () => {
    console.log('Deleting model IDs:', selectedUploadIds); 
    setUpload(currentUploads => currentUploads.filter(model => !selectedUploadIds.includes(model.id)));
    setSelectedUploadIds([]); 
  };
  
  const handleDeleteModel = () => {
    console.log('Deleting model IDs:', selectedModelIds);
    const updatedModels = models.filter(model => !selectedModelIds.includes(model.id));
    setModels(updatedModels);
    setSelectedModelIds([]);
  };

  const handleDeleteData = () => {
    console.log('Deleting data IDs:', selectedDataIds);
    const updatedData = data.filter(dataset => !selectedDataIds.includes(dataset.id));
    setData(updatedData);
    setSelectedDataIds([]); 
  };

  const toggleAvailability = (modelId) => {
    setModelAvailability(prev => ({
      ...prev,
      [modelId]: !prev[modelId]
    }));
  };

  const [modelAvailability, setModelAvailability] = useState(
    upload.reduce((acc, model) => {
      acc[model.id] = true; 
      return acc;
    }, {})
  );
  
  const setAvailabilityForSelected = (available) => {
    setModelAvailability(prevAvailability => {
      const newAvailability = { ...prevAvailability };
      selectedUploadIds.forEach(id => {
        if (newAvailability.hasOwnProperty(id)) {
          newAvailability[id] = available;
        }
      });
      return newAvailability;
    });
    setSelectedUploadIds([]); 
  };
  

  const handleViewDetails_sales = (modelId) => {
    navigate(`/details_sales/${modelId}`);
  };

  const handleViewDetails = (modelId) => {
    navigate(`/details/${modelId}`);
  };

  const handleBuyModel = () => {
    navigate(`/models`);
  };

  const handleAddDatasets = () => {
    navigate(`/datasets`);
  };
    
    return (
    <div>
        <div className="bg-blue-950 rounded-3xl p-6 w-9/12 ml-dashboard-table mt-32">
          <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-white font-black text-2xl">Bought Models</h1>
                <div className="flex">
                    <button onClick={handleDeleteModel} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 mr-6 rounded-lg">
                    Delete
                    </button>
                    <button onClick={handleBuyModel} className="bg-white hover:bg-gray-100 font-bold py-2 px-6 rounded-lg">
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500'>Buy Module</p>
                    </button>
                </div>
            </div>
            <table className="text-left w-full">
              <thead className=" bg-gradient-to-r from-green-500 to-purple-500 text-left shadow-xl w-full " >
                <tr>
                  <th>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    <p className=''>Model Name</p>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    <p className=''>Description</p>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <p className=''>Upload Date</p>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <p className=''>Price</p>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  <p className=''>View</p>
                  </th>
                </tr>
              </thead>
              <tbody>
              {models.map((model) => (
                <tr key={model.id} className="border-b-2 border-slate-500">
                  <td>
                      <input type="checkbox" className="appearance-none h-4 w-4 border-2 border-side-gri rounded-md bg-transparent checked:bg-gradient-to-r from-green-500 to-purple-500 focus:outline-none focus:ring-0" 
                        checked={selectedModelIds.includes(model.id)}
                        onChange={() => handleCheckboxChange(model.id)}
                      />
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-white">
                      {model.name}
                  </td>
                  <td className="px-6 py-2 w-128 text-sm text-white">
                      <div className="overflow-y-auto" style={{ maxHeight: '40px' }}>
                          {model.description}
                      </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap font-thin text-sm text-white">
                      {model.date}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap font-semibold text-sm text-white">
                      {model.price}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                   <button onClick={() => handleViewDetails_sales(model.id)} className="p-3 -ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                   </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
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
                    <button onClick={handleAddDatasets} className="bg-white hover:bg-gray-100 font-bold py-2 px-4 rounded-lg">
                        <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500'>Add Datasets</p>
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
                            Model Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-right">
                            Upload Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map((dataset, index) => (
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
                      {dataset.name}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {dataset.date}
                    </td>
                  </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>

        <div className="bg-blue-950 rounded-3xl p-6 w-9/12 ml-dashboard-table mt-16 mb-16">
          <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-white font-black text-2xl">Uploaded Models</h1>
                <div className="flex">
                    <button onClick={() => setAvailabilityForSelected(true)} className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 mr-6 rounded-lg">
                        Available
                    </button>
                    <button onClick={() => setAvailabilityForSelected(false)} className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-5 mr-6 rounded-lg">
                        Unavailable
                    </button>
                    <button onClick={handleDeleteUploads} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 mr-6 rounded-lg">
                        Delete
                    </button>
                    <button onClick={handleBuyModel} className="bg-white hover:bg-gray-100 font-bold py-2 px-5 rounded-lg">
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500'>Add Model</p>
                    </button>
                </div>
            </div>
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-500 to-purple-500 shadow-xl w-full">
                <tr>
                  <th></th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Model Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Upload Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Availability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Edit</th>
                </tr>
              </thead>
              <tbody className='w-full text-left'>
                {upload.map(model => (
                  <tr key={model.id} className="border-b-2 border-slate-500">
                    <td>
                      <input type="checkbox" id={`upload-model-${model.id}`} className="appearance-none h-4 w-4 border-2 border-side-gri rounded-md bg-transparent checked:bg-gradient-to-r from-green-500 to-purple-500 focus:outline-none focus:ring-0" 
                      checked={selectedUploadIds.includes(model.id)}
                      onChange={() => handleUploadCheckboxChange(model.id)}
                      />
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-white">{model.name}</td>
                    <td className="px-6 py-2 w-128 text-sm text-white">
                      <div className="overflow-y-auto" style={{ maxHeight: '40px' }}>{model.description}</div>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap font-thin text-sm text-white">{model.date}</td>
                    <td className="px-6 py-2 whitespace-nowrap font-semibold text-sm text-white">
                      <button onClick={() => toggleAvailability(model.id)} className="p-3">
                        {modelAvailability[model.id] ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap font-semibold text-sm text-white">{model.price}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleViewDetails(model.id)} className="p-3 -ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
        
      );
    };
    
export default Dashboard;
