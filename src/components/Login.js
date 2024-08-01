import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Nav from '../components/Nav';
import home1 from '../resouse/hero image 2.png';
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming any non-empty email and password is valid
    if (email && password) {
      login();
      navigate('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  if (isAuthenticated) {
    navigate('/');
  }

  return (
    <div className='main'>
      <Nav />
      <div className='logindiv'>
        <div className='imgdiv'>
          <img src={home1} alt='hh'></img>
        </div>
        <div className="container">
          <h1>Login</h1>
          <p>Welcome back !!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label htmlFor="password">Password</label>
            <div className="forget-password">
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <a href="#">Forget Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="signup">
              <p>Don’t have an account yet? <a href="#">Sign up for free</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
