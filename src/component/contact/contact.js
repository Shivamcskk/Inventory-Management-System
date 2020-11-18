import React, { Component } from 'react';
import "./contact.css"
import Navbar from '../web//navbar'
import Cimg from "../../contact.png"
export default function Contact()
{
    return(

        <div className="maiin">
            <Navbar/>
            <img src={Cimg} className="imgg"></img>
            <h1>hi</h1>
        </div>
    )
}