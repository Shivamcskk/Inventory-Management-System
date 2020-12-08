import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../web/navbar';
import Inorder from './inorder';
import Outorder from './outorder';
import {useState,useEffect} from 'react';
export default function Order()
{
    
    const [inn,setinn]=useState(true);
    const [cur,setcur]=useState("Outgoing Order")
    return(
        <div className="bck">
            <Navbar/>
               
               { inn && <Inorder/>}

               {!inn && <Outorder/>} 
           
            <div>
                <button className="but" style={{marginLeft:"640px",backgroundColor:"#282828"}} onClick={
                    ()=>{
                        setinn(!inn);
                        if(inn)
                        setcur("Incoming Order")
                        else
                        setcur("Outgoing Order")
                    }
                }>
                    {cur}
                </button>
            </div>
        </div>
    )
}