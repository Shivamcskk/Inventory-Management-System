import React, { Component } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
export default function Home()
{
    return (
        <div>
        
    <div className={"div"}>
      
        <div className="body">
        <div className="fir">
            <h1 classname="h1">Welcome To Our inventory!</h1>
        </div>
        <div className="sec">
            <h1 className="h1">IT'S NICE TO MEET YOU</h1>
        </div>
        <div>
            <button className="button">
              <Link className="link" to="/login">Register/Login</Link>
            </button>
        </div>
        </div>
    </div>
    </div>)
}