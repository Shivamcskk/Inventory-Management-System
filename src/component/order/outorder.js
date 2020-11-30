import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import Axios from 'axios';
import Navbar from "../web/navbar";
import Select from 'react-select'
import './outorder.css'
export default function Outorder()
{
    const [log,setLog]=useState(false);
    const [ip_name,setip_name]=useState([]);
    const [p_name,setp_name]=useState("");
    const [price,setprice]=useState("");
    const [maxp,setmaxp]=useState("");
    const [ino_items,setino_items]=useState([]);
    const [no_items,setno_items]=useState("");
    const [retailer,setRetailer]=useState([]);
    const [selectedOption,setselectedOption]=useState("");
    const [username,setusername]=useState("");

    // {
    //     console.log(selectedOption.value);//selected option is retailer name 
    //     console.log(p_name);
    //     console.log(price);
    //     console.log(no_items);
    // }
    const fun = async () =>{
        try{
            const ress =await Axios.get("http://localhost:3001/api/retailer");
            const res =await Axios.get("http://localhost:3001/api/products");
            const re =await Axios.get("http://localhost:3001/api/stocks");
            const resss =await Axios.get("http://localhost:3001/api/login");
      
            if(resss.data.loggedIn == true){
              setusername(resss.data.user[0].username);
            
              
              
             
            }
            console.log(res.data)
            setip_name(res.data);
            setRetailer(ress.data);
            setino_items(re.data);
         }
        catch(err)
        {
    
        }
      }
      if(!log){
          setLog(true);
        fun();
        console.log("1")
        
    }
    const pro= ip_name.map((key)=>{
      const pr={
          value:key.p_name,
          label:key.p_name
      }

      return pr;
  })
  console.log(pro);
    const ret=retailer.map((key)=>{
        const re={
            value:key.R_name,
            label:key.R_name
        }

        return re;
    })
    const sendDetails = async (e) =>{
              
                const res=await Axios.post("http://localhost:3001/api/order/out",{
                p_name:p_name.value,
                price:price,
                r_name:selectedOption.value,
                no_items:no_items,
                username:username

        });
        console.log(res);

      }
    return(
        <div className={"order"} style={{minHeight:"40vh"}} >
          <form className={"or"} style={{width:"800px"}} onSubmit={sendDetails} >
          <label className={"co"} >
                  <span  style={{color:"white", fontSize:"165%"}}>Retailer:</span>
                  <Select options={ret} value={selectedOption} className="sel" onChange={selectedOption=>{setselectedOption(selectedOption)
                 
                  } }/>
               
              </label>
             
              <label className={"co"} >
                  <span  style={{color:"white", fontSize:"165%",marginRight:"-5px"}}>Product:</span>
                  <Select options={pro} value={p_name} className="sel" onChange={p_name=>{
                    setp_name(p_name)
                    ip_name.forEach((key)=>{
                      if(key.p_name===p_name.value)
                    {  setprice(key.price);
                    }
                      console.log(key.p_name===p_name.value);
                    })
                    ino_items.forEach((key)=>{
                      if(key.p_name===p_name.value)
                    {  setmaxp(key.item_left);
                     
                    }
                      console.log(key.p_name===p_name.value);
                    })
                   
                   
                    }} />
               
              </label>

              <label className={"co"}>
                  <span  style={{color:"white", fontSize:"150%" ,marginRight:"-5px"}}>No_items:</span>
                  <input className="in" type="number" placeholder="No_items" value={no_items} min="0" max={maxp}  onChange={e=>{setno_items(e.target.value)
                console.log(no_items)}}/>
               
              </label>
            {
              price && <label className={"co"}>
              <span  style={{color:"white", fontSize:"150%" ,marginRight:"40px"}}>Price:</span>
              <input className="in" type="text" placeholder={price} Value={price} onChange={e=>{setprice(e.target.value)
            console.log(price)}}/>
           
          </label>
            }  
              
              <button className="but"
          type="submit"
                    
        >
          Submit
        </button>
        <button className="but"
          type="reset"
          onClick={()=>{
                setp_name("")
                setprice("")
                setselectedOption("")
                setno_items("")
                setmaxp("")

          }}
       
        >
          Reset
        </button>
             
          </form>
          
        </div>
    )
}
