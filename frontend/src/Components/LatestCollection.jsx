import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductsItems from './ProductsItems'

const LatestCollection = () => {
    const {products} =useContext(ShopContext)

    const [latestproduct,setLatestproduct] =useState([]);

    useEffect(()=>{
        setLatestproduct(products.slice(0,10))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
           <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum obcaecati incidunt aliquam ipsa facilis laudantium reiciendis atque repellendus temporibus ducimus, eligendi natus iste consequuntur quo possimus necessitatibus vel dicta corporis.
          </p>
       
        </div>
        {/*rendering products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-4'>
              {
                latestproduct.map((item,index)=>(
                  <ProductsItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
              }
        </div>

    </div>
  )
}

export default LatestCollection