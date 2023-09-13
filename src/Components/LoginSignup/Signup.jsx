import React from 'react'
import './Signup.css'
import { useEffect } from 'react';


const Signup = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = '/src/Components/LoginSignup/loader.js';
    script.async = true;

    script.onload = () =>{
      signuploader();
    };

    document.body.appendChild(script);
    return() => {
      document.body.removeChild(script);
    }

  }, []);
  return (
    <div className="container">
       <section>
        <form action="" method="post">
          <div className="box">
            <h2>Step 1</h2>
            <div className="inputBox">
              <input type="text" name="first_name" required />
              <label>First Name*</label>
            </div>
            <div className="inputBox">
              <input type="text" name="last_name" required />
              <label>Last Name*</label>
            </div>
            <div className="buttonSection" id="firstButtonSection">
            <button type="button" className="nextButton">Next</button>
            </div>
          </div>
          <div className="box">
            <h2>Step 2</h2>
            <div className="inputBox">
              <input type="text" name="adhaar" />
              <label>Adhaar No</label>
            </div>
            <div className="inputBox">
              <input type="text" name="driving_l" />
              <label>Driving Lisence No.</label>
            </div>
            <div className="buttonSection">
            <button type="button" className="previousButton">Previous</button>
            <button type="button" className="nextButton">Next</button>
            </div>
          </div>
          <div className="box">
            <h2>Step 3</h2>
            <div className="inputBox">
              <input type="number" name="n_vehicles" required />
              <label>No of vehicles*</label>
            </div>
            <div className="inputBox">
              <input type="text" name="country" required />
              <label>Primary Vehicle no.*</label>
            </div>
            <div className="buttonSection">
            <button type="button" className="previousButton">Previous</button>
            <button type="button" className="nextButton">Next</button>
            </div>
          </div>
          <div className="box">
            <h2>Step 3</h2>
            <div className="inputBox">
              <input type="email" name="lang"/>
              <label>Email Id</label>
            </div>
            <div className="inputBox">
              <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              <label>Mobile Number* (with country code)</label>
            </div>
            <div className="buttonSection">
            <button type="button" className="previousButton">Previous</button>
            <button type="button" className="nextButton">Next</button>
            </div>
          </div>
          {/* <div className="box">
            <h2>Step 3</h2>
            <div className="inputBox">
              <input type="text" name="username" required />
              <label>Choose a Username*</label>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required />
              <label>Choose a Password*</label>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required />
              <label>Confirm Password</label>
            </div>
            <div className="buttonSection">
            <button type="button" className="previousButton">Previous</button>
            <button type="button" className="nextButton">Next</button>
            </div>
          </div> */}
          <div className="box">
            <h2>Are you sure you want to Submit?</h2>
            <div className="buttonSection">
            <button type="button" className="previousButton">Go Back</button>
            <button type="button" className="nextButton" id="submitButton">Submit</button>
            </div>
          </div>
          <div className="box">
            <h2>Success <i className="fas fa-check-circle"></i></h2>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Signup;