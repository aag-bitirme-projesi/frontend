import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import illustration from '../../assets/pics/illustration.png';
import renklilogouzun from '../../assets/logo/renklilogouzun.png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSignupClick = () => {
    navigate('/signin');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a request to the server to reset the password
      const response = await axios.post('http://localhost:3001/resetpassword', { email });
      console.log('Password reset email sent:', response.data);
      alert('Password reset email sent. Please check your inbox.');
      navigate('/');
    } catch (error) {
      console.error('Password reset failed:', error.response ? error.response.data : 'No response');
      alert('Password reset failed: ' + (error.response ? error.response.data.message : 'No response'));
    }
  };

  return (
    <div className="h-screen flex" style={{ background: 'linear-gradient(to top, #071120, #032346)' }}>
      <div className="absolute z-20 top-0 left-0 m-4">
        <button onClick={handleHomeClick} className=" rounded-full p-2 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="w-1/2 bg-cover bg-center bg-no-repeat mt-6" style={{ backgroundImage: `url(${illustration})`, backgroundSize: '69% 75%', backgroundPosition: 'center' }}></div>
      <div className="absolute left-0 right-0 top-0 bottom-0 " style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={renklilogouzun} alt="Colorful Logo" className="h-128 -mr-72 -rotate-90" />
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 " style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <img src={renklilogouzun} alt="Colorful Logo" className="h-128 mr-8 -rotate-90" />
      </div>
      <div className="flex items-center justify-center w-96 ml-40 z-10" style={{ background: 'linear-gradient(to top, #064385 , #012549)' }}>
        <div className="w-full p-8">
          <h2 className="text-5xl font-semibold mb-4 text-center text-white">Forgot Password</h2>
          <h3 className="text-md font-thin mb-12 ml-4 mr-4 text-center text-white">Please enter your email to reset your password.</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block text-md mb-2 font-semibold text-white">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full px-8 py-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-full text-white font-bold shadow-lg">
              Reset Password
            </button>
          </form>
          <p className="text-xs mt-3 text-center text-white">Remembered your password? <span className="underline cursor-pointer" onClick={handleSignupClick}>Sign In</span></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
