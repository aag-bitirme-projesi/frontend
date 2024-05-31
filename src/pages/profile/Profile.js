import React, { useState, useRef } from 'react';
import Profilphoto from '../../assets/pics/profilphoto.png';

const Profile = () => {
    const [formData, setFormData] = useState({
        name: 'Gamze',
        surname: 'Ergin',
        email: 'Ergin.gamze12@gmail.com',
        password: 'Ergin.Gamze123',
        github: 'gamze1382',
        cvLink: 'https://pdf.sf.sf23'
    });

    const [profileImage, setProfileImage] = useState(Profilphoto);
    const fileInputRef = useRef(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleDelete = () => {
        // hesap silme işlemi yapılacak ve sonrasında çıkış yapıp ana sayfaya yönlendir
        console.log('Deleting account...');
    };

    const handleProfileImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-3xl ml-profile pl-8 pr-8 p-6 w-8/12 mt-48">
            <div className="flex items-center">
                <div className="w-1/3 pr-2">
                    <img
                        src={profileImage}
                        alt="Profil"
                        className="rounded-lg cursor-pointer"
                        onClick={handleProfileImageClick}
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className='w-2/3 pl-6'>
                    <div className='mb-6 font-black text-2xl border-b-2 '>
                        Profile
                    </div>
                    <div className="">
                        <div className="flex justify-between items-center mb-6">
                            <div className="w-full pr-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full pl-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="surname">
                                    Surname
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                                    id="surname"
                                    type="text"
                                    placeholder="Surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <div className="w-full pr-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                                    E-mail
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full pl-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <div className="w-full pr-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="github">
                                    GitHub Link
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                                    id="github"
                                    type="text"
                                    placeholder="GitHub Username"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full pl-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="cvLink">
                                    CV Link
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                                    id="cvLink"
                                    type="text"
                                    placeholder="CV Link"
                                    name="cvLink"
                                    value={formData.cvLink}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mr-2"
                                type="button"
                                onClick={handleDelete}
                            >
                                Delete Account
                            </button>
                            <button
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
