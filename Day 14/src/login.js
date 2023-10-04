import React, { useEffect , useState } from "react";
import "./login.css";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const[email,SetEmail] = useState("");
  const[password,SetPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangeUserName = (e) => {
    const value = e.target.value;
    SetEmail(value);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    SetPassword(value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        email: email,
        password: password,
      });
  
      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type : "EMAIL",payload:email})
      navigate('/home');

    } catch (error) {
      console.error('Error: ', error);
     
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <h1>Login</h1>
            <input
              name="email"
              type="email"
              placeholder="Enter your email-id"
              required
              value={email}
              onChange={handleChangeUserName}
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            />
            
           
            <button className="btn2" type="submit">
            <strong>Login</strong>
            </button>
            
          
          <p> Don't have an account?  
            <Link to="/Signup" className="link1">
            <strong>Register</strong>
            </Link>
          
          </p> 
          </div>
        </form>
      </div>
    </div>
  );
}