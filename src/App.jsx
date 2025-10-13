import React from 'react'
import Home from './Pages/Home/Home'
import {HashRouter, Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './Pages/Signup/Signup.jsx';
import CartProvider from './Component/ContextReducer/ContextReducer.jsx';
import MyOrders from './Pages/MyOrders/MyOrders.jsx';
import Placeorder from './Pages/PlaceOrder/Placeorder.jsx';
import About from './Pages/About/about.jsx';
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <CartProvider>
    <HashRouter>
    <Routes>
       <Route path='/' element= {<Home/>} ></Route>
       <Route path='/login'element={<Login/>}></Route>
       <Route path='/creatuser'element={<Signup/>}></Route>
       <Route path='/myorder'element={<MyOrders/>}></Route>
        <Route path='/order'element={<Placeorder/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </HashRouter>
    </CartProvider>
    </div>
    
  )
}

export default App
