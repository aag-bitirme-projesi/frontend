import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './login.css';
import { Link } from 'react-router-dom';
//import myGif from '../../assets/gif';
import { Navbar } from '../../components';
const SignUp = () => {

  return(
      <div className="gpt3__blog section__padding" id="blog">
    <Navbar />
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Start Your Journey !</h1>
    </div>
    <div className="evermore_container_l" >
      <div className="toggle-container_evermore">
        <div className="toggle_evermore">
          </div>
          <div className="toggle-panel_evermore">
             <form><h1>Hello, Friend!</h1>
            <p >Login to your account</p>
            <p>  </p>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='button_blog' >Sign In</button>
          <Link to ="/forgotPassword">Forgot Password</Link>
          <p></p>
          <Link to ="/mainPage">Don't you have account? Sign up</Link>
        </form>
          </div>
        </div>
      </div>
    </div>

  )

};

export default SignUp;
