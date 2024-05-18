import React, { useState } from 'react';

const Dataset = () => {

    const [selectedDataIds, setSelectedDataIds] = useState([]);

    //bu aşşağıdaki değerleri değiştirdiğinde progress ve statusu tabloda da aktif olarak değişmektedir completed tik koyuyor yeşil oluyor, error çarpı koyup kırmızı yapıyor
    const [files] = useState([
        { name: 'asdfad.csv', size: '950 Mb', progress: 100, status: 'completed' },
        { name: 'learning.csv', size: '1.2 Gb', progress: 65, status: 'error' },
        { name: 'asasd.arff', size: '950 Mb', progress: 100, status: 'completed' }
    ]);

    const [data, setData] = useState([
        { id: 1, name: 'data analysis module', date: '01.12.2023' },
        { id: 2, name: 'historical reporting module', date: '11.02.2024' },
        { id: 3, name: 'classification module', date: '13.02.2024' },
        { id: 4, name: 'coloring module', date: '28.05.2024' },
        { id: 5, name: 'data analysis module', date: '01.12.2023' },
        { id: 6, name: 'historical reporting module', date: '11.02.2024' }
      ]);

    // const handleFileUpload = () => {
    //     Burada dosya yükleme işlemi gerçekleştirilecek
    // };

    const handleDeleteData = () => {
        console.log('Deleting data IDs:', selectedDataIds);
        const updatedData = data.filter(dataset => !selectedDataIds.includes(dataset.id));
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

    return (

    <div>
        <div className="flex justify-between items-start bg-white p-8 shadow-lg rounded-3xl w-9/12 ml-dashboard-table mt-32">
        <div className="p-4 rounded-lg mr-4 w-1/2">
            <div className='border-b-2 text-2xl font-semibold text-black'>
                <p>Dataset Upload</p>
            </div>
            <div class="grid w-full max-w-xs items-center gap-1.5">
                <label class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-36">File Input Area</label>
                <input id="picture" type="file" class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/>
            </div>
        </div>
        <div className="w-1/2 p-4">
            {files.map((file, index) => (
                <div key={index} className="mb-4 last:mb-0">
                    <div className="flex flex-col p-4 rounded-xl border-2 border-ebebeb shadow-xl">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold truncate">{file.name}</span>
                            <span className="text-sm text-gray-500">{file.size}</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                            <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className={`h-full ${file.status === 'completed' ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${file.progress}%` }}></div>
                            </div>
                            <div className="flex items-center ml-2">
                                <span className="text-sm font-semibold">{file.progress}%</span>
                                <span className={`ml-2 ${file.status === 'completed' ? 'text-green-500' : 'text-red-500'}`}>
                                    {file.status === 'completed' ? '✔' : '✖'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <button className="mt-4 px-14 font-extrabold py-2 bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white rounded-xl">Add</button>
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
    </div>    
    );
};

export default Dataset;
