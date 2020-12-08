import React, { Component } from 'react';
import Navbar from '../web/navbar';
import {useState,useEffect} from 'react';
import New from './new';
import Old from './old'
import { Link } from 'react-router-dom';
import "../../background.css"
export default function Location()
{
    
    const [inn,setinn]=useState(true);
    const [cur,setcur]=useState("EDIT LOCATION")
    return(
        <div className="background">
            <Navbar/>
             {inn && <New/>}  
              {!inn && <Old/>} 
           
            <div>
                <button className="but" style={{marginLeft:"640px",backgroundColor:"#282828"}} onClick={
                    ()=>{
                        setinn(!inn);
                        if(inn)
                        setcur("INSERT NEW LOCATION")
                     
                        else
                        
                        setcur("EDIT LOCATION")
                    }
                }>
                    {cur}
                </button>
                
            </div>
        </div>
    )
}