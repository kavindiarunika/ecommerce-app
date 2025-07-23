import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  
function App() {

 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
     <ToastContainer/>
     <Navbar/>
     <SearchBar/>
     
     <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/collection' element={<Collection/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path= '/contact' element={<Contact/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/placeorder' element={<PlaceOrder/>}/>
        <Route path= '/product/:productID' element={<Product/>}/>
        <Route path= '/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
