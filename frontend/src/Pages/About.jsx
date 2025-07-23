import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>

        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>

        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img src={assets.about_img}
                 alt=''
                 className='w-full md:max-w-[450px] '/>

          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat illo exercitationem debitis dolore eius, labore velit? Sunt eius ex cumque nostrum vel, laudantium, voluptatibus inventore maxime ipsam, officia velit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem et atque ducimus porro omnis, repellat quo necessitatibus aspernatur magni quibusdam eos sapiente vitae dolorem blanditiis, maiores minus saepe tempore quisquam.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium recusandae, ipsum aliquid reprehenderit in ex nobis. Tempora fugiat magni ut aperiam vel, quas quae maxime labore saepe cum, ad iusto?</p>
          </div>
        </div>
        <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>


        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6 border-gray-300'>

            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, atque blanditiis dolorem nostrum quae saepe at optio nisi delectus, dolores iste voluptate? Vero laboriosam eos laborum vitae animi officia ut.</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6 border-gray-300'>

            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, atque blanditiis dolorem nostrum quae saepe at optio nisi delectus, dolores iste voluptate? Vero laboriosam eos laborum vitae animi officia ut.</p>

          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-gray-300'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt harum non, sunt facilis quae odio? Corporis, repellendus id excepturi sit exercitationem corrupti aliquam consequuntur eligendi itaque dolore alias dignissimos quos.</p>
           
          </div>

        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About