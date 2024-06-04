import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Profilphoto from '../../assets/pics/profilphoto.png';
import axios from 'axios';
import userService from '../../services/UserService';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [profile, setProfile] = useState({ name: "Yükleniyor...", imageUrl: Profilphoto });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await userService.profile();
                console.log("navbar: ", response);
                setProfile({ 
                    name: response.name, 
                    imageUrl: response.profilePicture
                });
            } catch (error) {
                console.error('Profil bilgileri alınırken hata oluştu', error);
                setProfile({ name: "", imageUrl: Profilphoto });
            }
        };

        fetchProfile();
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    const goToCart = () => {
        navigate('/card'); // Sepet sayfasına yönlendircek
    };

    const goToFAQ = () => {
        navigate('/FAQ'); // Sepet sayfasına yönlendircek
    };

    const goToProfile = () => {
        navigate('/profile');
    };

    const handleContact = () => {
        navigate('/contact'); 
    };

    const hiddenPaths = ['/signin', '/signup', '/', '/hiddenpage', '/forgotPassword', 'resetPassword'];

    const shouldHideNavbar = (pathname) => {
        // Check if pathname matches any hidden paths exactly
        if (hiddenPaths.includes(pathname)) {
          return true;
        }
        
        // Check if pathname starts with '/resetPassword/' (dynamic path)
        if (pathname.startsWith('/resetPassword/')) {
          return true;
        }
      
        return false;
    };

    if (shouldHideNavbar(location.pathname)) {
        return null;
    }

    return (
        <div className="fixed w-full top-0 left-0 right-0 z-20 pl-80 bg-bg-mavi text-white">
            <div className="w-full mx-auto ">
                <div className="flex justify-between items-center border-b-4 border-border-mavi ">
                    <div className="flex justify-start p-6">
                        <button onClick={handleContact} className="whitespace-nowrap text-base font-bold text-side-gri hover:text-white px-4">
                            Contact Us
                        </button>
                        <a href="/" onClick={goToFAQ} className="whitespace-nowrap text-base font-bold text-side-gri px-4">
                            FAQ
                        </a>
                    </div>
                    <div className="flex items-center justify-end flex-1 p-6 mr-8">
                        <form onSubmit={handleSearch} className="flex items-center  rounded-2xl bg-blue-950 mr-8">
                            <button type="submit" className="p-3 -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <input type="text" placeholder="Search..." className="mr-10 p-2 bg-blue-950 placeholder-slate-600" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </form>
                        <button onClick={goToCart} className="pl-3 pr-3 ml-4">
                            <svg data-name="Capa 1" id="Capa_1" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 p-1 text-white bg-white rounded-full" ><path d="M15.64,6.68a.32.32,0,0,0-.27-.14H6.17C6.08,5.63,6,4.94,6,4.92a.35.35,0,0,0-.35-.31h-1a.35.35,0,1,0,0,.69h.71c.12,1.19.53,5.26.63,6s.32,1.41,1.29,1.57a1.32,1.32,0,0,0-.56,1.06,1.33,1.33,0,0,0,2.66,0A1.32,1.32,0,0,0,9,13l1.28.1,1.27.11a1.3,1.3,0,0,0-.23.71,1.33,1.33,0,0,0,2.66,0,1.31,1.31,0,0,0-1-1.26.36.36,0,0,0-.17-.07c-.43,0-1.46-.1-2.5-.19s-2.25-.18-2.72-.2c-.65,0-.85-.24-1-1h0L14.41,11a.34.34,0,0,0,.33-.26l1-3.8A.35.35,0,0,0,15.64,6.68Zm-3,7.86a.63.63,0,0,1-.63-.63.64.64,0,0,1,.62-.64h0a.64.64,0,0,1,0,1.27ZM8,14.54a.64.64,0,1,1,.63-.63A.63.63,0,0,1,8,14.54Zm6.1-4.2-7.55.15c0-.36-.09-.8-.14-1.28H9.21a.38.38,0,0,0,.37-.38.37.37,0,0,0-.37-.37H6.36L6.24,7.24h8.68Z"/></svg>
                        </button>
                        <div className='flex items-center ml-4'>
                            <div className="rounded-full bg-center bg-cover inline-block w-12 h-12 " style={{ backgroundImage: `url(${profile.imageUrl})` }}></div>
                            <button className="ml-4 whitespace-nowrap inline-flex items-center justify-center text-lg font-black text-white">
                                {profile.name}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
