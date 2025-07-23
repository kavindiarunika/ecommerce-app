import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductsItems from './ProductsItems';

const BestSeller = () => {

    const {products} =useContext(ShopContext);
    const [bestseller,setbestseller] =useState([])


  useEffect(() => {
  if (products && products.length > 0) {
    const bestProduct = products.filter(item => item.bestseller === true);
    setbestseller(bestProduct.slice(0, 5));



  }
}, [products]);

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'Best'}   text2={'SELLERS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quam minus nostrum vitae? Distinctio excepturi officia animi, maxime quaerat porro odio. Numquam non iste consequatur architecto cumque nihil provident reiciendis!</p>
        </div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    bestseller.map((item,index)=>
    (
        <ProductsItems key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
    ))
}
</div>

    </div>
  )
}

export default BestSeller