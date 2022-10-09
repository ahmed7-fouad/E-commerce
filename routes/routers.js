import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home'
import Cart from '../pages/cart'
import Checkout from '../pages/checkout';
import Contact from '../pages/contact';
import Login from '../pages/login';
import Register from '../pages/register';
const Routers=()=>{
    return(
        <Routes>
        <Route path="/" element={<Navigate to='./home'/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
)
}
export default Routers;