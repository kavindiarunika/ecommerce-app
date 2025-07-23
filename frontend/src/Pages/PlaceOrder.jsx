import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {

  const [method ,setmethod] =useState('cod');
  const [formData,setformData ] =useState({
    firstname:'',
    lastname:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  });

  const onChangeHandler =(event)=>{
       const name =event.target.name;
       const value = event.target.value;

       setformData(data =>({...data,[name]:value}))


  }

  const onSubmitHandler =async (event)=>{
          event.preventDefault();
          try{

            let orderitems =[];
            
            for(const items in cartItems){
              for(const item in cartItems[items]){

                if(cartItems[items][item] >0){
                     const itemInfo =structuredClone(products.find(product =>product._id === items));
                     
                     if(itemInfo){
                       itemInfo.size = item
                       itemInfo.quantity = cartItems[items][item]
                       orderitems.push(itemInfo);


                      }

                }
              }

            }
               let orderData={
            address:formData,
            items:orderitems,
            amount:getCartAmount() + delivery_fee
          }

          switch(method){

            case 'cod':
              const response = await axios .post(backendurl + '/api/order/place' , orderData, {headers:{token}})
              if(response.data.success){
                setCartItems({})
                navigate('/orders')
              }
              else{
                toast.error(response.data.message)
                
              }

              break;

              default:
                break;
          }

          }
       
          catch(error){
            console.log(error)
            toast.error(error.message)

          }
  }
  const {navigate,backendurl,token,cartItems,setCartItems,delivery_fee,products,getCartAmount} =useContext(ShopContext);

  return (
    <form className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-fu;; sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>

          <Title text1={'DELIVERY'} text2 ={'INFORMATION'}/>


        </div>
        <div className='flex gap-3'>
                 <input type='text'
                        placeholder='frist name'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='firstname'
                        value={formData.firstname}
                        required/>
                 <input type='text'
                        placeholder='last name'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='lastname'
                        value={formData.lastname}
                        required/>

        </div>
          <input type='email'
                        placeholder='email'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='email'
                        value={formData.email}
                        required/>

           <input type='text'
                        placeholder='Street'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='street'
                        value={formData.street}
                        required/>


        
        <div className='flex gap-3'>
                 <input type='text'
                        placeholder='City'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='city'
                        value={formData.city}
                        required/>
                 <input type='text'
                        placeholder='State'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='state'
                        value={formData.state}
                        required/>

        </div>
          
        <div className='flex gap-3'>
                 <input type='number'
                        placeholder='Zip code'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='zipcode'
                        value={formData.zipcode}
                        required/>
                 <input type='text'
                        placeholder='Country'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='country'
                        value={formData.country}
                        required/>

       </div> 
        <input type='number'
                        placeholder='Phone number'
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                        onChange={onChangeHandler}
                        name='phone'
                        value={formData.phone}
                        required/>
      </div>
      
        {/*------------------right side------------------------ */}

        <div className='mt-8'>
          <div className='mt-8 min-w-80 '>
            <CartTotal/>

          </div>
          <div className='mt-12'>
            <Title text1={'PAYMENT'} TEXT={'METHOD'}/>

            {/*-------------payment method selection-------------------- */}
          <div className='flex gap-3 flex-col lg:flex-row '>
              <div onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-600  '>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500': ' '}`}></p>
                <img src={assets.stripe_logo}
                     alt=''
                     className='h-5 mx-4'/>
             
          </div>
         
              <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border-1  p-2 px-3 cursor-pointer border-gray-600  '>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500': ' '}`}></p>
                <img src={assets.razorpay_logo}
                     alt=''
                     className='h-5 mx-4'/>
             
          </div>
        
              <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-600  '>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500': ' '}`}></p>
               <p className='text-gray-500  mx-4'>CASH ON DELIVERY</p>
              </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
            type='submit'
            className='bg-black text-white py-3 px-16 text-sm'>
              PLACE ORDER
            </button>

          </div>
          </div>

        </div>
    </form>
  )
}

export default PlaceOrder