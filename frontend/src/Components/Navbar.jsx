import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {

      const [visible,setvisible]=useState(false);

      const {setcartItems,setshowsearch,getCartCount,token,settoken,navigate}=useContext(ShopContext);
          

      const logout = ()=>{
        navigate('/login')
       localStorage.removeItem('token')
       settoken(' ');
       setcartItems({})
       
      }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       
    <Link to='/'><img src={assets.logo} alt='' className='w-36'/></Link>   

       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

           <NavLink to='/' className='flex flex-col items-center gap-1 '>
                  <p>HOME</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
           </NavLink>


           <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                  <p>COLLECTION</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                  <p>ABOUT</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
                  <p>CONTACT</p>
                  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

       </ul>

       <div className='flex items-center gap-6'>
        <img  onClick={()=>token ? null : navigate('/login')} src={assets.search_icon} alt='' className='w-5 cursor-pointer' />
    

    {/*.................drop down----------------- */}
       {token &&
       
        <div className='group relative'>
           <Link to='/login'> <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} alt='' className='w-5 cursor-pointer'/></Link>
             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl'>
                     <p className='cursor-pointer hover:text-black'>My Profile</p>
                     <p onClick={()=>navigate('/order')} className='cursor-pointer hover:text-black'>Orders</p>
                     <p className='cursor-pointer hover:text-black' onClick={logout}> Logout</p>
                 </div>
             </div>
        </div>}
       <Link to='/cart' className='relative'>
              <img src={assets.cart_icon} alt='' className='w-5 min-w-5  '/>
               <p className='absolute roght-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>

      
       </Link>
       <img onClick={()=>setvisible(true)} src={assets.menu_icon} alt='' className='w-5 cursor-pointer sm:hidden'/>
       </div>
       {/*sidebar menu for small screens */}
       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick ={()=>setvisible(false)}className='flex items-center gap-4 p-3'>
            <img src={assets.dropdown_icon} alt='' className='h-4 rotate-180'/>               
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setvisible(false)} to='/'>HOME</NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/collection'>COLLECION</NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setvisible(false)} to='/contact'>CONTSCT</NavLink>
        </div>
       </div>
    </div>
  )
}

export default Navbar