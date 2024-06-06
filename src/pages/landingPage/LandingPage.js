import React, { useState, useEffect } from 'react'
import PP from "../../assets/pics/profilphoto.png"
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import modelService from '../../services/ModelService';

const LandingPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
//   const products = [
//     { id: 1, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "../../assets/pics/illustration.png" },
//     { id: 2, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 3, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 4, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 5, title: "Casfsafasfomponent Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 6, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 7, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 8, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 9, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 10, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 11, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 12, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 13, title: "as Model", description: "The hardware selection and 3D models of and 3D models of and 3D models of and 3D models of and 3D models of", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 14, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 15, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 16, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 17, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 18, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 19, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
//     { id: 20, title: "Component Model", description: "The hardware selection and 3D models of ...", price: "$10", image: "/assets/pics/illustration.png" },
// ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleViewDetails = (modelId) => {
    navigate(`/details/${modelId}`);
  };

  const handleViewDetails_sales = (modelId) => {
    navigate(`/details_sales/${modelId}`);
  };

  useEffect(() => {
    console.log("here??");
    const fetchData = async () => {
      try {
        console.log("l1");
        const response = await modelService.allModels();
        console.log(response);
        //setProducts(response);

        const formattedData = response.map((model) => ({
          id: model.id,
          name: model.name.split('\\')[1],
          price: model.price,
          description: model.description,
          photo: model.images[0] || PP
        }));

        setProducts(formattedData);
      } catch (error) {
        console.log(error);
        setProducts([]);
        throw error;
      } 
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-blue-950 rounded-3xl p-6 w-9/12 ml-dashboard-table mt-16">
              <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}  onClick={() => handleViewDetails_sales(product.id)}  className="p-4">
              <img className="product-image rounded-lg mb-4" src={product.photo} alt="product" />
              <h5 className="text-lg font-bold text-white mb-2">
                {product.name.substring(0, 17)}
              </h5>
              <p className="text-gray-400 text-sm mb-4" >
                {product.description.substring(0, 50)}...
              </p>
            </div>
          ))}
        </Slider>
              
            <div className="flex text-3xl text-white font-bold ml-4 ">
                <p>
                    Model 
                </p>
                <p className="ml-2 text-red-700 font-black">
                     FOR SALE
                </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg mt-6 ">
                <div className="grid grid-cols-5 gap-4 ">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-2xl p-4 flex flex-col">
                            {/* <img className="rounded-t-lg mb-4" src={product.image} alt="product" /> */}
                            <img className="product-image rounded-lg mb-4" src={product.photo} alt="product" />
                            <h5 className="text-lg font-bold text-gray-900 mb-2">{product.name.substring(0, 17)}</h5>
                            <p className="text-gray-700 text-sm mb-4">{product.description.substring(0, 50)}...</p>
                            <div className="flex w-full items-center">
                            <div data-tooltip={product.price} className="button">
                                <button className="button-wrapper">
                                <div className="text">Sepete Ekle</div>
                                    <span className="icon">
                                    <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <button onClick={() => handleViewDetails_sales(product.id)} className="but">
                                    <span className="span">🔎</span>
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
};

export default LandingPage;
