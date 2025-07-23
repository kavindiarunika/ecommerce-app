import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductsItems from '../Components/ProductsItems'

const Collection = () => {
  const { products,search,showsearch } =useContext(ShopContext)
  const [showfilter,setshowfilter] =useState(false)
  const[filterproducts,setfilterproducts] =useState([]);
  const [category,setcategory]=useState([]);
  const [subCategory,setSubcatagory] =useState([]);
  const [sortType,setsortType]=useState('relavent')

  const toggleCatagory =(e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev =>prev.filter(item=>item !== e.target.value))

    }
    else{
      setcategory(prev =>[...prev,e.target.value])
    }
  }
  const toggleSubcatagory =(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubcatagory(prev =>prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubcatagory(prev =>[...prev,e.target.value])
    }
  }

  useEffect(()=>{
    setfilterproducts(products)
  },[])

  useEffect(()=>{
    console.log(category)
  },[category])

  const applyFilter =()=>{
    let productcopy  = products.slice()

    if(showsearch && search){
      productcopy=productcopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0){
      productcopy = productcopy.filter(item =>category.includes(item.category))
    }
    if(subCategory.length>0){
      productcopy = productcopy.filter(item =>subCategory.includes(item.subCategory))
    }
    setfilterproducts(productcopy)
  }
  useEffect(()=>{
    applyFilter(); 
},[category,subCategory,search,showsearch,products])

const sortProduct =()=>{

  let fpcopy =filterproducts.slice();

  switch(sortType){
    case 'low-high':
      setfilterproducts(fpcopy.sort((a,b)=>(a.price-b.price)));
      break;

   case 'hight-low':
    setfilterproducts(fpcopy.sort((a,b)=>(b.price - a.price)))

    default:
      applyFilter();
      break;

  }

    
}
useEffect(()=>{
  sortProduct();
},[sortType])

   return (
    <div className='flex xlex-col sm:fkwx-row gap-1 sm:gap-10 pt-10 border-t'>
   {/*filter option */}
   <div className='min-w-60'>
    <p 
    onClick={()=>setshowfilter(!showfilter)}
    className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER</p>

    <img src={assets.dropdown_icon} alt='' className={`h-3 sm:hidden  ${showfilter ? 'rotate-90':''}`}/>
    
    {/*filter category */}
    <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter? '' :'hidden'} sm:block`}>
     <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
    <div className='flex flex-col gap-2 font-light text-gray-700'>
        <p className='flex gap-2'>
          <input 
          className='w-3'
          name='category'
          type='checkbox'
          onChange={toggleCatagory}
          value={'Men'}
/>Men
        </p>
        <p className='flex gap-2'>
          <input 
          className='w-3'
          name='category'
          type='checkbox'
          onChange={toggleCatagory}
          value={'Women'}
/>Women
        </p>
        <p className='flex gap-2'>
          <input 
          className='w-3'
          name='category'
          type='checkbox'
          onChange={toggleCatagory}
          value={'Kids'}
/>Kids
        </p>
    </div>
    
    </div>
    {/*subcategory filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter? '' :'hidden'} sm:block`}>
     <p className='mb-3 text-sm font-medium'>TYPE</p>
    <div className='flex flex-col gap-2 font-light text-gray-700'>
        <p className='flex gap-2'>
          <input 
          className='w-3'
          name='category'
          type='checkbox'
          onChange={toggleSubcatagory}
          value={'Topwear'}
/>Topwear
        </p>
        <p className='flex gap-2'>
          <input 
          className='w-3'
          name='category'
          type='checkbox'
          onChange={toggleSubcatagory}
          value={'BottomWear'}
/>BottomWear
        </p>
        <p className='flex gap-2'>
          <input 
          className='w-3'
          name='category'
          type='checkbox'
          onChange={toggleSubcatagory}
          value={'Winterwear'}
/>Winterwear
        </p>
    </div>
    
    </div>

   </div>

   {/*right side */}
   <div className='flex-1'>
    <div className='flex justify-between text-base sm:text-2xl mb-4'>
           <Title text1={'ALL'} text2={'COLLECTION'}/>
           {/*production sort */}

           <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
               <option value="relavent">Sort by:Relavent</option>
               <option value="low-high">Sort by:low to high</option>
               <option value="high-low">Sort by:high to low</option>
           </select>
    </div>
    {/*map products */}

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4'>
        {
          filterproducts.map((item,index)=>(
            <ProductsItems key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
    </div>

   </div>

    </div>
  )
}

export default Collection