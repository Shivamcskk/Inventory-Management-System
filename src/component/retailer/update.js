import React, { Component } from 'react';
import Select from 'react-select'
import {useState} from "react"
import Axios from "axios";
function New()
{
    const [r_name,setr_name]=useState("");
    const [log,setLog]=useState(false);
    const [r_address,setr_address]=useState("");
    const [r_number,setr_number]=useState("");
    const [ret,setret]=useState([]);
    const sendDetails=async(e)=>{
        const result=await Axios.post("http://localhost:3001/api/retailer/update",{
            r_name:r_name,
            r_address:r_address,
            r_number:r_number
        })
        console.log(result);
    }
    const fun= async()=>{
        try{
            const ress =await Axios.get("http://localhost:3001/api/retailer");
         
            console.log(ress.data);
            setret(ress.data);
         }
        catch(err)
        {
        
        }
       
    }
    if(!log){
      setLog(true);
    fun();
    console.log("1");
    }
    const rett=ret.map((key)=>{
        const re={
            value:key.R_name,
            label:key.R_name
        }
    
        return re;
    })
    return(
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"rgb(28, 27, 27) "}}>Update Retailer Details</h1>
            <div className={"order"} style={{minHeight:"40vh"}} >
           < form className={"or"} style={{width:"800px",backgroundColor:"rgb(28, 27, 27)",marginTop:"30px"}} onSubmit={sendDetails}>
           <label className={"co"} >
            <span  style={{color:"white", fontSize:"165%" ,marginRight:"15px"} }>Retailer Name:</span>
            <Select options={rett} value={r_name} className="sel"  onChange={r_name=>setr_name(r_name)} />
            {console.log(rett)}
         
</label >
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