import  "./history.scss";
import {useState} from 'react';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import  { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from '../web/navbar';
import Axios from 'axios';

export default function All(){
   const [log,setLog]=useState(false);
    const [inrows,setinRows]=useState([]);
   const [row,setRow]=useState([]);
    const fun = async () =>{
        try{
            const ress=await Axios.get("http://localhost:3001/api/login");
            console.log(ress.data.user[0].username)
          const res =await Axios.post("http://localhost:3001/api/history",{username:ress.data.user[0].username});
          console.log(res.data);
         
         setinRows(res.data);
        
          setRow(res.data);
         
          
         
        
      }
        catch(err)
        {
    
        }
      }
      if(!log){
          
        fun();
        setLog(true);
        console.log("1")
        
    }

    const useStyles =makeStyles
    ({
       
            table:{
                minWidth:900,
         
            }}
        
    );


   const [q,setq]=useState();
    const classes = useStyles();
    const unclicked = ()=>{
        setRow(inrows);
        setq("");
    }
    inrows.forEach((row,index)=>{
        console.log(row.o_type)
        if (row.o_type==0) {
            row.o_type="Outgoing"
        }
        if (row.o_type==1){
            row.o_type="Incoming"
        }
    })
    const clicked = ()=>{

          var ne =  inrows.filter((r)=>{
               return r.p_name.toLowerCase().indexOf(q)>-1 || r.r_name.toLowerCase().indexOf(q)>-1 || r.date.toLowerCase().indexOf(q)>-1 ||r.o_type.toLowerCase().indexOf(q)>-1;
           });
            if(ne.length==0)
            setRow([{
                ordNo:"Not Found",
                p_name:"Not Found",
                r_name:"Not Found",
                no_items:"Not Found",
                date:"Not Found",
                o_type:"Not Found",
                in_price:"Not Found",
                ttl_price:"Not Found",
                username:"Not Found"
            }])
           else
            setRow(ne);
            
            
     
    }
    
        return(
            
              <div className="up">
                  
                  <Navbar/>
                   <TableContainer component={Paper} className="productt" style={{width:1000}}>
               <div class="upper">
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2DESqRyIewIzOzorkgCtJ-TRB95lKS5S5pQ&usqp=CAU" width="42" height="35"></img>   

                   
               <div class="input"> <input   type="text" onChange={(e)=>setq(e.target.value)} value={q}></input></div>
               
                <button class="click" onClick={clicked}>Search</button>
                <button class="click" onClick={unclicked}>Initial</button>
                </div>
                
               
               <Table className={classes.table} aria-label="simple table">
                   <TableHead className="head">
                       <TableRow>
                       <TableCell>OrdNo</TableCell>
                            <TableCell >P_name</TableCell>
                            <TableCell >R_name</TableCell>
                            <TableCell >No_of_item</TableCell>
                            <TableCell >Date</TableCell>
                            <TableCell >O_type</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Ttl_price</TableCell>
                            <TableCell >User</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {row.map((row,index)=>(
                         
                           <TableRow key={row.ordNo} style ={ index % 2? { background: "#dddddd"}:{ background : "white" }}>
                            
                       <TableCell >{row.ordNo}</TableCell>
                       <TableCell >{row.p_name}</TableCell>
                        <TableCell >{row.r_name}</TableCell>
                       <TableCell >{row.no_items}</TableCell>
                       <TableCell >{row.date}</TableCell>
                       
                       <TableCell >{row.o_type}</TableCell>
                       <TableCell >{row.in_price}</TableCell>
                       <TableCell >{row.ttl_price}</TableCell>
                       <TableCell >{row.username}</TableCell>
                    </TableRow>
        ))}
                   </TableBody>
               </Table>
                </TableContainer>
              </div>
        )
    
}
