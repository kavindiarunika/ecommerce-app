import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
        </div> 

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src={assets.contact_img}
               alt=''
               className='w-full md:max-w-[480px]'/>

          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>140/2 Colombo ,Sri Lanka</p>
            <p className='text-gray-500'>Tel:(415) 5555-555<br/>Email: kavindiarunika26@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Cateers al Flowers</p>
            <p className='text-gray-500'>Lern more about our team</p>
             <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
          </div>
          </div> 
          <NewsLetterBox/>
    </div>
  )
}

export default Contact