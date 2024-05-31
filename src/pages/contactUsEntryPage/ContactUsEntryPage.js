import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
const ContactEntryPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        message: '',
        phoneNumber: '',
        email: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleHomeClick = () => {
        navigate('/');
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        emailjs.send('service_06unnqu', 'template_mtfsmyu', formData, 'yrGFz6bVL9icZ36iG')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                handleReset(); // Reset the form after successful submission
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send email. Please try again.');
            });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            surname: '',
            message: '',
            phoneNumber: '',
            email: ''
        });
    };

    return (
        <div>
 <div className="absolute z-20 top-0 left-0 m-4">
        <button onClick={handleHomeClick} className=" rounded-full p-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
      </div>
        <div className='w-9/12 mx-auto rounded-3xl mb-32 mt-48 p-24' style={{background: 'linear-gradient(to right, #001D3A, #064284)'}}>
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
                <div className="flex gap-4">
                    <div className="w-full md:w-1/2">
                        <label className="text-white font-extrabold text-lg mb-2 ml-2 block">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number..."
                            className="w-full p-3 rounded-2xl bg-bg-mavi text-white placeholder-gray-700"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label className="text-white block font-extrabold text-lg mb-2 ml-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email..."
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


        </div>
       
    );
};

export default ContactEntryPage;
