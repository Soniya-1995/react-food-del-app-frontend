import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Signup = () => {
  const [UserApi, setUserApi] = useState({ name: "", email: "", password: "", geolocation: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/createuser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: UserApi.name,
          email: UserApi.email,
          password: UserApi.password,
          location: UserApi.geolocation
        })
      });

      const json = await response.json();

      if (response.ok) {
        alert("Signup successful! Please login now.");
        navigate('/login');
      } else {
        alert(json.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  const handleInput = (e) => {
    setUserApi({ ...UserApi, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: "var(--theme-gradient)" }}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-success fw-bold">Signup</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="name" value={UserApi.name} onChange={handleInput} required />

            <label className="form-label mt-2">Email address</label>
            <input type="email" className="form-control" name="email" value={UserApi.email} onChange={handleInput} required />
            <div className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={UserApi.password} onChange={handleInput} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" name="geolocation" value={UserApi.geolocation} onChange={handleInput} required />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger">Already a user?</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
