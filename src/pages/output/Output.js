import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

import ModelService from '../../services/ModelService';

const Output = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const { containerId, outputData } = state;
    const [isLoading, setIsLoading] = useState(false);

    const Table = ({outputData}) => {
        const headers = Object.keys(outputData[0]);

        return (
            <table className="table-fixed w-full">
                <thead>
                    <tr className="bg-blue-900 text-white">
                        {headers.map((header, index) => (
                            <th key={index} className="w-1/3 py-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {outputData.map((data, index) => (
                        <tr key={index} className="border-b border-gray-200 text-white text-sm">
                            {headers.map((header, index) => (
                                <td key={index} className="text-center py-2">{data[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )

    }

    // const outputData = [
    //     { modelName: 'historical reporting module', csvName: 'astroid.csv', time: '12:00' },
    //     { modelName: 'Model 2', csvName: 'data2.csv', time: '12:30' },
    //     { modelName: 'Model 3', csvName: 'data3.csv', time: '13:00' },
    //     { modelName: 'Model 4', csvName: 'data4.csv', time: '12:00' },
    //     { modelName: 'Model 5', csvName: 'data5.csv', time: '12:30' },
    //     { modelName: 'Model 6', csvName: 'data6.csv', time: '13:00' },
    //     { modelName: 'Model 7', csvName: 'data7.csv', time: '13:30' }
    // ];

    const handleBack = async () => {

        
      try {
        setIsLoading(true);
        console.log('containerId', containerId);
        var response = await ModelService.closeContainer(
            {
              'containerId': containerId
            }
        );
        navigate(`/dashboard`);
      } catch (error) {
        console.error('Docker failed:', error.response ? error.response.data : 'No response');
        alert('Docker failed: ' + (error.response ? error.response.data.message : 'No response'));
      }
      finally {
        setIsLoading(false);
      }
      

    }

    return (
    <div className='w-9/12 mt-32 ml-dashboard-table '>

        <div className="flex flex-col items-center w-full justify-center p-6 bg-blue-950 rounded-3xl">
            <div className="border-b-2 mb-10 text-white w-full p-4 rounded-t-lg">
                <h1 className="text-xl font-semibold">Output Screen</h1>
            </div>
            <div className="flex w-full bg-blue-950">
                <div className=" w-1/2 p-4 border-r bg-blue-950 border-gray-200">
                    <Table outputData={outputData} />
                    {/* <table className="table-fixed w-full">
                        <thead>
                            <tr className="bg-blue-900 text-white">
                                <th className="w-1/3 py-2">Model Name</th>
                                <th className="w-1/3 py-2">Csv Name</th>
                                <th className="w-1/3 py-2">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {outputData.map((data, index) => (
                                <tr key={index} className="border-b border-gray-200 text-white text-sm">
                                    <td className="text-center py-2 ">{data.modelName}</td>
                                    <td className="text-center py-2">{data.csvName}</td>
                                    <td className="text-center py-2">{data.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
                <div className="w-1/2 bg-white p-4">
                    <p>More details or actions could go here.</p>
                </div>
            </div>
            <div className="w-full p-4  text-white text-right">
                <button onClick={handleBack} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-xl">
                    Close
                </button>
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

export default Output;
