import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
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

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-form-container">
          <h2>Create Account</h2>
          <p className="signup-subtitle">Please enter your details</p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text"
                name="name"
                placeholder="Name" 
                className="signup-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email"
                name="email" 
                placeholder="Email" 
                className="signup-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="password"
                name="password"
                placeholder="Password" 
                className="signup-input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <div className="signup-divider">
            <span>or</span>
          </div>

          <button className="google-button">
            <img src="/google-icon.png" alt="Google" />
            Sign up with Google
          </button>

          <p className="login-link">
            Already have an account? <span onClick={goToLogin}>Log in</span>
          </p>
        </div>
      </div>
      <div className="signup-right">
        {/* Background image will be added via CSS */}
      </div>
    </div>
  );
};

export default Signup;