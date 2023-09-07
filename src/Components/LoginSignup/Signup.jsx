import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className="container">
       <div className='header'> 
        <div className='text'>Sign Up</div>
        <div classname='line'></div>      
       </div>

       <div className='inputs'>
       <div className='ind_input'>
          <img src="" alt=""></img>
          <input type='text' placeholder="First Name"></input>
        </div>
        <div className='ind_input'>
          <img src="" alt=""></img>
          <input type='text' placeholder="Last Name"></input>
        </div>
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
         
          <div classname='line'></div>
          <div className='new_account'>
            Sign Up
          </div>
       </div>
    </div>
  )
}

export default Signup;