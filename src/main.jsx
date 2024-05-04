import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blog/Blogs';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Register from './Components/Forms/Login/Register';
import Login from './Components/Forms/Login/Login';
import AuthProvider from './Components/Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/services",
        element:<Services></Services>
      },{
        path: "/about",
        element: <About></About>
      },{
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
  </React.StrictMode>,
)
