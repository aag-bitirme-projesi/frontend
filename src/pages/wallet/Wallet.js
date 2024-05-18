import React from 'react';

const Wallet = () => {

    const earnings = [
        { id: 1, description: "data dsfdsf module", amount: "34.40", date: "01.12.2023" },
        { id: 2, description: "af analysis module", amount: "34.80", date: "01.12.2023" },
        { id: 3, description: "data analysis dsf", amount: "12.30", date: "01.12.2023" }
    ];

    const totalEarnings = earnings.reduce((acc, cur) => acc + parseFloat(cur.amount), 0).toFixed(2);


    return (

        <div>
        <div className="w-6/12 mt-48 ml-contact bg-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 pb-2">Wallet</h2>
            <div className="mb-6 text-center">
                <h3 className="text-black font-light mb-1">Total Earnings</h3>
                <p className="text-4xl font-bold text-green-600">${totalEarnings}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 border-b pb-2">Last earnings</h3>
                {earnings.map((earning, index) => (
                    <div key={earning.id} className="flex justify-between items-center py-2 border-b">
                        <span>{earnings.length - index}</span>
                        <span className="text-gray-700">{earning.description}</span>
                        <span className="text-purple-600">${earning.amount}</span>
                        <span className="text-gray-500">{earning.date}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>

    );
};

export default Wallet;
