import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("Sign up");

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
           <h2>{currState}</h2>
              <img onClick={()=>setShowLogin(true)} src={assets.cross_icon} />
         </div>
         <div className='login-popup-input'>
         {currState === "Login" ?<></>: <input type='text' placeholder='Enter your name' required/>}
         
         <input type='email' placeholder='Enter your email' required/>
         <input type='password' placeholder='Password' required />
         </div>
         <button>{currState==='Sign up'?"Create Account" : "Login"}</button>
         <div className='login-popup-condition'>
         <input type='checkbox' required/>
         <p>By continuing , i agree to the terms of use & privacy policy </p>
         </div>
         {currState === "login"
          ?
         <p>Create a new account?<span onClick={()=>setCurrState("Sign up")}>click here</span></p>
         :
         <p>Already have an account ?<span onClick={()=>setCurrState("Login")}> login here </span></p>
         }
      </form>
    </div>
  )
}

export default LoginPopUp