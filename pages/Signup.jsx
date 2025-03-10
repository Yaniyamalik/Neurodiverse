import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';  
import "./Signup.css";

export const Signup = () => {
  const [message, setMessage] = useState('');
  // const navigate = useNavigate();
  
  const [formdata, setFormdata] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    neurotype: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
       ` http://localhost:8000/api/v1/users/register`, 
        formdata
      );

      alert("Registration Successful");
      // navigate("/login"); // Redirect after success
    } catch (error) {
      setMessage("Registration Failed. Please try again.");
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleRegisterSubmit} className="register-container">
        <h3>Create your Account</h3>
        
        <div className="username">
          <label htmlFor="username">Name</label> 
          <input
            placeholder="username"
            id="username"
            name="username"
            type="text"
            value={formdata.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="email">
          <label htmlFor="email">Email</label> 
          <input
            placeholder="email"
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            required
            id="email"
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label> 
          <input
            placeholder="password"
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            required
            id="password"
          />
        </div>

        <div className="role">
          <label htmlFor="role">Role</label>
          <select name="role" value={formdata.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="listener">Listener</option>
            <option value="psychologist">Psychologist</option>
          </select>
        </div>

        <div className="neurotype">
          <label htmlFor="neurotype">Neurotype</label>
          <select name="neurotype" value={formdata.neurotype} onChange={handleChange} required>
            <option value="">Select Neurotype</option>
            <option value="Other">Other</option>
            <option value="ADHD">ADHD</option>
            <option value="Autistic">Autistic</option>
            <option value="Dyslexic">Dyslexic</option>
            <option value="Dyspraxic">Dyspraxic</option>
            <option value="Tourette's">Tourette's</option>
          </select>
        </div>
      
        <button type="submit">Register</button>
      </form>

      {message && <p className="error-message">{message}</p>}
    </div>
  );
};
