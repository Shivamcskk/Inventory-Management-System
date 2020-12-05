import Axios from 'axios'
import React from 'react'
import {Redirect, Route} from "react-router-dom"
import {useState} from 'react'
import auth from './value';
export const ProtectedRoute = ({component:Component,...rest})=>{


  


      
    return(
        <Route 
        {...rest }
        render={props=>{
           
      console.log(auth.getAuth())
            if(auth.getAuth()=='1')
            return <Component {...props}/>
            else
            return (
                <Redirect 
                to={
                    {
                        pathname:"/login",
                        state:{
                            from:props.location
                        }
                    }
                }/>
            )
        }}
        />
    );
}