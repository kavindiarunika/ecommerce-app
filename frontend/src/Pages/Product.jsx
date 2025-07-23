import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Relatedproducts from '../Components/Relatedproducts';

const Product = () => {
  const { productID } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);

  const [productdata, setproductdata] = useState(null);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('');

  useEffect(() => {
    const fetchProductData = () => {
      const foundProduct = products.find(item => item._id === productID);
      if (foundProduct) {
        setproductdata(foundProduct);
        setimage(foundProduct.image[0]);
      }
    };
    fetchProductData();
  }, [productID, products]);

  if (!productdata) {
    return <div className='text-center py-10 text-gray-500'>Loading...</div>;
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 flex-col sm:flex-row'>
        {/* Product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productdata.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                onClick={() => setimage(item)}
                alt='Product Thumbnail'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt='Main Product' className='w-full h-auto' />
          </div>
        </div>

        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img src={assets.star_icon} alt='' key={i} className='w-[14px]' />
            ))}
            <img src={assets.star_dull_icon} alt='' className='w-[14px]' />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productdata.price}
          </p>

          <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description}</p>

          <p className='mt-8'>Select Size</p>
          <div className='flex gap-2 mt-2'>
            {productdata.sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setsize(item)}
                className={`py-2 px-4 rounded-md cursor-pointer transition-all
                  ${
                    item === size
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 hover:bg-amber-400'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button 
          onClick={()=>addToCart(productdata._id,size)}
          className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-6'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original product</p>
            <p>Cash on Delivery is available</p>
            <p>Easy return within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description & Review section */}
      <div className='pt-10'>
  <div className='flex'>
    <b className='border border-gray-400 px-5 py-3 text-sm'>Description</b>
    <p className='border border-gray-400 px-5 py-3 text-sm'>Review (122)</p>
  </div>
  <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500'>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae accusamus, rerum culpa nemo ad
      itaque voluptatibus illum dicta ex, alias enim facere velit tempore in nobis sint, distinctio mollitia!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae accusamus, rerum culpa nemo ad
      itaque voluptatibus illum dicta ex, alias enim facere velit tempore in nobis sint, distinctio mollitia!
    </p>
  </div>
</div>
{/*------------------display related product------------------------ */}

<Relatedproducts category={productdata.category} subCategory={productdata.subCategory}/>
</div>
  );
};

export default Product;
