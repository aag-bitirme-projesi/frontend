import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './signUp.css';
import { Link } from 'react-router-dom';
//import myGif from '../../assets/gif';
import { Navbar } from '../../components';

const SignUp = () => {
  return (
    <div className="blog__gpt3 section__padding" id="blog">
      <Navbar />
      <div className="blog__gpt3-heading">
        <h1 className="gradient__text">A lot is happening, <br /> Start Your Journey !</h1>
      </div>
      <div className="evermore_container">
        <div className="toggle-container_evermore">
          <div className="toggle_evermore"></div>
          <div className="toggle-panel_evermore">
            <form>
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <p> </p>
              <input type="text" placeholder="User Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className='button_blog'>Sign Up</button>
              <p></p>
              <Link to="/login">Do you have account? Log in</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
