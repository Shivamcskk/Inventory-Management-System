import React, { Component } from 'react';
import "./contact.css"
import Navbar from '../web//navbar'
import Cimg from "../../contact.png"
import {useState} from "react"
import emailjs from 'emailjs-com';
import Axios from "axios";
const Contact = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      setLoader(true);
       const logg=await Axios.post("/api/contact",{
        username: name,
        message: message
       })
  

    emailjs.sendForm('service_o2v91xk', 'template_qeiqaob', e.target, 'user_5yFTKjoUBrfF188sjZmP4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
       console.log(logg.data);
     
  
      setName("");
      setMessage("");
    };
  
    return (
      <div className="maiin">
          <Navbar/>
         
        <div className="yo">
        <form className="formm" onSubmit={handleSubmit}>
        <h1 style={{color:"black",textAlign:"center"}}>Contact Admin </h1>
  
        <label>UserName</label>
        <input
        required
        name="username"
          placeholder="UserName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  
        
  
        <label>Message</label>
        <textarea
            required
            name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
  
        <button
          type="submit"
          style={{ background: loader ? "rgb(2, 2, 110)" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>

        </div>
        <div className="social">
            <span className="span1"><a href="https://www.facebook.com/miakhalifa/"><img src="https://www.flaticon.com/svg/static/icons/svg/174/174848.svg"  style={{width:"50px",height:"50px"}}></img></a></span>
            <span className="span2"><a href="https://www.instagram.com/miakhalifa/?hl=en"><img src="https://www.flaticon.com/svg/static/icons/svg/174/174855.svg"  style={{width:"50px",height:"50px"}}></img></a></span>
            <span className="span3"><a href="https://mail.google.com/mail/u/0/#inbox"><img src="https://www.flaticon.com/svg/static/icons/svg/145/145804.svg"  style={{width:"50px",height:"50px"}}></img></a></span>
        </div>
      </div>
    );
  };
  
  export default Contact;