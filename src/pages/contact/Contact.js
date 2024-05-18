import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
    };

    const handleReset = () => {
        setFormData({
            name: '',
            surname: '',
            message: ''
        });
    };

    return (
        <div className="bg-blue-950 p-8 w-6/12 mt-48 ml-contact rounded-3xl">
            <h2 className="text-white font-black text-2xl mb-6 border-b-2 border-white">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-full md:w-1/2">
                        <label className="text-white font-extrabold text-lg mb-2 ml-2 block">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter name..."
                            className="w-full p-3 rounded-2xl bg-bg-mavi text-white placeholder-gray-700"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="text-white block font-extrabold text-lg mb-2 ml-2">Surname</label>
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Enter surname..."
                            className="w-full p-3 rounded-2xl bg-bg-mavi text-white placeholder-gray-700"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-white block font-extrabold text-lg mb-2 ml-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter message..."
                        className="w-full h-32 p-3 rounded-2xl bg-bg-mavi text-white placeholder-gray-700"
                    ></textarea>
                </div>
                <div className="flex justify-between gap-4">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="bg-red-700 hover:bg-red-900 text-white w-5/12 py-2 text-md font-black rounded-lg"
                    >
                        Clear Form
                    </button>
                    <button
                        type="submit"
                        className="bg-white hover:bg-gray-300 text-black w-5/12 py-2 text-md font-black rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
