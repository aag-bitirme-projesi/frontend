import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home'; 
import Dashboard from './pages/dashboard/Dashboard';
import Run from './pages/run/Run';
import Models from './pages/models/Models';
import Datasets from './pages/datasets/Datasets';
import Wallet from './pages/wallet/Wallet';
import Profile from './pages/profile/Profile';
import Contact from './pages/contact/Contact';
import Details from './pages/details/Details';
import Output from './pages/output/Output';
import Card from './pages/card/Card';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import LandingPage from './pages/landingPage/LandingPage';
import FAQ from './pages/faq/FAQ';
import ContactEntry from './pages/contactUsEntryPage/ContactUsEntryPage';
import ChangePassword from './pages/changePassword/ChangePassword';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Navbar />
        
        <main className="">
          <Routes> 
            <Route path="/signin" element={<Signin />} /> 
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/run" element={<Run />} />
            <Route path="/models" element={<Models />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/output" element={<Output />} />
            <Route path="/card" element={<Card />} />
            <Route path="/forgotPassword" element={<ForgotPassword/>} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/contactUs" element={<ContactEntry />} />
            <Route path="/changePassword" element={<ChangePassword />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
