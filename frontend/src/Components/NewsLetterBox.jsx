import React from 'react'

const NewsLetterBox = () => {
    const OnSubmitHanlder =()=>{
   event.preventDefault();
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit excepturi suscipit officia recusandae eligendi, dolore modi facilis aut nisi ullam perspiciatis! Dicta deserunt perspiciatis delectus omnis quisquam sed, facilis ex.
        </p>
        <form
         onSubmit={OnSubmitHanlder}
         className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email"
                   placeholder='enter your email'
                   className='w-full sm:flex-1 outline-0 '/>
                   <button type='submit' className='bg-black text-white  etxt-xs py-5 px-10'>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsLetterBox