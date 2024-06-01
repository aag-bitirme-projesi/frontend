import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import orderService from '../../services/OrderService';
import modelService from '../../services/ModelService';

const Card = () => {
  // const [orderItems, setOrderItems] = useState([
  //   { id: 1, name: 'Data Module', price: 2.00},
  //   { id: 2, name: 'Color Module', price: 5.00}
  // ]);
  const navigate = useNavigate();

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    cvv: '',
    expMonth: '09',
    expYear: '2026',
    cardName: ''
  });

  const [orderItems, setOrderItems] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); 
  const modalRef = useRef(null);

  const handleDelete = async(id) => {
    try {
      await orderService.removeFromCart(id);
      setOrderItems(orderItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleInputChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePay = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    // setTimeout(() => {
    //   setIsLoading(false);
    //   const paymentIsValid = Math.random() > 0.5; 
    //   setPaymentStatus(paymentIsValid ? 'confirmed' : 'denied');
    // }, 2000);

    try {
      await orderService.pay(paymentDetails);
      setPaymentStatus('confirmed');
      navigate('/dashboard');
    } catch (error) {
      setPaymentStatus('denied');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsLoading(false);
    setPaymentStatus(null);
  };

  const fetchImage = async (modelInfo) => {
    try {
      const response = await modelService.modelPhoto(modelInfo);
      return response.data; // Assuming response.data contains the URL
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    const fetchData = async () => {
      try {
        const response = await orderService.shoppingCart(setOrderItems);
        const itemsWithImages = await Promise.all(
          response.data.map(async (item) => {
            console.log("developer: ", item.name.split('\\')[0]);
            console.log("model name: ", item.name);
            const imageUrl = await fetchImage({ username: item.name.split('/')[0], name: item.name });
            return { ...item, imageUrl };
          })
        );
        setOrderItems(itemsWithImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isLoading || paymentStatus) {
    return (
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50">
        <div ref={modalRef} className="text-center p-5 rounded-lg">
          {isLoading ? (
            <div class="loader border-t-2 rounded-full  border-yellow-500 bg-yellow-300 animate-spin aspect-square w-14 text-2xl flex justify-center items-center text-yellow-700">$</div>
          ) : (
            <>
              <p className="text-white text-xl">
                {paymentStatus === 'confirmed' ? 'Payment Confirmed! Redirecting...' : 'Payment Denied! Please try again.'}
              </p>
              <button onClick={handleClose} className="mt-3 bg-red-500 text-white px-4 py-2 rounded">Ok</button>
            </>
          )}
        </div>
      </div>
    );
  }

  const total = orderItems.reduce((acc, item) => acc + (item.price), 0);

  return (
    <div className='w-9/12 mt-32 ml-dashboard-table'>
      <div className="flex pt-10 pb-10 bg-white shadow-md rounded-lg">
        <div className="w-3/4 pb-6 pt-4 pl-10 pr-10">
          <h2 className="font-bold text-2xl mb-10">Your Order</h2>
          {orderItems.map(item => (
            <div key={item.id} className="flex bg-ebebeb justify-between rounded-xl items-center mb-4 pl-10 p-3 pr-10">
              <div className="flex items-center">
                <img src={`item.imageUrl`} alt={item.name} className="h-20 w-20 mr-4"/>
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
              <div className='text-center'>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => handleDelete(item.id)} className='mt-2 text-red-600 py-2 px-4 rounded-xl text-xl font-bold'>X</button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold mt-10 pr-10">Total: ${total.toFixed(2)}</div>
        </div>
        <div className="w-1/2 p-12 bg-blue-950 rounded-l-3xl">
          <h2 className="font-bold text-2xl mb-4 text-white">Payment Method</h2>
          <form onSubmit={handlePay}>
            <div className="mb-4 text-black">
              <label className="block font-bold text-white mb-1">Name Surname</label>
              <input type="text" value={paymentDetails.cardHolder} name="cardHolder" onChange={handleInputChange} className="w-full p-2 border rounded-xl"/>
            </div>
            <div className="mb-4 text-black">
              <label className="block font-bold text-white mb-1">Card Number</label>
              <input type="text" value={paymentDetails.cardNumber} name="cardNumber" onChange={handleInputChange} className="w-full p-2 border rounded-xl"/>
            </div>
            <div className='w-full flex'>
              <div className="mb-4 w-1/4 text-black">
                  <label className="block font-bold text-white mb-1">CVV</label>
                  <input type="text" value={paymentDetails.cvv} name="cvv" onChange={handleInputChange} className="w-full p-2 border rounded-xl"/>
              </div>
              <div className="mb-4 w-3/4 ml-10 text-black">
                  <label className="block font-bold text-white mb-1">Expiration Date</label>
                  <input type="text" value={paymentDetails.expiry} name="expiry"  className="w-full p-2 border rounded-xl"/>
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-purple-500 font-black text-white p-2 mt-6 rounded-xl ">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;
