import Navbar from "./navbar";
import React, { Component } from 'react'
import './web.css'
import {useState,useEffect} from 'react';
import Axios from 'axios';
export default function Web(props){

     const [name,setName]=useState({});
  
  const fun = async () =>{
    try{
      const res =await Axios.get("http://localhost:3001/api/login");
      
    if(res.data.loggedIn == true){
      setName(res.data.user[0]);
      
      
     
    }
  }
    catch(err)
    {

    }
  }
  if(Object.keys(name).length===0 ){fun();
  
  }
        return(
            <div className="web">
            <Navbar/>
            {console.log(props)}
             <div className="log"><h1>welcome, {name.username}</h1></div>
            </div>
        )
    
}