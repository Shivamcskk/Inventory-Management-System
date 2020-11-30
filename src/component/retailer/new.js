import React, { Component } from 'react';
import Select from 'react-select'
import {useState} from "react"
import Axios from "axios";
function New()
{
    const [r_name,setr_name]=useState("");
    const [r_address,setr_address]=useState("");
    const [r_number,setr_number]=useState("");
    const sendDetails=async(e)=>{
        const result=await Axios.post("http://localhost:3001/api/retailer/new",{
            r_name:r_name,
            r_address:r_address,
            r_number:r_number
        })
        console.log(result);
    }
    return(
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"rgb(28, 27, 27) "}}>New Retailer Details</h1>
            <div className={"order"} style={{minHeight:"40vh"}} >
           < form className={"or"} style={{width:"800px",backgroundColor:"rgb(28, 27, 27)",marginTop:"30px"}} onSubmit={sendDetails}>
           <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%" ,marginRight:"22px"}}>Retailer Name:</span>
                        <input className="in" type="text" value={r_name} onChange={e=>{setr_name(e.target.value)}}/>
                        
                    </label>
                    <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%"}}>Retailer Address:</span>
                        <input className="in" type="text" value={r_address} onChange={e=>{setr_address(e.target.value)}}/>
                        
                    </label>
                    <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%"}}>Retailer Number:</span>
                        <input className="in" type="text" value={r_number} onChange={e=>{setr_number(e.target.value)}}/>
                        
                    </label>
                    <button className="buttt"
          type="submit"
          style={{marginTop:"60px"}}
                    
        >
          Submit</button>
                </form>
            </div>
        </div>
    )
}
  
  export default New;