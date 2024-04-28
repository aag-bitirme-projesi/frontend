import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './forgetPassword.css';
import { Link } from 'react-router-dom';
//import myGif from '../../assets/gif';
import { Navbar } from '../../components';
const ForgotPassword = () => {

  return(
      <div className="gpt3__blog section__padding" id="blog">
    <Navbar />
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Start Your Journey !</h1>
    </div>
    <div className="evermore_container_f" >
      <div className="toggle-container_evermore">
        <div className="toggle_evermore">
          </div>
          <div className="toggle-panel_evermore">
             <form><h1>Hello, Friend!</h1>
            <p >Don't you remember your password</p>
            <p>  </p>
          <input type="email" placeholder="Email" />
          <button className='button_blog' >Reset Your Password</button>
          <p></p>
          <Link to ="/signUp">Don't you have an account? Sign Up </Link>
        </form>
          </div>
        </div>
      </div>
    </div>

  )

};

export default ForgotPassword;
