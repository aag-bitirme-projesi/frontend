import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RunSection = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { containerId, port } = state;
  const CONTAINER_URL = `http://localhost:${port}`;

  const [files, setFiles] = useState([
    // { name: 'asdfad.csv', size: '950 Mb', progress: 100, status: 'completed' },
    // { name: 'learning.csv', size: '1.2 Gb', progress: 65, status: 'error' },
    // { name: 'asasd.arff', size: '950 Mb', progress: 100, status: 'completed' }
  ]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const data = {
    models: [
      { name: 'data analysis module' },
      { name: 'historical reporting module' },
      { name: 'classification module' },
      { name: 'historical reporting mosafdule' },
      { name: 'classification modasdfgule' },
      { name: 'coloring module' }
    ],
    options: [
      { name: 'train' },
      { name: 'finetune' },
    ]
  };

  const [selectedModel, setSelectedModel] = useState(data.models[0].name);
  const [showModelSelection, setShowModelSelection] = useState(false);
  const [showDatasetUpload, setShowDatasetUpload] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showSelection, setShowSelection] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleAdd = () => {
    setShowResult(true);
  };
  const handleTest = () => {
    setShowModelSelection(false);
    setShowDatasetUpload(true);
    setShowSelection(false);
    setSelectedMethod(false);
  };
  const handleSelection = () => {
    setShowModelSelection(false);
    setShowDatasetUpload(false);
    setShowSelection(true);
  };
  const handlePay = () => {
    navigate(`/card`);
  };

  const handleTrain = () => {
    setShowModelSelection(true);
    setShowDatasetUpload(false);
  };
  
  const handleDataSet = () => {
    setShowModelSelection(true);
    setShowDatasetUpload(false);
    setShowSelection(false);
  };

  const handleFinetune = () => {
    setShowModelSelection(true);
    setShowDatasetUpload(false);
  }; 

  const handleFileUpload = (event) => {
    var files = []
    for (var i = 0; i < event.target.files.length; i++) {
      var file = event.target.files[i];

      var name = file.name;
      var size = file.size;
      var progress = 100;
      var status = 'completed';

      var size_postfix = 'B';
      if (size > 1024) {
        size = size / 1024;
        size_postfix = 'KB';
      }
      if (size > 1024) {
        size = size / 1024;
        size_postfix = 'MB';
      }
      if (size > 1024) {
        size = size / 1024;
        size_postfix = 'GB';
      }
      size = size.toFixed(0) + ' ' + size_postfix;

      files.push({ name, size, progress, status });
    }
    
    setFiles(files);
    setSelectedFiles(event.target.files);
  }

  const handleRun = async () => {
    console.log(CONTAINER_URL);

    // Send files as payload
    const formData = new FormData();
    for (const file of Array.from(selectedFiles)) {
      console.log(file);
      formData.append('files', file);
    }
    
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post(`${CONTAINER_URL}/test`, formData, {
          headers: {
              'Authorization': `Bearer ${token}`, //buna gerek yok belki error çıkarır?
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin' : '*'
          }
          });
      
        const responseText = await response.data;
        const responseLines = responseText.split('\n');
        console.log(responseLines);
        
        var output = [];
        for (var i = 0; i < responseLines.length; i++) {
          var line = responseLines[i].split(',');
          output.push({ filename: line[0], prediction: line[1] });
        }
        navigate('/output', {state: {containerId: containerId, outputData: output}});

        // return response;
  } catch (error) {
      console.log(error);
      throw error;
  } 

  //   navigate('/output');
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div>
      <div className="p-6 w-9/12 mx-auto mt-32 ml-dashboard-table bg-white rounded-3xl shadow-lg ">
        <div className="mt-4">
          <div className="flex flex-col mt-4 justify-end ">
            <button onClick={handleDataSet} className="bg-gradient-to-r from-green-500 to-purple-500 shadow-xl text-white font-bold py-2 px-20 rounded-xl mb-4">
              Choose Dataset
            </button>
            <button onClick={handleTest} className="bg-gradient-to-r from-green-500 to-purple-500 shadow-xl text-white font-bold py-2 px-20 rounded-xl mb-4">
              Test
            </button>
          </div>
        </div>
        {showModelSelection && (
          <div className="flex justify-between bg-bg-mavi p-10 rounded-2xl mt-4">
            <div className="w-1/2 space-y-4 ">
              <h2 className="font-bold text-2xl border-b-2 border-slate-600 w-9/12 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500 mb-2">Select Dataset</h2>
              {data.models.map((model) => (
                <label key={model.name} className="flex text-white items-center space-x-3">
                  <div className="flex flex-col space-y-4">
                    <label className="relative flex items-center cursor-pointer">
                      <input 
                        className="sr-only peer" 
                        type="radio" 
                        id={model.name}
                        name="model"
                        value={model.name}
                      />
                      <div className="w-6 h-6 bg-transparent border-2 border-purple-500 rounded-full peer-checked:bg-purple-500 peer-checked:border-purple-500 peer-hover:shadow-lg peer-hover:shadow-purple-500/50 peer-checked:shadow-lg peer-checked:shadow-purple-500/50 transition duration-300 ease-in-out"></div>
                      <span className="ml-2 text-white font-thin">{model.name}</span>
                    </label>
                  </div>
                </label>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex mt-4 justify-end ">
                <button onClick={handleSelection} className="bg-gradient-to-r from-green-500 to-purple-500 shadow-xl text-white font-bold py-2 px-20 rounded-xl">
                  Select
                </button>
              </div>
            </div>
          </div>
        )}
        {showSelection && (
          <div className="flex justify-between bg-bg-mavi p-10 rounded-2xl mt-4">
            <div className="w-1/2 space-y-4 ">
              <h2 className="font-bold text-2xl border-b-2 border-slate-600 w-9/12 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500 mb-2">Select Method</h2>
            </div>
            <div className="mt-4">
              <div className="flex mt-4 justify-end ">
                {data.options.map((model) => (
                  <label key={model.name} className="flex text-white items-center space-x-3">
                    <div className="flex flex-col space-y-4">
                      <label className="relative flex items-center cursor-pointer">
                        <input 
                          className="sr-only peer" 
                          type="radio" 
                          id={model.name}
                          name="method"
                          value={model.name}
                          onChange={handleMethodChange}
                        />
                        <div className="w-6 h-6 bg-transparent border-2 border-purple-500 rounded-full peer-checked:bg-purple-500 peer-checked:border-purple-500 peer-hover:shadow-lg peer-hover:shadow-purple-500/50 peer-checked:shadow-lg peer-checked:shadow-purple-500/50 transition duration-300 ease-in-out"></div>
                        <span className="ml-2 text-white font-thin">{model.name}</span>
                      </label>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
        {selectedMethod && (
          <div className="mt-4 bg-gray-200 p-4 rounded-xl">
            <p className="text-lg font-semibold">You have selected the {selectedMethod} method.</p>
            <p>Train finished</p>
            <p>Final loss...</p>
          </div>
        )}
        {showDatasetUpload && (
            <div className="mt-4 flex flex-col justify-start items-center">
  <div className="flex justify-between bg-gray-200 p-10 rounded-2xl mt-4">
    <div className="p-4 rounded-lg mr-4 w-1/2">
      <div className='border-b-2 text-2xl font-semibold text-black'>
        <p>Dataset Upload</p>
      </div>
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-36">File Input Area</label>
        <input id="picture" type="file" className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" multiple onChange={handleFileUpload}/> {/* Added multiple attribute */}
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
      <button onClick={handleRun} className="mt-4 px-14 font-extrabold py-2 bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white rounded-xl">Add</button>
      
      {/* Result section */}
      {showResult && (
        <div className="mt-4 bg-gray-200 p-4 rounded-xl">
          <p className="text-lg font-semibold">Trained finished</p>
          <p className="text-sm">Final loss: ...</p>
        </div>
      )}
    </div>
  </div>
</div>

        )}
      </div>
    </div>
  );
}

export default RunSection;
