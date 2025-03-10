import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { RiAccountCircle2Line, RiLockPasswordLine, RiLoginCircleFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

import "./Login.css";

function Login() {
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  // const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
       ` http://localhost:8000/api/v1/users/login`,
        formdata
      );

      alert('Login Successful');
      // navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      setError(error.response?.data?.message || 'Error during login');
    }
  };

  return (
    <div className="login">
      <h3>User Login</h3>

      <form className="login-container" onSubmit={handleLoginSubmit}>
        <h3>Welcome Back</h3>

        <div className="username">
          <RiAccountCircle2Line />&nbsp;
          <input
            placeholder="Username"
            id="username"
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="email">
          <MdOutlineMailOutline />&nbsp;
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
            id="email"
          />
        </div>

        <div className="password">
          <RiLockPasswordLine />&nbsp;
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            required
            id="password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="login-btn">
          <RiLoginCircleFill />&nbsp;
          <button type="submit">Login</button>
        </div>

        <div className="signup">
          <p>New User? Register here!</p>
          <button type="button" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

