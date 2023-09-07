import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="container">
       <div className='header'> 
        <div className='text'>Log In </div>
        <div classname='line'></div>      
       </div>

       <div className='inputs'>
        <div className='ind_input'>
          <img src="" alt=""></img>
          <input type='text' placeholder="Phone or Email"></input>
        </div>
        <div className='ind_input'>
          <img src="" alt=""></img>
          <input type='password' placeholder='Password'></input>
        </div>
       </div>

       <div className='footer'>
          <div className='forgot_password'>
            Forgotten Password ?
          </div>
          <div classname='line'></div>
          <div className='new_account'>
            Create New Account
          </div>
       </div>
    </div>
  )
}

export default Login;