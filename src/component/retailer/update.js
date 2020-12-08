import React, { Component } from 'react';
import Select from 'react-select'
import {useState} from "react"
import Axios from "axios";
function New()
{
    const [r_name,setr_name]=useState("");
    const [log,setLog]=useState(false);
    const [door_no,setdoor_no]=useState("");
    const [str_name,setstr_name]=useState("");
    const [city,setcity]=useState("");
    const [det,setdet]=useState([]);
   
    const [r_number,setr_number]=useState("");
    const [ret,setret]=useState([]);
    const sendDetails=async(e)=>{
        const result=await Axios.post("/api/retailer/update",{
            r_name:r_name,
            r_number:r_number,
            door_no:door_no,
            str_name:str_name,
            city:city
        })
        console.log(result);
    }
    const fun= async()=>{
        try{
            const ress =await Axios.get("/api/retailer");
         
            console.log(ress.data);
            setret(ress.data);
         }
        catch(err)
        {
        
        }
       
    }
    const dett= async(e)=>{
        setr_name(e);
        try{
            const ress =await Axios.post("/api/retailer/det",{
                r_name:e.value
            });
         
            console.log(ress.data);
            setdet(ress.data);
            setr_number(await ress.data[0].r_no);
            setdoor_no(await ress.data[0].door_no);
            setstr_name(await ress.data[0].str_name);
            setcity(await ress.data[0].city);
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
            <div className={"order"} style={{minHeight:"60vh"}} >
           < form className={"or"} style={{width:"800px",backgroundColor:"rgb(28, 27, 27)",marginTop:"30px"}} onSubmit={sendDetails}>
           <label className={"co"} >
            <span  style={{color:"white", fontSize:"165%" ,marginRight:"30px"} }>Retailer Name:</span>
            <Select options={rett} value={r_name} className="sel"  onChange={dett} />
            {console.log(rett)}
         
</label >  <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%",marginRight:"17px"}}>Retailer door_no</span>
                        <input className="in" type="text" value={door_no} onChange={e=>{setdoor_no(e.target.value)}}/>
                        
                    </label>
                    <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%",marginRight:"0px"}}>Retailer str_name</span>
                        <input className="in" type="text" value={str_name} onChange={e=>{setstr_name(e.target.value)}}/>
                        
                    </label>
                    <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%",marginRight:"70px"}}>Retailer city</span>
                        <input className="in" type="text" value={city} onChange={e=>{setcity(e.target.value)}}/>
                        
                    </label>
                    <label className={"co"} >
                        <span style={{color:"white", fontSize:"165%",marginRight:"10px"}}>Retailer Number:</span>
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