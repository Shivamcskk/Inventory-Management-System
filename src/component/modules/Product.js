import  "./Product.scss";
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

export default function Product(){
   
    const [inrows,setinRows]=useState([]);
   const [row,setRow]=useState([]);
    const fun = async () =>{
        try{
          const res =await Axios.get("http://localhost:3001/api/products");
          console.log(res.data);
         
         setinRows(res.data);
          setRow(res.data);
         
          
         
        
      }
        catch(err)
        {
    
        }
      }
      if(row.length===0 ){
          
        fun();
        console.log("1")
        
    }

    const useStyles =makeStyles
    ({
       
            table:{
                minWidth:650,
         
            }}
        
    )
<<<<<<< HEAD
    // var rows=[
    //     {name:"SHIVAM",surname:"CHAUDHARY",age:"21"},
    //     {name:"ASHIKA",surname:"KARANTH",age:"21"},
    //     {name:"CHERRY",surname:"REDDY",age:"21"},
    //     {name:"ASHOK",surname:"BERA",age:"21"},
    //     {name:"CHUTIYA",surname:"BACKCHODI",age:"21"},
=======
    var rows=[
        {name:"SHIVAM",surname:"CHAUDHARY",age:"21"},
        {name:"CHERRY",surname:"REDDY",age:"21"},
        {name:"ASHOK",surname:"BERA",age:"21"},
        {name:"CHUTIYA",surname:"BACKCHODI",age:"21"},
>>>>>>> 2a920b7992abef133ae422537707032ed555ec4a
        

    // ]
    


   const [q,setq]=useState();
    const classes = useStyles();
    const unclicked = ()=>{
        setRow(inrows);
        setq("");
    }
    const clicked = ()=>{

          var ne =  inrows.filter((r)=>{
               return r.p_name.toLowerCase().indexOf(q)>-1 || r.brand.toLowerCase().indexOf(q)>-1 || r.category.toLowerCase().indexOf(q)>-1;
           });
            if(ne.length==0)
            setRow([{p_name:"Not found",
            brand:"Not found",
            category:"Not found",
            price:"Not found"
        }])
           else
            setRow(ne);
            
            
     
    }
    
        return(
            
              <div className="up">
                  
                  <Navbar/>
                   <TableContainer component={Paper} className="product" style={{width:1000}}>
               <div class="upper">
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2DESqRyIewIzOzorkgCtJ-TRB95lKS5S5pQ&usqp=CAU" width="42" height="35"></img>   

                   
               <div class="input"> <input   type="text" onChange={(e)=>setq(e.target.value)} value={q}></input></div>
               
                <button class="click" onClick={clicked}>Search</button>
                <button class="click" onClick={unclicked}>Initial</button>
                </div>
                
               
               <Table className={classes.table} aria-label="simple table">
                   <TableHead className="head">
                       <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell >Category</TableCell>
                            <TableCell >Brand</TableCell>
                            <TableCell >Price</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {row.map((row,index)=>(
                           <TableRow key={row.p_name} style ={ index % 2? { background: "#dddddd"}:{ background : "white" }}>
                            
                       <TableCell >{row.p_name}</TableCell>
                       <TableCell >{row.category}</TableCell>
                            <TableCell >{row.brand}</TableCell>
                       <TableCell >{row.price}</TableCell>
                    </TableRow>
        ))}
                   </TableBody>
               </Table>
                </TableContainer>
              </div>
        )
    
}
