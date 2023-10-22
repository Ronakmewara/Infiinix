import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {
   
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Homepage } from './Components/Homepage';
import { Expertise } from './Components/Expertise';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Work } from './Components/Work';
import { About } from './Components/About';
import { Pricing } from './Components/Pricing';
import {useEffect} from "react";
 
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createBrowserRouter([
  {
    path:"/",
     Component:Homepage
  },
  {
    path:"/Expertise",
    Component:Expertise
  },
  {
    path:"/Work",
    Component:Work
  },
  {
    path:"/About",
    Component:About
  },
  {
    path:"/Pricing",
    Component:Pricing
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
    
  </React.StrictMode>
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
