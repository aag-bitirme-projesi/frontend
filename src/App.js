import React from 'react';

import { Footer, Blog, Possibility, Features, Evermore, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Evermore />
    <Features />
  </div>
);

export default App;
