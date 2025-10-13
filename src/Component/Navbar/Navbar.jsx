import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart} from '../../Component/ContextReducer/ContextReducer.jsx'
import Badge from 'react-bootstrap/Badge';
import Modal from "../../Modal.jsx";
import Cart from '../../Pages/Cart/Cart.jsx';
import {assets} from '../../assets/assets.js'


const Navbar = () => {
  const[cartView,setCartView] = useState(false);
  const navigate = useNavigate();

   let data = useCart();

  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg  fst-italic navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-2 fst-italic" to="/"> <img className='logo w-50%' src={assets.logo} alt="" style={{ width: "120px", height: "80px" }} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-5" to="/about">About</Link>
        </li>
          {(localStorage.getItem("authToken"))?
          <li className="nav-item">
          <Link className="nav-link active fs-5" to="/myorder">My Orders</Link>
        </li>
          :""}


      </ul>
       {(!localStorage.getItem("authToken"))?
       <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/creatuser">SignUp</Link>
        </div>
        :
        <div>
          <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>MyCart{"  "}
           
            <Badge pill bg='danger'>{data.length}</Badge>

          </div>
          {cartView ? <Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
          <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>LogOut</div>
        </div>

        }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

