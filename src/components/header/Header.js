import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = () => {
        navigate('/signin');
    };

    const handleRegisterClick = () => {
        navigate('/signup');
    };

    const handleScrollToEvermore = () => {
        const evermoreSection = document.getElementById('evermore');
        if (evermoreSection) {
            evermoreSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToMore = () => {
        const evermoreSection = document.getElementById('More');
        if (evermoreSection) {
            evermoreSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hiddenPaths = ['/signin', '/signup', '/output', '/pay', '/dashboard', '/contact', '/profile', '/wallet', '/run', '/models', '/datasets', '/hiddenpage', '/forgotPassword', '/landingPage', '/FAQ', '/contactUs', ,'/changePassword', '/runSection'];

    const isHidden = hiddenPaths.some(path => path === location.pathname) || /\/details\/[^/]+$/.test(location.pathname);

    const isHidden1 = hiddenPaths.some(path => path === location.pathname) || /\/details_sales\/[^/]+$/.test(location.pathname);
    if (isHidden) {
        return null;
    }
    if (isHidden1) {
        return null;
    }

    return (
        <header className="fixed p-4 z-10 max-w-full rounded-none bg-black bg-opacity-0 py-2 px-4 text-my-navgri backdrop-blur-xl text-white w-full flex justify-between items-center ">
            <div className="flex items-center m-4 ml-32 ">
                <img className="mr-4" src={logo} style={{ width: '200px' }} alt="Logo"></img>
                <ul className="flex ml-16">
                    <li className="mx-6">
                        <div onClick={handleScrollToEvermore} className="text-white font-semibold hover:text-gray-300 cursor-pointer">
                            What is EverMore?
                        </div>
                    </li>
                    <li className="mx-8">
                        <div onClick={handleScrollToMore} className="text-white font-semibold hover:text-gray-300">
                            More
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex mr-32">
                <button onClick={handleLoginClick} className="mx-6 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>
                <button onClick={handleRegisterClick} className="bg-gradient-to-r from-green-500 to-purple-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-2xl">
                    Sign Up
                </button>
            </div>
        </header>
    );
};

export default Header;
