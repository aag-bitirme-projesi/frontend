import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

import ModelService from '../../services/ModelService';

const Run = () => {
  const navigate = useNavigate();

  const data = {
    models: [
      { name: 'data analysis module' },
      { name: 'historical reporting module' },
      { name: 'classification module' },
      { name: 'historical reporting mosafdule' },
      { name: 'classification modasdfgule' },
      { name: 'coloring module' }
    ]
  };

  const [selectedModel, setSelectedModel] = useState(data.models[0].name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePay = () => {
    navigate(`/pay`);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleRun = async () => {
    // kullanım hakkı yoksa modal açılacak
    const result = 1 ;//performCheck();
    if (result === 0) {
      setIsModalOpen(true);
    } else {

      try {
        setIsLoading(true);
        var response = await ModelService.openContainer(
          {
            'username': 'ataberk',
            'name': 'mobilenet-test'
          }
        );
        console.log('response', response);

        navigate('/runSection', {state: {containerId: response.data.containerId, port: response.data.port}});
      } catch (error) {
        console.error('Docker failed:', error.response ? error.response.data : 'No response');
        alert('Docker failed: ' + (error.response ? error.response.data.message : 'No response'));
      }
      finally {
        setIsLoading(false);
      }
    }
  };

  const performCheck = () => {
    // rastgele açılıp açılmayacağını belirttim ancak burda kullanım hakkını kontrol edeceğiz
    return Math.floor(Math.random() * 2); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-lg m-2 font-semibold">Kullanım hakkınız bitmiştir!</h2>
            <button className="mt-4 py-2 w-full bg-red-500 text-white rounded-xl hover:bg-red-700" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="p-6 w-9/12 mx-auto mt-32 ml-dashboard-table bg-white rounded-3xl shadow-lg ">
        <div className="flex justify-between bg-bg-mavi p-10 rounded-2xl">
          <div className="w-1/2 space-y-4 ">
            <h2 className="font-bold text-2xl border-b-2 border-slate-600 w-9/12 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-500 mb-2">Select Models</h2>
            {data.models.map((model) => (
              <label key={model.name} className="flex text-white items-center space-x-3">
                <div class="flex flex-col space-y-4">
                  <label class="relative flex items-center cursor-pointer">
                    <input 
                      class="sr-only peer" 
                      type="radio" 
                      id={model.name}
                      name="model"
                      value={model.name}
                      checked={selectedModel === model.name}
                      onChange={handleModelChange} />
                    <div class="w-6 h-6 bg-transparent border-2 border-purple-500 rounded-full peer-checked:bg-purple-500 peer-checked:border-purple-500 peer-hover:shadow-lg peer-hover:shadow-purple-500/50 peer-checked:shadow-lg peer-checked:shadow-purple-500/50 transition duration-300 ease-in-out"></div>
                    <span class="ml-2 text-white font-thin">{model.name}</span>
                  </label>
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex mt-4 justify-end ">
            {/* <button onClick={handlePay} className="bg-ebebeb shadow-xl text-black font-bold py-2 px-20 rounded-xl">
              Pay
            </button> */}
            <button onClick={handleRun} className="bg-gradient-to-r from-green-500 to-purple-500 shadow-xl text-white font-bold ml-6 py-2 px-20 rounded-xl">
              Run
            </button>
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
}

export default Run;
