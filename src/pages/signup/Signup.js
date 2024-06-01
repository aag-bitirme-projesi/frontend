import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService'; 

import illustration from '../../assets/pics/illustration.png';
import renklilogouzun from '../../assets/logo/renklilogouzun.png';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [github, setGithub] = useState('');

  const handleBackClick = () => {
    navigate('/signin');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgotPassword');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const userInfo = {
      name,
      username,
      email,
      password,
      github: github.trim() !== "" ? github : undefined
    };
  
    try {
      await AuthService.signup(userInfo);
      console.log('Signup successful');
      navigate('/landingPage');
    } catch (error) {
      console.error('Signup failed:', error.response ? error.response.data : 'No response');
      alert('Signup failed: ' + (error.response ? error.response.data.message : 'No response'));
    }
  };
  console.log("HERE3333");
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
          <h2 className="text-5xl font-semibold mb-4 text-center text-white">Welcome !</h2>
          <h3 className="text-md font-thin mb-6 ml-4 mr-4 text-center text-white">Please enter your information to access your account.</h3>
          <form>
            <div className="mb-5">
              <label htmlFor="name" className="block text-md mb-2 font-semibold text-white">Name</label>
              <input
                type="name"
                id="name"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="block text-md mb-2 font-semibold text-white">Username</label>
              <input
                type="username"
                id="username"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-md mb-2 font-semibold text-white">E-mail</label>
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
            <div className="mb-3">
              <label htmlFor="confirmpassword" className="block text-md mb-2 font-semibold text-white">Confirm Password</label>
              <input
                type="confirmpassword"
                id="confirmpassword"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="github" className="block text-md mb-2 font-semibold text-white">Github</label>
              <input
                type="text"
                id="github"
                className="w-full border-2 border-white text-white rounded-full bg-transparent px-3 py-1.5"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
            <p onClick = {handleForgotPasswordClick}className='text-xs mb-3 text-end font-light text-gray-400'>
              forgot password
            </p>
            <div class="flex justify-between items-center w-full">
              <button onClick={handleBackClick} class="px-14 py-2 bg-white rounded-full text-black font-bold shadow-lg">
                  Back
              </button>
              <button onClick={handleSubmit} class="px-11 py-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-full text-white font-bold shadow-lg">
                  Sign Up
              </button>
          </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
