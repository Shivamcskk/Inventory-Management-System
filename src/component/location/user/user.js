import React, { Component } from 'react';

import Navbar from '../../web/navbar'

import {useState} from "react"
import Axios from "axios";
import { Link, Redirect } from 'react-router-dom';
const User = () => {
    const [log,setLog]=useState(false);
    const [username,setusername]=useState("");
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    const [mobile,setmobile]=useState("");
  
    const [door_no,setdoor_no]=useState("");
    const [str_name,setstr_name]=useState("");
    const [city,setcity]=useState("");
    const [redirect,setredirect]=useState(false);

    const fun= async()=>{
        try{
            const ress =await Axios.get("http://localhost:3001/api/login");
         
            console.log(ress.data.user[0].username);
            setusername(sessionStorage.getItem('user'));
            const res =await Axios.post("http://localhost:3001/api/users/in",{username: sessionStorage.getItem('user')});
            console.log(res.data);
            setfname(await res.data[0].fname);
            setlname(await res.data[0].lname);
            setmobile(await res.data[0].mobile);
            setdoor_no(await res.data[0].door_no);
            setstr_name(await res.data[0].str_name);
            setcity(await res.data[0].city);
            
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
            door_no:door_no,
            str_name:str_name,
            city:city,
            fname:fname,
            lname:lname
        })
   
       
    }
 return(
    
     <div className="background">
         <Navbar/>
         <div className={"order"} style={{minHeight:"70vh"}} >
         <form className={"or"} style={{width:"800px"}} onSubmit={(e)=>{sendDetails();
        setredirect(true)}
        } >
         <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%"}}>Username:</span>
         <input className="in" type="text" value={username} disabled/>
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"36px"}}>FName:</span>
         <input className="in" type="text" value={fname}   onChange={e=>setfname(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"36px"}}>LName:</span>
         <input className="in" type="text" value={lname}   onChange={e=>setlname(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"37px"}}>Mobile:</span>
         <input className="in" type="text" value={mobile}   onChange={e=>setmobile(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"15px"}}>Door_no:</span>
         <input className="in" type="text" value={door_no}   onChange={e=>setdoor_no(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"-4px"}}>Str_name:</span>
         <input className="in" type="text" value={str_name}   onChange={e=>setstr_name(e.target.value)} />
        </label>
        <label className={"co"} >
         <span  style={{color:"white", fontSize:"165%",marginRight:"70px"}}>City:</span>
         <input className="in" type="text" value={city}   onChange={e=>setcity(e.target.value)} />
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