import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {Link} from 'react-router-dom'

const ProductsItems = ({id,image,name,price}) => {

    const {currency} =useContext(ShopContext)
  return (
  <Link className='text-gray-700 cursor-pointer ' to= {`/product/${id}`}>
    <div className='overflow-hidden'>
            <img src={image[0]} alt='' className='hover:scale-110 translation ease-in-out'/>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium '>{currency}{price}</p>
    </div>
  
  
  </Link>
  )
}

export default ProductsItems