import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import "./login.css";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const [UserApi, setUserApi] = useState({ email: "", password: "" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: UserApi.email, password: UserApi.password })
    });

    const json = await response.json();
    if(!json.success){
      alert("Enter Valid Credentials")
    }
    if(json.success){
      localStorage.setItem("userEmail",UserApi.email);
      localStorage.setItem("authToken",json.authtoken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
  }
   
  function handleInput(e) {
    setUserApi({ ...UserApi, [e.target.name]: e.target.value })

  }

  return (
    <div>
      <div className="login-container">
      <div className="login-card">
        <h3 className="text-center mb-4 fw-bold">🔐 Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={UserApi.email} onChange={handleInput} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={UserApi.password} onChange={handleInput} />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to='/creatuser' className='m-3 btn btn-danger'>I'm a new user</Link>
        </form>
       </div>
    </div>
    </div>
  )
}

export default Login 