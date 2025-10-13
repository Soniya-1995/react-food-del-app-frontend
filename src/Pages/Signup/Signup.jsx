import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [UserApi,setUserApi] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const response = await fetch("http://localhost:3001/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body : JSON.stringify({name:UserApi.name,email:UserApi.email,password:UserApi.password,location:UserApi.geolocation})
       });
       
   }
   function handleInput(e){
    setUserApi({...UserApi,[e.target.name]:e.target.value})

   }
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: "var(--theme-gradient)" }}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-success fw-bold">Signup</h3>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Username</label>
    <input type="text" className="form-control" name="name" value={UserApi.name} onChange={handleInput}/>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={UserApi.email} onChange={handleInput}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={UserApi.password} onChange={handleInput}/>
  </div>
   <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="geolocation" value={UserApi.geolocation} onChange={handleInput}/>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to = '/login' className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
</div>
    </div>
  )
}

export default Signup
