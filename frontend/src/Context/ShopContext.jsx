import { createContext, use, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log("Backend URL from context:", backendUrl); // <-- ADD THIS
  console.log("Full API Request URL:", backendUrl + "/api/product/list"); // <-- AND THIS

  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const [products, setproducts] = useState([]);
  const [token,settoken] =useState('')
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("select product size");
      return;
    }

    let cardData = structuredClone(cartItems);

    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }

    setcartItems(cardData);

    if(token){
        try{

          await axios.post(backendUrl + '/api/cart/add' , {itemId, size} , {headrs:{token}})
            
        }
        catch(error){
          console.log(error)
          toast.error(error.message)

        }
    }  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const category in cartItems) {
      for (const item in cartItems[category]) {
        const count = cartItems[category][item];
        if (count > 0) {
          totalCount += count;
        }
      }
    }

    return totalCount;
  };
  const updateQuantity = async(itemId, size, quantity) => {
    let cardData = structuredClone(cartItems);

    cardData[itemId][size] = quantity;
    setcartItems(cardData);

    if(token){
      try{
            await axios.post(backendUrl + '/api/cart/update',{itemId,size,quantity} ,{headers:{token}})
      }
      catch(error){

        console.log(error)
        toast.error(error.message)
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id == items);
      for (const item in cartItems) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const getproductData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log("Full API Response Data:", response.data);
      if (response.data.success) {
        setproducts(response.data.products);
      } else {
        toast.error(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const getusercart = async()=>{
    try{
      const response = await axios.post(backendUrl+ ' .api/cart/get' , {} , {headers:{token}})
      if(response.data.success){
        setcartItems(response.data.cardData);
      }
    }
    catch(error){
       toast.error(error.message);
       console.log(error);
    }
  }

  useEffect(() => {
    getproductData();
  }, []);

  useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      settoken(localStorage.getItem('token'))
      getusercart(localStorage.getItem('token')
    )
    }
  },[])
  const value = {
    updateQuantity,
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    cartItems,
    addToCart,
    getCartCount,
    getCartAmount,
    setcartItems,
    navigate,
    backendUrl,
    token,
    settoken
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
