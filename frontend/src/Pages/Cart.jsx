import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
   if(products.length>0){
     const tempData = [];

    for (const productId in cartItems) {
      const sizeMap = cartItems[productId];

      for (const size in sizeMap) {
        if (sizeMap[size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: sizeMap[size],
          });
        }
      }
    }
     setCartData(tempData);
    console.log(tempData);
   }

   
  }, [cartItems,products]);

  return (
    <div className='border-t pt-4'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {cartData.map((item, index) => {
        const productData = products.find((product) => product._id === item._id);
        if (!productData) return null;

        return (
          <div
            key={index}
            className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_1fr] items-center gap-4'
          >
            <img src={productData.image[0]} alt='' className='w-16 sm:w-20' />
            <div>
              <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
              <p className='text-xs text-gray-500'>Size: {item.size}</p>
              <p className='text-xs text-gray-500'>Qty: {item.quantity}</p>
            </div>
            <div className='flex text-sm font-medium items-center gap-4'>
              {currency}
              {(productData.price * item.quantity).toFixed(2)}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                alt=''
                className='w-4 h-auto cursor-pointer'
              />
            </div>
          </div>
        );
      })}

      {/* Summary Section - outside map */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button 
            onClick={()=>navigate('/placeorder')}
            className='bg-black text-white text-sm my-8 px-8 py-3'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
