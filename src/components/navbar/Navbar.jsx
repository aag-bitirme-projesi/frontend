import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';
import {Link} from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="evermore_navbar">
      <div className="evermore_navbar-links">
        <div className="evermore__navbar-links_logo">
        </div>
        <div className="evermore_navbar-links_container">
          <p><a href="#home">EVERMORE</a></p>
          <p><a href="#wgpt3">What is Evermore?</a></p>
          <p><a href="#features">More</a></p>
        </div>
      </div>
      <div className="evermore_navbar-sign">
      <p>
        <Link to="/login">Sign in</Link>
      </p>
        <button type="button" ><Link to = "/login">Sign up</Link></button>
      </div>
      <div className="evermore_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="evermore_navbar-menu_container scale-up-center">
          <div className="evermore_navbar-menu_container-links">
          <p><a href="#home">EVERMORE</a></p>
          <p><a href="#wgpt3">What is Evermore?</a></p>
          <p><a href="#features">More</a></p>
          </div>
          <div className="evermore_navbar-menu_container-links-sign">
          <p>
        <Link to="/login">Sign in</Link>
      </p>
        <button type="button" ><Link to = "/signUp">Sign up</Link></button>
           
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
