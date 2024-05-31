import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthService from '../../services/AuthService'; 

import illustration from '../../assets/pics/illustration.png';
import renklilogouzun from '../../assets/logo/renklilogouzun.png';

const ChangePassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  // Extract the token from query parameters or props (depending on your implementation)
  const query = new URLSearchParams(location.search);
  const token = query.get('token'); // Adjust if you are using a different method to pass the token

  const handleBackClick = () => {
    navigate('/signin');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    const userInfo = {
      token, // Include the token for password reset verification
      password,
    };

    try {
      await AuthService.resetPassword(userInfo); // Assume you have a resetPassword method in your AuthService
      console.log('Password reset successful');
      navigate('/signin');
    } catch (error) {
      console.error('Password reset failed:', error.response ? error.response.data : 'No response');
      alert('Password reset failed: ' + (error.response ? error.response.data.message : 'No response'));
    }
  };

  return (
    <div className="h-screen flex" style={{background: 'linear-gradient(to top, #071120, #032346)' }}>
      <div className="w-1/2 bg-cover bg-center bg-no-repeat mt-6" style={{ backgroundImage: `url(${illustration})`, backgroundSize: '69% 75%', backgroundPosition: 'center' }}></div>
      <div className="absolute left-0 right-0 top-0 bottom-0 " style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={renklilogouzun} alt="Colorful Logo" className="h-128 -mr-72 -rotate-90" />
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 " style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
        <img src={renklilogouzun} alt="Colorful Logo" className="h-128 mr-8 -rotate-90" />
      </div>
      <div className="flex items-center justify-center w-96 ml-40 z-10" style={{background: 'linear-gradient(to top, #064385 , #012549)' }}> 
        <div className="w-full p-8"> 
          <h2 className="text-5xl font-semibold mb-4 text-center text-white">Reset Password</h2>
          <h3 className="text-md font-thin mb-6 ml-4 mr-4 text-center text-white">Please enter your new password.</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="password" className="block text-md mb-2 font-semibold text-white">New Password</label>
              <input
                type="password"
                id="password"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="block text-md mb-2 font-semibold text-white">Confirm New Password</label>
              <input
                type="password"
                id="confirmpassword"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <button onClick={handleBackClick} className="px-14 py-2 bg-white rounded-full text-black font-bold shadow-lg">
                Back
              </button>
              <button type="submit" className="px-11 py-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-full text-white font-bold shadow-lg">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
