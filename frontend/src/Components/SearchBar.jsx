import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setsearch, showsearch,setshowsearch  } = useContext(ShopContext);
  const[visible,setvisible]=useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection') ){
        setvisible(true);
    }
    else{
        setvisible(false);
    }
  },[location])

  return showsearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          className='flex-1 outline-none bg-inherit text-sm'
          type='text'
          placeholder='Search'
          aria-label='Search input'
          title='Type to search'
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <img
          src={assets.cross_icon}
          alt='Close search'
          title='Close search'
          className='w-3 cursor-pointer'
          onClick={() => {
            setsearch('');         // Optional: clear search text on close
            setshowsearch(false);  // Hide the search bar
          }}
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
