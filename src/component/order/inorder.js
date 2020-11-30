import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import Axios from 'axios';
import Navbar from "../web/navbar";
import Select from 'react-select'
import './inorder.css'
export default function Inorder()
{
    const [log,setLog]=useState(false);
    const [p_name,setp_name]=useState("");
    const [Category,setCategory]=useState("");
    const [brand,setbrand]=useState("");
    const [price,setprice]=useState("");
    const [no_items,setno_items]=useState("");
    const [retailer,setRetailer]=useState([]);
    const [selectedOption,setselectedOption]=useState("")
    const [username, setusername] = useState("");
    {
        console.log(selectedOption.value);//selected option is retailer name 
        console.log(p_name);
        console.log(Category);
        console.log(price);
        console.log(no_items);
    }
    const fun = async () =>{
        try{
            const ress =await Axios.get("http://localhost:3001/api/retailer");
         
            console.log(ress.data);
            setRetailer(ress.data);
            const res =await Axios.get("http://localhost:3001/api/login");
      
            if(res.data.loggedIn == true){
              setusername(res.data.user[0].username);
            
              
              
             
            }
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
    const ret=retailer.map((key)=>{
        const re={
            value:key.R_name,
            label:key.R_name
        }

        return re;
    })
    const sendDetails = async (e) =>{
              
                const res=await Axios.post("http://localhost:3001/api/order/in",{
              p_name:p_name,
                price:price,
                r_name:selectedOption.value,
                Category:Category,
                brand:brand,
                no_items:no_items,
                username:username

        });
      
        console.log(res);

      }
    return(
        <div className={"order"} >
          <form className={"or"} style={{width:"800px"}} onSubmit={sendDetails} >
          <label className={"co"} >
                  <span  style={{color:"white", fontSize:"165%"}}>Retailer:</span>
                  <Select options={ret} value={selectedOption} className="sel" onChange={selectedOption=>setselectedOption(selectedOption)} />
               
              </label>
              <label className={"co"}>
                  <span  style={{color:"white", fontSize:"150%"}}>Category:</span>
                  <input className="in" type="text" placeholder={"Category"} value={Category} onChange={e=>{setCategory(e.target.value)
                console.log(Category)}}/>
               
              </label>
              <label className={"co"}>
                  <span  style={{color:"white", fontSize:"150%",marginRight:"33px"}}>Brand:</span>
                  <input className="in" type="text" placeholder={"Brand"} value={brand} onChange={e=>{setbrand(e.target.value)
                console.log(brand)}}/>
               
              </label>

              <label className={"co"}>
                  <span  style={{color:"white", fontSize:"150%", marginRight:"12px"}}>Product:</span>
                  <input className="in" type="text" placeholder={"Product"} value={p_name} onChange={e=>{setp_name(e.target.value)
                console.log(p_name)}}/>
               
              </label>
              <label className={"co"}>
                  <span  style={{color:"white", fontSize:"150%" ,marginRight:"-5px"}}>No_items:</span>
                  <input className="in" type="text" placeholder={"No_items"} value={no_items} onChange={e=>{setno_items(e.target.value)
                console.log(no_items)}}/>
               
              </label>
              <label className={"co"}>
                  <span  style={{color:"white", fontSize:"150%" ,marginRight:"40px"}}>Price:</span>
                  <input className="in" type="text" placeholder={"Price"} value={price} onChange={e=>{setprice(e.target.value)
                console.log(price)}}/>
               
              </label>
              
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
                setCategory("")
                setbrand("")
                setno_items("")

          }}
       
        >
          Reset
        </button>
             
          </form>
          
        </div>
    )
}
