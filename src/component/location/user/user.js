import React, { Component } from 'react';

import Navbar from '../../web/navbar'

import {useState} from "react"
import Axios from "axios";
import { Link, Redirect } from 'react-router-dom';
const User = () => {
    const [log,setLog]=useState(false);
    const [username,setusername]=useState("");
    const [name,setname]=useState("");
    const [mobile,setmobile]=useState("");
    const [address,setaddress]=useState("");
    const [redirect,setredirect]=useState(false);

    const fun= async()=>{
        try{
            const ress =await Axios.get("http://localhost:3001/api/login");
         
            console.log(ress.data.user[0].username);
            setusername(ress.data.user[0].username);
         }
        catch(err)
        {
        
        }
       
    }
    if(!log){
      setLog(true);
    fun();
    console.log("1");
    }
    const sendDetails =async()=>{
        const result=await Axios.post("http://localhost:3001/api/users",{
            username:username,
            mobile:mobile,
            address:address,
            name:name
        })
   
       
    }
 return(
    
     <div className="background">
         <Navbar/>
         <div className={"order"} style={{minHeight:"60vh"}} >
         <form className={"or"} style={{width:"800px"}} onSubmit={(e)=>{sendDetails();
        setredirect(true)}
        } >
         <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%"}}>Username:</span>
         <input className="in" type="text" value={username} disabled/>
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"48px"}}>Name:</span>
         <input className="in" type="text" value={name}   onChange={e=>setname(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"37px"}}>Mobile:</span>
         <input className="in" type="text" value={mobile}   onChange={e=>setmobile(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"26px"}}>Address:</span>
         <input className="in" type="text" value={address}   onChange={e=>setaddress(e.target.value)} />
        </label>
        
       
            <button className="buttt"
          type="submit"
                    
        >
          Submit
        </button>
        {redirect && <Redirect to='/home' />}
        
             </form>
         </div>
     </div>
 )
  };
  
  export default User;