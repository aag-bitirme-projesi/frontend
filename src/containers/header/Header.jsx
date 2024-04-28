import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">EVERMORE</h1>
      <p>Do you want to find AI models for your business, or do you want to find a market for selling your AI models? Evermore is here for you.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button"><Link to = 'login'>Get Started</Link></button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>JOIN US WITH JUST ONE CLICK</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
