import React, { useState } from 'react';
import './SignUpForm.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./SignUpForm.css"

const SignUpForm = () => {
const [name, setName] = useState('');
const [UName, setUName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  //const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleChangeUName = (e) => {
    setUName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
     setConfirmPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    try { 
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/register', {
        name :name,
        UName: UName,
        email:email,
        mobilenumber:mobile,
        password:password,
      });

      if (response.status === 200) {
        navigate('/');
        setName('');
        setUName('');
        setMobile('');
        setPassword('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error: ',error);

    }

  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
           required onChange={handleChangeName} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile-number">Mobile Number:</label>
          <input
            type="text"
            id="mobile-number"
            value={mobile}
            required onChange={handleChangeMobile}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={UName}
            required onChange={handleChangeUName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            required onChange={handleChangeEmail}
          />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            required onChange={handleChangePassword}
          />
          <button 
          type="button" 
          onClick={togglePasswordVisibility} 
          className="toggle-password">
          {showPassword ? 'Hide' : 'Show'}
        </button>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            value={confirmPassword}
            required onChange={handleChangeConfirmPassword}
          />
        </div>
      </div>

          <button type="submit">Create Account</button>
          <p> Already have an account? 
          <Link to="/" className="link3">
          <strong> <center>Back to Login</center></strong>
          </Link>
          </p>
      </form>
    </div>
  );
};

export default SignUpForm;