import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         <div>
            <img src={assets.logo} alt='' className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio odit delectus est, dolores perspiciatis, sed at eum, culpa soluta in porro. Nostrum iusto minus, quod quasi ducimus in modi.
            </p>
           
            </div>   
            <div>
                <p className='TEXT-XL font-medium MB-5'>
                    COMPANY
                </p>
               <ul className='flex flex-col gap-1 text-gray-600'>
                   <li className='hover:text-gray-900'>HOME</li>
                   <li className='hover:text-gray-900'>ABOUT US</li>
                   <li className='hover:text-gray-900'>DELIVARY</li>
                   <li className='hover:text-gray-900'>PRIVACY AND POLICY</li>
               </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
             <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-789</li>
                <li>contact@forever.com</li>
             </ul>
          
          
            </div>
            <div>
                <hr/>
                <p className='py=5 tesxt-sm text-center'>Copy right 2025@ dorever.com-all policy reserved</p>
            </div>
        </div>
         
    </div>
  )
}

export default Footer