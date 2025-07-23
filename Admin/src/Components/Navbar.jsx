import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({settoken}) => {
  return (
    <div className='flex items-center px-[4%] justify-between'>
          <img src={assets.logo} alt ="" className='w-[max(10%,80px)]'/>
          <button 
                onClick={()=>settoken(' ')}
                className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Logout</button>


    </div>
  )
}

export default Navbar