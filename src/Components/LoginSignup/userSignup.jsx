import React, { useEffect } from 'react'
import { useState } from 'react';
import { auth, database } from '../../firebase'
import { push, ref as sRef } from "firebase/database"

const driverSignupDetailsRef = sRef(database, "driver_signup_details");


const UserSignup = () => {
    const [userData, setUserData] = useState({});
    const [carsData, setCarsData] = useState([]);
    
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = '/src/Components/LoginSignup/userSignupScript.js';
        script.async = true;
    
        script.onload = () =>{
            // JS Code to execute after script is loaded
        };
    
        document.body.appendChild(script);
        return() => {
          document.body.removeChild(script);
        }
    
    }, []);

    const register = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registration successful");
            })
            .catch((error) => {
                console.error("Registration failed: " + error.message);
            });
        
            const userId = registerEmail.value.replace(/[^a-zA-Z0-9]/g, '');
        // Push the userData object to the database
        push(driverSignupDetailsRef, userData)
        .then((ref) => {
            console.log("Data pushed successfully with key: " + ref.key);
            // You can perform any further actions here after a successful push
        })
        .catch((error) => {
            console.error("Error pushing data: " + error);
        });
    }
  return (
    <>
        <h1>Signup as Car Driver</h1>
        <form>
            <label htmlFor="firstname">First Name:</label>
            <input 
                type="text" 
                id="firstname" 
                name="firstname" 
                onChange={(e) => setUserData(userData => ({
                    ...userData,
                    ...{"firstname": e.target.value}
                }))}
            />
            <br /><br />

            <label htmlFor="lastname">Last Name:</label>
            <input 
            
            type="text" 
                id="lastname" 
                name="lastname"
                onChange={(e) => setUserData(userData => ({
                    ...userData,
                    ...{"lastname": e.target.value}
                }))}
            />
            <br /><br />

            <label htmlFor="phone">Phone Number:</label>
            <input 
                type="text" 
                id="phone" 
                name="phone"
                onChange={(e) => setUserData(userData => ({
                    ...userData,
                    ...{"phone": e.target.value}
                }))} 
            />
            <br /><br />

            <label htmlFor="aadhar">Aadhar Card:</label>
            <input 
                type="text" 
                id="aadhar" 
                name="aadhar"
                onChange={(e) => setUserData(userData => ({
                    ...userData,
                    ...{"adhaar": e.target.value}
                }))}  
            />
            <br /><br />

            <label htmlFor="cars">Number of Cars:</label>
            <input 
                type="number" 
                id="cars" 
                name="cars"  
            />
            <br /><br />

            <div id="carDetails">
                {/* This div will be populated dynamically based on the number of cars */}
            </div>

            <label htmlFor="registerEmail">Email:</label>
            <input 
                type="email" 
                id="registerEmail" 
                onChange={(e) => setEmail(e.target.value)}
                required 
            />
            <br /><br />

            <label htmlFor="registerPassword">Password:</label>
            <input 
                type="password" 
                id="registerPassword" 
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            <br /><br />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input 
                type="password" 
                id="confirmPassword" 
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            <br /><br />

            <input type="button" id="submit" value="Signup" />

        </form>
    </>
  )
}

export default UserSignup;