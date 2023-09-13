import React from 'react'
import './inputbox.css'
import { useEffect } from 'react';


const InputBox = () => {
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
        </form>
    </section>
</div>
)
}

export default InputBox;