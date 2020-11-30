import React, { Component } from 'react';
import "./old.css"
import Select from 'react-select'
import {useState} from "react"
import Axios from "axios";
function Old() {
   const [Zone,setZone]=useState("");
   const [Row,setRow]=useState("");
   const [Column,setColumn]=useState("");
   const [log,setLog]=useState(false);
   const [loc,setloc]=useState([]);
   const [location,setlocation]=useState("");
   const fun= async()=>{
    try{
        const ress =await Axios.get("http://localhost:3001/api/location/update");
     
        console.log(ress.data);
        setloc(ress.data);
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
const ret=loc.map((key)=>{
    const re={
        value:key.p_name,
        label:key.p_name
    }

    return re;
})
const sendDetails= async(e)=>{
    const res=await Axios.post("http://localhost:3001/api/location",{
         p_name:location,
         row:Row,
         column:Column,
         zone:Zone


  });

  console.log(res);

}



    return(
     <div>
             <div className={"order"} style={{minHeight:"40vh"}} >
    
           <form className={"or"} style={{width:"800px"}} onSubmit={sendDetails} >
 <label className={"co"} >
            <span  style={{color:"white", fontSize:"165%"}}>P_name:</span>
            <Select options={ret} value={location} className="sel"  onChange={location=>setlocation(location)} />
         
</label >
<label className={"co"} >
<span  style={{color:"white", fontSize:"165%",marginRight:"38px"}}>Zone:</span>
<input className="in" type="text" placeholder={Zone} Value={Zone} onChange={e=>{setZone(e.target.value)
            console.log(Zone)}}/>
</label>

<label className={"co"} >
<span  style={{color:"white", fontSize:"165%",marginRight:"46px"}}>Row:</span>
<input className="in" type="text" placeholder={Row} Value={Row} onChange={e=>{setRow(e.target.value)
            console.log(Row)}}/>
</label>

<label className={"co"} >
<span  style={{color:"white", fontSize:"165%",marginRight:"5px"}}>Column:</span>
<input className="in" type="text" placeholder={Column} Value={Column} onChange={e=>{setColumn(e.target.value)
            console.log(Column)}}/>
</label>
<button className="buttt"
          type="submit"
                    
        >
          Submit
        </button>
 </form>

</div>


     </div>
   )
  };
  
  export default Old;