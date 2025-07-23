import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
   <ShopContextProvider>
    
      <App/>
    
   </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
