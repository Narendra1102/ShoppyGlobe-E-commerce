import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Lazy load page components for better performance
const Home = React.lazy(()=>import("./Components/Home"))
const Cart=React.lazy(()=>import("./Components/Cart.jsx"))
const ProductDetail = React.lazy(()=>import("./Components/ProductDetail"))
const Checkout = React.lazy(()=>import("./Components/Checkout"))
const NotFound = React.lazy(()=>import("./Components/NotFound"))

// React Router configuration
const router = createBrowserRouter([
  { 
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      { path:"/", element:<Home/> },
      { path:"/product/:id", element:<ProductDetail/> },
      { path:"/cart", element:<Cart/> },
      { path:"/checkout", element:<Checkout/> },
    ]

  },
  
])


createRoot(document.getElementById('root')).render(
  // Suspense fallback shown while lazy-loaded components are loading
  <Suspense fallback={<h2>Loading...</h2>}>
    <RouterProvider router={router}/>
  </Suspense>
)
