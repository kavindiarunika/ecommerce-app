import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders from the backend
  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message || 'Failed to load orders');
      }
    } catch (error) {
      toast.error(error.message || 'Network Error');
    }
  };

  const stausHandler= async(event , orderId)=>{
     try{
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value},{headers:{token}})

      if(response.data.success){
        await fetchAllOrders();

      }
      else{
        console.log(error)
        toast.error(response.error.message);

      }

     }
     catch(error){
      toast.error(error.message)

     }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.length === 0 ? (
          <p>No orders available.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <img className='w-12' src={assets.parcel_icon} alt='Parcel Icon' style={{ width: '30px' }} />
              <div>
                {order.item.map((item, i) => (
                  <p key={i} className='py-0.5'>
                    {item.name} x {item.quantity} <span>({item.size})</span>
                  </p>
                ))}
              </div>
              <p>
                <strong>Customer:</strong> {order.address.firstname} {order.address.lastname}
              </p>
              <div>
                <p><strong>Street:</strong> {order.address.street}</p>
                <p><strong>City:</strong> {order.address.city}</p>
              </div>
              <p>{order.address.phone}</p>
              <div>
                <p>Items : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>payment :{order.payment ? 'Done' :'pending'}</p>
                <p>Date:{new Date(order.date).toLocalDateString()}</p>
                </div>
                <p>{currency}{order.amount}</p>
            <select name=" " id="" onChange={(event)=>stausHandler(event._id)}>
                <option value="order placed">orderplaced</option>
                <option value="packing">packing</option>
                <option value="shipped">shipped</option>
                <option value="out for delivey">out for delivery</option>
                <option value="deliverd">Deliverd</option>

            </select>
            
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
