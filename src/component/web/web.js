import Navbar from "./navbar";
import React, { Component } from 'react'
import './web.css'
import {useState,useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
    '& > *': {
      
      margin: theme.spacing(1),
      width: theme.spacing(70),
      height: theme.spacing(40),
    },
  },
}));
export default function Web(props){
  const classes = useStyles();

     const [name,setName]=useState([]);
     const [detail,setdetail]=useState([]);
     const [log,setLog]=useState(false);
  
  const fun = async () =>{
  
      const res =await Axios.post("http://localhost:3001/api/login/user",{username:sessionStorage.getItem('user')});
      console.log(await res.data)
      setName(res.data)
      
    
   
        const ress=await Axios.post("http://localhost:3001/api/users/in",{username:sessionStorage.getItem('user')});
        setdetail(ress.data);
        console.log(ress.data);
        
   
    Axios.defaults.withCredentials = true;
  }
  if(!log){
    fun();
    setLog(true);
  
  }
        return(
            <div className="web">
            <Navbar/>
            {console.log(props)}
             <div className="log">{detail.length>0 && <span style={{color:"white",fontSize:"200%"}}>{detail[0].fname}'S Inventory Page</span>}</div>
             <div>
             <div className="butto"  style={{marginTop:"20px"}}>
              <div className="size"   >
              <Link to="/location"><button className="loc"><h1 style={{color:"black"}}>EDIT AND SEE LOCATION TABLE</h1></button></Link>
               
               {console.log("hi",document.cookie!="")}

             
              </div>
              <div className="size">
              <Link to="/users"><button className="loc"><h1 style={{color:"black"}}>EDIT EMPLOYER INFO</h1></button></Link>
               
               

             
              </div>
             
              <div className="size">
                
                <Link to="/retailer"><button className="loc"><h1 style={{color:"black"}}>Retailer Page</h1></button></Link>
                
 
              
               </div>
               <div className="size">
                
                <Link to="/history"><button className="loc"><h1 style={{color:"black"}}>Your Order History</h1></button></Link>
                
 
              
               </div>
               <div className="size">
                
                <Link to="/historyall"><button className="loc"><h1 style={{color:"black"}}>Inventory Order History</h1></button></Link>
                
 
              
               </div>
              </div>
              
           {
             !Object.keys(detail).length==0  && 
             <div className="butto" style={{backgroundColor:"white",width:"35%",marginTop:"45px",verticalAlign:"top"}} >   
              <img src={name[0].img}  style={{marginLeft:"27%",width:"50%",height:"50%"}}/>
              <h1 style={{color:"black"}}>Name:{detail[0].fname} {detail[0].lname}</h1>
           <div><h1 style={{color:"black"}}>Address:{detail[0].door_no} {detail[0].str_name} {detail[0].city}</h1></div>
           
           <div><h1 style={{color:"black"}}>Mobile:{detail[0].mobile}</h1></div>
           
           <div>    <h1 style={{color:"black"}}>Email:{name[0].email}</h1></div>
       
         
         </div>
           }
           {
             Object.keys(detail).length==0  && 
             <div className="butto" style={{backgroundColor:"white",width:"35%",marginTop:"106px",verticalAlign:"top"}} >   
           
              <h1 style={{color:"black",textAlign:"center"}}>Kindly Fill Your Details!</h1>
         
         </div>
           }
             </div>

          
  
            
            
            </div>
        )
    
}