import React from "react";
import {useState,useEffect} from "react";
import loginImg from "../../login.png";
import Axios from 'axios';
import { Redirect } from "react-router-dom";
export function Register() {
  const [reg,setReg]=useState(false);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const changeUsername = (event) =>{
    setUsername(event.target.value);
}
const changeEmail = (event)=>{
    setEmail(event.target.value);
}
const changePassword = (event) =>{
    setPassword(event.target.value);
}
const sendDetails = () =>{
  Axios.post("http://localhost:3001/api/register",{
      username:username,
      email:email,
      password:password
  }).then((responce)=>{
    console.log(responce.data);
      alert("REGISTERED SUCCESSFULLY")
      setReg(true);
      
  });
}
return (
  <div className="base-container" >
    <div className="header">Register</div>
    <div className="content">
      <div className="image">
      <img style={{width:"200px",height:"200px"}} src={loginImg} />
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="username">USERNAME</label>
          <input type="text" name="username" placeholder={username} onChange={changeUsername} />
        </div>
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input type="text" name="email" placeholder={email} onChange={changeEmail}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" placeholder={password} onChange = {changePassword} />
        </div>
      </div>
    </div>
    <div className="footer">
      <button type="button" className="btn" onClick={sendDetails}>
        Register
        {reg && window.location.reload(false) }
      </button>
    </div>
  </div>
);
}