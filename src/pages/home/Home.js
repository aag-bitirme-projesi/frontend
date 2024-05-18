import React from 'react';
import { useNavigate } from 'react-router-dom';

// import axios from 'axios';
import illustration from '../../assets/pics/illustration.png';
import google from '../../assets/logo/Google.webp';
import slack from '../../assets/logo/slack.png';
import atlassian from '../../assets/logo/atlassian.png';
import dropbox from '../../assets/logo/dropbox.png';
import shopify from '../../assets/logo/shopify.webp';



const Home = () => {

  const navigate = useNavigate();


  const handleSignin = () => {
    navigate('/signin');
  };


  return (
    <div>
      <div className="max-w-full h-auto text-justify p-4" style={{background: 'linear-gradient(to top, #071120, #032346)'}}>
        <div className="h-screen flex">
          <div className="flex-1 flex flex-col justify-center items-start p-10 ml-36">
          <h1 className="text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500">EVERMORE</h1>
            <p className="mb-10 w-9/12 font-semibold text-2xl text-blue-300 opacity-70">Do you want to find AI models for your business, or do you want to find a market for selling your AI models? Evermore is here for you.</p>
            <div className="flex justify-between items-center  rounded-lg w-9/12">
                <input type="text" placeholder="Your Email Address" className="flex-grow pl-10 pr-4 pt-3 pb-3 h-full bg-blue-950  rounded-l-xl text-white focus:outline-none" />
                <button onClick={handleSignin} className="bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-r-xl px-8 py-5 transition-colors duration-300">Contact Us</button>
            </div>
          </div>
          <div className="flex-1 bg-cover bg-no-repeat mt-36" style={{ backgroundImage: `url(${illustration})`, backgroundSize: '70%' }}></div>
        </div>
      </div>
      <div className="flex items-center justify-items-center justify-center  pl-32 pr-32">
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <img className="m-16 h-9 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={google} alt="" />
        </a>
        <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer">
        <img className="m-16 h-8 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={slack} alt="" />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <img className="m-16 h-20 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={atlassian} alt="" />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <img className="m-16 h-12 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={dropbox} alt="" />
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <img className="m-16 h-10 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={shopify} alt="" />
        </a>
      </div>
      <div  id="evermore" className='w-9/12 mx-auto rounded-3xl mb-32 mt-48 p-24' style={{background: 'linear-gradient(to right, #001D3A, #064284)'}}>
        <div className='w-full flex mb-24'>
            <div className='w-3/12 mr-16 text-white font-semibold text-2xl'>
              <div className="mb-3">
                  <div className="h-2 w-5/12 bg-gradient-to-r from-purple-500 to-green-500"></div>
              </div>
              <p >What is EVERMORE?</p>
            </div>
            <div className='w-9/12 ml-12 text-blue-300 opacity-70 text-xl'  >
                Unleash the Power of AI: A Marketplace for Everyone. Empower your insights, streamline your workflow, and unlock new possibilities with our all-in-one AI marketplace.
            </div>
        </div>
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 text-5xl w-9/12 font-bold mb-24">
            The possibilities are beyond your imagination
        </div>
        <div className='w-full flex'>
            <div className='w-1/2 mr-16 text-white font-semibold text-lg'>
                <div className="mb-3">
                    <div className="h-2 w-1/12 bg-gradient-to-r from-purple-500 to-green-500"></div>
                </div>
                <p>For Users</p>
                <p className="text-blue-300 opacity-70 font-thin mt-3">Access a wide range of pre-trained models, Pay-as-you-go pricing. Upload your data, obtain predictions, and gain valuable insights – no AI expertise required.</p>
            </div>
            <div className='w-1/2 mr-16 text-white font-semibold text-lg'>
                <div className="mb-3">
                    <div className="h-2 w-2/12 bg-gradient-to-r from-purple-500 to-green-500"></div>
                </div>
                <p>For Developers</p>
                <p className="text-blue-300 opacity-70 font-thin  mt-3">Access a wide range of pre-trained models, Pay-as-you-go pricing. Upload your data, obtain predictions, and gain valuable insights – no AI expertise required.</p>
            </div>
        </div>
      </div>
      <div  id = "More"  className='w-full mx-auto mb-32 mt-48 p-32' style={{background: 'linear-gradient(to top, #032346, #071120)'}}>
        <div className='flex'>
          <div  className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500 text-4xl w-7/12 font-bold mb-24'>
            Step into the future - where Al empowers your data and unlocks possibilities. Make it happen on our one-stop Al marketplace.
          </div>
          <div className='text-white  text-xl flex ml-28'>
            <div className='mr-24 font-bold mt-2'>
              <p className='mb-28'>
                <div className="mb-2">
                    <div className="h-1 w-6/12 bg-gradient-to-r from-purple-500 to-green-500"></div>
                </div>
                Empowerment
              </p>
              <p>
                <div className="mb-2">
                    <div className="h-1 w-6/12 bg-gradient-to-r from-purple-500 to-green-500"></div>
                </div>
                Reach your audience:
              </p>
            </div>
            <div className='font-thin text-blue-300 opacity-95 text-lg'>
              <p className='mb-24'>
                From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.
              </p>
              <p>
                Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="flex mx-auto w-8/12 h-auto mt-32 mb-32 items-center rounded-3xl pr-20" style={{background: 'linear-gradient(to left, #001D3A, #064284)'}}>
      <div className="w-6/12">
        <p className="text-white text-4xl font-bold ml-10 p-20 mr-10 text-left">
        To Get Detailed Information...
        </p>
      </div>
      <div className="w-3/12">
        <img alt="" className="p-12 -mx-20 h-auto" src={illustration}/>
      </div>
      <button onClick={handleSignin} className="w-3/12 bg-gradient-to-r from-purple-500 to-green-500 text-white text-2xl font-bold text-center p-4 mr-8 rounded-2xl">
          Contact Us
      </button>
    </div>


    </div>
      
      
  );
};

export default Home;