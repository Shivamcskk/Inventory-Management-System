import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Product from "./component/modules/Product"
import "./App.scss";
import {useState,useEffect} from 'react';
import Axios from 'axios';
import Web from './component/web/web'
import LoginApp from './loginapp';
import Home from "./component/login/Home"
import Categories from "./component/modules/categories"
import Contact from "./component/contact/contact"
function App (){
  // const [name,setName]=useState({});
  
  // const fun = async () =>{
  //   try{
  //     const res =await Axios.get("http://localhost:3001/api/login");
      
  //   if(res.data.loggedIn == true){
  //     setName(res.data.user[0]);
      
     
  //   }
  // }
  //   catch(err)
  //   {

  //   }
  // }
  // if(Object.keys(name).length===0 ){fun();
  // }
  

 
    return(
      <Router>
     
       <Route path="/" exact component={Home}/> 
       <Route path="/contact-us" component={Contact}/>
       <Route path="/login" component={LoginApp}/>
      <Route path="/products" component={Product}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/home" component={Web} />
      
      </Router>
    )
  
}


export default App; 