import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Axios import edilir
import authService from '../../services/AuthService';

import illustration from '../../assets/pics/illustration.png';
import renklilogouzun from '../../assets/logo/renklilogouzun.png';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = {
    email,
    password
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleForgotPasswordClick = () => {
    navigate('/forgotPassword');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await authService.signin(userInfo);
      console.log("hellour");
      console.log(response);
      navigate('/landingPage')
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : 'No response');
      alert('Login failed: ' + (error.response ? error.response.data.message : 'No response'));
    }
  };


  return (
    <div className="h-screen flex" style={{background: 'linear-gradient(to top, #071120, #032346)' }}>
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
      <div className="flex items-center justify-center w-96 ml-40 z-10" style={{background: 'linear-gradient(to top, #064385 , #012549)' }}> 
        <div className="w-full p-8"> 
          <h2 className="text-5xl font-semibold mb-4 text-center text-white">Welcome !</h2>
          <h3 className="text-md font-thin mb-12 ml-4 mr-4 text-center text-white">Please enter your information to access your account.</h3>
          <form>
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
            <div className="mb-3">
              <label htmlFor="password" className="block text-md mb-2 font-semibold text-white">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p onClick={handleForgotPasswordClick} className='text-xs mb-3 text-end font-light text-gray-400'>
              forgot password
            </p>
            <button onClick={handleSubmit} className="w-full px-8 py-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-full text-white font-bold shadow-lg">
                Sign In
            </button>
            <div className="flex items-center justify-center my-4">
                <div className="flex-grow border-t border-white"></div>
                <span className="mx-4 text-white uppercase">Or</span>
                <div className="flex-grow border-t border-white"></div>
            </div>
            <button onClick={handleSignupClick} className=" w-full px-8 py-2 bg-white rounded-full text-black font-bold shadow-lg">
                Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
