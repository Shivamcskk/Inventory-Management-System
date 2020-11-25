import React, { Component } from 'react';
import './inorder.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from '../web/navbar';
import Inorder from './inorder';
import Inoreder from './inorder';
import {useState,useEffect} from 'react';
export default function Order()
{
    const [inn,setinn]=useState(true);
    const [cur,setcur]=useState("Outgoing Order")
    return(
        <div>
            <Navbar/>
            {
                inn && <Inorder/>
            }
            <div>
                <button className="but" style={{marginLeft:"640px",backgroundColor:"red"}} onClick={
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