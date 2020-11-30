import React, { Component } from 'react';
import Navbar from '../web/navbar';
import {useState,useEffect} from 'react';
import New from './new';
import Update from './update';
import "./index.css"
import { Link } from 'react-router-dom';
export default function Retail()
{
    
    const [inn,setinn]=useState(true);
    const [cur,setcur]=useState("INSERT NEW Retailer")
    return(
        <div className="background">
            <Navbar/>
             {!inn && <New/>}  
              {inn && <Update/>} 
           
            <div>
                <button className="but" style={{marginLeft:"640px",backgroundColor:"#282828"}} onClick={
                    ()=>{
                        setinn(!inn);
                        if(inn)
                        setcur("EDIT LOCATION")
                        else
                        
                        setcur("INSERT NEW LOCATION")
                    }
                }>
                    {cur}
                </button>
               
               
             <Link className="but" to="/home" style={{display:"block",marginLeft:"625px",textDecoration: "none"}}>Home</Link>
       
          
            </div>
        </div>
    )
}