import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { auth } from '../../firebase'
import './Login.css'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMessage, setAuthMessage] = useState('')
  const [userData, setUserData] = useState('')

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          const message = `Login successful for ${user.email}`;
          setAuthMessage(authMessage => message);

          // Change the image source when login is successful
          // document.getElementById("userImage").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvp_mDZ7oX7W1jsoIfLcolnFDR9L1W_asDgHEj8vgLuA&s";
      })
      .catch((error) => {
          const message = `Login failed: ${error.message}`;
          setAuthMessage(authMessage => message);
      });
  }

  const handleForgetPassword = (e) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
          const message = "Password reset email sent. Check your inbox.";
          setAuthMessage(authMessage => message);
      })
      .catch((error) => {
          const message = `Password reset failed: ${error.message}`;
          setAuthMessage(authMessage => message);
      });
  }
  return (
    <>
      <h1>Welcome to our Signup and Login Page</h1>
      <button id="signupDriverBtn"><Link to={`/signup/user`}>Signup as Car Driver</Link></button>
      <button id="signupRentalBtn"><Link to={`/signup/rental`}>Signup as Rental</Link></button>

      <h1>Login</h1>
      <form onSubmit={signIn}>
        <div>
            <label htmlFor="loginEmail">Email:</label>
            <input 
              type="email" 
              id="loginEmail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
        </div>
        <div>
            <label htmlFor="loginPassword">Password:</label>
            <input 
              type="password" 
              id="loginPassword" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
        </div>
        <button type='submit'>Login</button>
      </form>
        <button onClick={handleForgetPassword}>Forget Password?</button>
      <br /><br />

      <div id="authMessage">{authMessage}</div>
    </>
  )
}

export default Login;