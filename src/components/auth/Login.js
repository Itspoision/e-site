import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/women');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-container">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Please enter your details</p>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="email"
                name="email"
                placeholder="Email" 
                className="login-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="password"
                name="password"
                placeholder="Password" 
                className="login-input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <span className="forgot-password">Forgot Password?</span>
            </div>

            <button type="submit" className="login-button">
              Log In
            </button>
          </form>

          {/* <div className="login-divider">
            <span>or</span>
          </div>

          <button className="google-button">
            <img src="/google-icon.png" alt="Google" />
            Sign in with Google
          </button> */}

          <p className="signup-link">
            Don't have an account? <span onClick={goToSignup}>Sign up</span>
          </p>
        </div>
      </div>
      <div className="login-right">
        {/* Background image will be added via CSS */}
      </div>
    </div>
  );
};

export default Login;