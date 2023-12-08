import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:9000/login', {
        email,
        password,
      });

      const { userId, message } = response.data;
      alert(message);

      // Set the userId in the context
      setUser(userId);

      navigate("/fileupload");

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='Login_container'>
      <div className='Login_form'>
        <h1 className='heading'>Login Page</h1>
        <div className="inputGroup">
          <label className="login_label" htmlFor="username">
            Email:
          </label>
          <input
            type="text"
            placeholder="Email"
            className='login_input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label className="login_label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            className='login_input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className='login_button'>Login</button>
        <p>Don't have an account please <span onClick={() => navigate("/")} className='signUp_link' >Sign Up</span></p>
      </div>

    </div>
  );
};

export default LoginPage;
