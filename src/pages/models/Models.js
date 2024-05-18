import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PP from "../../assets/pics/profilphoto.png"

const Model = () => {

    const navigate = useNavigate();

    const [selectedModelIds, setSelectedModelIds] = useState([]);

    const [files] = useState([
        { name: "asjkdsafbjkdsanfjksdanfjkdanjkadnad.zip", size: "950 Mb", progress: 100, status: "completed" },
        { name: "learning.py", size: "1.2 Gb", progress: 35, status: "error" },
        { name: "asasd.png", size: "950 Mb", progress: 100, status: "completed" }
    ]);

    const [models, setModels] = useState([
        { id: 1, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' },
        { id: 2, name: 'historical reporting module', description: 'You can upload x csvs to this data. It gives you x outputs. These outputs will be very useful to you.', date: '11.02.2024', price: '18 $' },
        { id: 3, name: 'classification module', description: 'It helps to classify the csvs you upload.', date: '13.02.2024', price: '30 $' },
        { id: 4, name: 'coloring module', description: 'It is used to color the cells in the csvs you upload.', date: '28.05.2024', price: '32 $' },
        { id: 5, name: 'data analysis module', description: 'processes and graphs data', date: '01.12.2023', price: '6 $' }
    ]);


    const products = [
        { id: 1, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "../../assets/pics/illustration.png" },
        { id: 2, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 3, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 4, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 5, title: "Casfsafasfomponent Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 6, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 7, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 8, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 9, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 10, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 11, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 12, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 13, title: "as Model", description: "The hardware selection and 3D models of and 3D models of and 3D models of and 3D models of and 3D models of", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 14, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 15, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 16, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 17, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 18, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 19, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
        { id: 20, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
    ];



    const handleCheckboxChange = (modelId) => {
        setSelectedModelIds(prevIds => {
          if (prevIds.includes(modelId)) {
            return prevIds.filter(id => id !== modelId);
          } else {
            return [...prevIds, modelId];
          }
        });
      };

      const handleDeleteModel = () => {
        console.log('Deleting model IDs:', selectedModelIds);
        const updatedModels = models.filter(model => !selectedModelIds.includes(model.id));
        setModels(updatedModels);
        setSelectedModelIds([]);
      };

      const handleViewDetails = (modelId) => {
        navigate(`/details/${modelId}`);
    };

    const handleViewDetails_sales = (modelId) => {
        navigate(`/details_sales/${modelId}`);
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
                   <button onClick={() => handleViewDetails(model.id)} className="p-3 -ml-2">
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
        

        <div className="bg-white p-8 shadow-lg rounded-3xl w-9/12 ml-dashboard-table mt-16">
            <div className="border-b-2 pb-4 mb-4 text-2xl font-semibold text-black">
                <p>Model Upload</p>
            </div>

            <div className="flex">
                <div className="flex-1 mr-4 mt-12">
                    <div class="grid w-full max-w-xs items-center gap-1.5">
                        <label class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-20">File Input Area</label>
                        <input id="picture" type="file" class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
                    </div>
                </div>
                <div className="flex-1">
                    {files.map((file, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                            <div className="flex flex-col p-4 rounded-xl border-2 border-ebebeb shadow-xl">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold truncate">{file.name}</span>
                                    <span className="text-sm text-gray-500">{file.size}</span>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full ${file.status === "completed" ? "bg-green-500" : "bg-red-500"}`} style={{ width: `${file.progress}%` }}></div>
                                    </div>
                                    <div className="flex items-center ml-2">
                                        <span className="text-sm font-semibold">{file.progress}%</span>
                                        <span className={`ml-2 ${file.status === "completed" ? "text-green-500" : "text-red-500"}`}>
                                            {file.status === "completed" ? "✔" : "✖"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex w-full">
                <div className="w-1/3 items-center mt-4">
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2" htmlFor="name">Project Name</label>
                        <input className="shadow-lg appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Project Name . . ." name="name" />
                    </div>
                    <div className="w-full mt-6 flex items-center">
                        <span className="block text-black text-lg font-bold">Price:</span>
                        <input type="number" placeholder="Price . . ." className="shadow-lg appearance-none border rounded-xl w-full mr-16 ml-10 p-2 text-afafaf leading-tight focus:outline-none focus:shadow-outline"/>
                        <span className="mr-16 font-thin">/sell</span>
                    </div>
                </div>
                <div className="w-2/3  items-center mt-4 ml-12">
                    <div className="w-full mt-8">
                        <label className="block text-black text-lg font-bold mb-2">Description</label>
                        <textarea name="message" placeholder="Enter description . . ." className="shadow-lg appearance-none border rounded-xl w-full h-28 mb-6 p-2 text-afafaf leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                </div>
            </div>
            
            <div className="text-right">
                <button className=" px-12 py-2 bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white rounded-xl font-bold">Save</button>
            </div>
        </div>

        
        <div className="bg-blue-950 rounded-3xl p-6 w-9/12 ml-dashboard-table mt-16">
            <div className="flex text-3xl text-white font-bold ml-4 ">
                <p>
                    Model 
                </p>
                <p className="ml-2 text-red-700 font-black">
                     FOR SALE
                </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-6 ">
                <div className="grid grid-cols-5 gap-4 ">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-2xl p-4 flex flex-col">
                            {/* <img className="rounded-t-lg mb-4" src={product.image} alt="product" /> */}
                            <img className="rounded-lg mb-4" src={PP} alt="product" />
                            <h5 className="text-lg font-bold text-gray-900 mb-2">{product.title.substring(0, 17)}</h5>
                            <p className="text-gray-700 text-sm mb-4">{product.description.substring(0, 50)}...</p>
                            <div className="flex w-full items-center">
                            <div data-tooltip={product.price} className="button">
                                <button className="button-wrapper">
                                <div className="text">Sepete Ekle</div>
                                    <span className="icon">
                                    <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <button onClick={() => handleViewDetails_sales(product.id)} className="but">
                                    <span className="span">🔎</span>
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </div>    
    );
};

export default Model;

