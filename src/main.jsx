import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Cart from './Component/Cart/Component/Cart.jsx';
import MainAuth from './Component/Authentication/MainAuth.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/cart",
    element: <div><Cart /></div>
  },
  {
    path: "/auth",
    element: <div><MainAuth /></div>
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)

