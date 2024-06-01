import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import authService from '../../services/AuthService';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('/');
    const navigate = useNavigate();
    const location = useLocation();

    const hiddenPaths = ['/signin', '/signup', '/', '/hiddenpage', '/forgotPassword', '/FAQ', 'resetPassword'];

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Run', path: '/run' },
        { name: 'Models', path: '/models' },
        { name: 'Datasets', path: '/datasets' },
        { name: 'Pay', path: '/card' },
        { name: 'Wallet', path: '/wallet' }
    ];

    const bottomMenuItems = [
        { name: 'Profile', path: '/profile' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Sign Out', path: '/' }
    ];

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    const handleItemClick = (path) => {
        if (path === '/') {   
            console.log("Signing out..."); 
            // authService.signOut() vb.
            //TODO burası mı sadece?
            authService.logout();
        } else {
            setActiveItem(path); 
            navigate(path);
        }
    };

    const shouldHideNavbar = (pathname) => {
        // Check if pathname matches any hidden paths exactly
        if (hiddenPaths.includes(pathname)) {
          return true;
        }
        
        // Check if pathname starts with '/resetPassword/' (dynamic path)
        if (pathname.startsWith('/resetPassword')) {
          return true;
        }
      
        return false;
    };

    if (shouldHideNavbar(location.pathname)) {
        return null;
    }

    const handleLandingPage = () => {
        navigate(`/landingPage`);
      };

    return (
        <div className="fixed top-0 left-0 z-50 h-full text-center bg-bg-mavi text-white w-80 border-r-4 border-border-mavi">
            <button onClick = {handleLandingPage}className="pt-10 pb-16 px-3 text-4xl font-black">EVERMORE</button>
            <ul className="flex flex-col p-2">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`pt-6 cursor-pointer font-black text-xl ${activeItem === item.path ? 'gradient-text' : 'text-side-gri'}`}
                        onClick={() => handleItemClick(item.path)}
                    >
                        {item.name}
                    </li>
                ))}
                <div className="mt-40">
                    {bottomMenuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`pt-6 cursor-pointer font-black text-xl ${activeItem === item.path ? 'gradient-text' : 'text-side-gri'}`}
                            onClick={() => handleItemClick(item.path)}
                        >
                            {item.name}
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;
