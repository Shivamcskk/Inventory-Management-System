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
import Order from "./component/order/index"
import Location from "./component/location/location"
import User from './component/location/user/user'
import Retailer from "./component/retailer/index"
import History from './component/history/history'
import All from "./component/history/all"
import {ProtectedRoute} from './protectedRoute';
function App (){
  // const [online,setonline]=useState(false);
  // const [log,setLog]=useState(false);
  
  // const fun = async () =>{
  //   try{
  //     const res =await Axios.get("http://localhost:3001/api/login");
      
  //   if(res.data.loggedIn == true){
  //     setonline(true);
      
     
  //   }
  // }
  //   catch(err)
  //   {

  //   }
  // }
  // if( !log){
  //   fun();
  //   setLog(true);
  // }
  

 
    return(
      <Router>
     
       <Route path="/" exact component={Home}/> 
       <Route path="/login" component={LoginApp}/>
       
          <ProtectedRoute path="/users" exact component={User}/> 
       <ProtectedRoute path="/contact-us" component={Contact}/>
       
      <ProtectedRoute path="/products" component={Product}/>
      <ProtectedRoute path="/categories" component={Categories}/>
      <ProtectedRoute path="/home" component={Web} />
      <ProtectedRoute path="/order" exact component={Order}/>
      <ProtectedRoute path="/location" component={Location}/>
      <ProtectedRoute path="/retailer" component={Retailer}/>
      <ProtectedRoute path="/history" exact component={All}/>
      <ProtectedRoute path="/historyall" exact component={History}/>
      </Router>
    )
  
}


export default App; 