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
import Details_sales from './pages/details_sales/Details_sales';
import Output from './pages/output/Output';
import Card from './pages/card/Card';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import LandingPage from './pages/landingPage/LandingPage';
import FAQ from './pages/faq/FAQ';
import ContactEntry from './pages/contactUsEntryPage/ContactUsEntryPage';
import ChangePassword from './pages/changePassword/ChangePassword';
import RunSection from './pages/runSection/RunSection';
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
            <Route path="/signin" element={<Signin />} /> {/* baktım */}  {/* VIDEO */}
            <Route path="/signup" element={<Signup />} /> {/* baktım */}
            <Route path="/" element={<Home />} /> {/* baktım */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* TODO VIDEO */}
            <Route path="/run" element={<Run />} />  {/* TODO VIDEO */}
            <Route path="/models" element={<Models />} /> {/* TODO VIDEO */}
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/details/:id" element={<Details />} />
            {/* <Route path="/wallet" element={<Wallet />} /> */}
            <Route path="/profile" element={<Profile />} />  {/* baktım */}  {/* TODO updatede ataberkin yaptığına geri çevir */}  
            <Route path="/contact" element={<Contact />} />
            <Route path="/output" element={<Output />} />   {/* TODO VIDEO */}  
            <Route path="/pay" element={<Card />} />  {/* TODO VIDEO */}
            <Route path="/forgotPassword" element={<ForgotPassword/>} />  {/* baktım */}
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/FAQ" element={<FAQ />} />  {/* baktım */}
            <Route path="/contactUs" element={<ContactEntry />} />
            <Route path="//resetPassword/:token" element={<ChangePassword />} />  {/* baktım */}
            <Route path="/runSection" element={<RunSection />} />
            <Route path="/details_sales/:id" element={<Details_sales />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
