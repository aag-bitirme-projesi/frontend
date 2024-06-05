import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Profilphoto from '../../assets/pics/profilphoto.png';
import userService from '../../services/UserService';
import authService from '../../services/AuthService';
import { init } from 'emailjs-com';

const Profile = () => {
    const navigate = useNavigate();
    const [initialProfile, setInitialProfile] = useState({});
    const [formData, setFormData] = useState({  
        name: '',
        username: '',
        email: '',
        github: '',
        cvLink: '',
        profilePhoto: '',
        password: ''
    });
    const [cvFile, setCvFile] = useState(null);
    const [profilePhotoFile, setProfilePhotoFile] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await userService.profile();
            setInitialProfile({
                name: response.name || '',
                username: response.username || '',
                email: response.email || '',
                github: response.github || '',
                cvLink: response.cv || '',
                profilePhoto: response.profilPicture || '',
                password: ''
              });

              setFormData({
                name: response.name || '',
                username: response.username || '',
                email: response.email || '',
                github: response.github || '',
                cvLink: response.cv || '',
                profilePhoto: response.profilePicture || '',
                password: ''
              });
          } catch (error) {
            console.log(error);
            throw error;
          } 
        };
    
        fetchData();
      }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // const handleFileChange = (event) => {
    //   console.log();
    //   const { name, files } = event.target;
    //   if (name === 'cv') {
    //     setCvFile(files[0]); }
    //   // } else if (name === 'profilePhoto') {
    //   //   setProfilePhotoFile(files[0]);
    //   // }
    // };

    const handleProfileImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          if (event.target.name === 'cvLink') {
              setCvFile(file);
          } else {
              setProfilePhotoFile(file);
          }
      }
    };

    const prepareUpdatePayload = () => {
      const form = new FormData();
      for (const key in formData) {
        if (formData[key] !== initialProfile[key]) {
          form.append(key, formData[key]);
        }
      }
      if (cvFile) {
        form.append('cv', cvFile);
      }
      if (profilePhotoFile) {
        form.append('profilePicture', profilePhotoFile);
      }
      return form;
    };

    const handleDelete = () => {
        // hesap silme işlemi yapılacak ve sonrasında çıkış yapıp ana sayfaya yönlendir
        console.log('Deleting account...');
        userService.deleteAccount();
        authService.logout();
        navigate('/');
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const updatePayload = prepareUpdatePayload();
        try {
            const response = await userService.updateUser(updatePayload);
            console.log('Profile updated successfully:', response.data);
          } catch (error) {
            console.error('Error updating profile:', error);
          }
    };

    return (
        <div className="bg-white shadow-md rounded-3xl ml-profile pl-8 pr-8 p-6 w-8/12 mt-48">
          <div className="flex items-center">
            <div className="w-1/3 pr-2">
              <img src={formData.profilePhoto} alt="Profil" className="rounded-lg" onClick={handleProfileImageClick}/>
              <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
            </div>
            <div className='w-2/3 pl-6'>
              <div className='mb-6 font-black text-2xl border-b-2 '>
                Profile
              </div>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-full pr-4">
                      <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="w-full pl-4">
                      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                        Username
                      </label>
                      <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-full pr-4">
                      <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                        E-mail
                      </label>
                      <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="w-full pl-4">
                      <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                        Password
                      </label>
                      <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-full pr-4">
                      <label className="block text-black text-sm font-bold mb-2" htmlFor="github">
                        GitHub Link
                      </label>
                      <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                        id="github" type="text" placeholder="GitHub Username" name="github" value={formData.github} onChange={handleChange} />
                    </div>
                    <div className="w-full pl-4">
                      <label className="block text-black text-sm font-bold mb-2" htmlFor="cvLink">
                        CV Link
                      </label>
                      <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-afafaf leading-tight focus:outline-none focus:shadow-outline"
                        id="cvLink" type="file" placeholder={initialProfile.cvLink ? initialProfile.cvLink : "CV Link"} name="cvLink" value={formData.cv} onChange={handleFileChange} />
                      {/* <input id="cvLink" type="file" class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"/> */}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mr-2" type="button" onClick={handleDelete}>
                      Delete Account
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Profile;
