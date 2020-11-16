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
export default function Product(){

    const useStyles =makeStyles
    ({
       
            table:{
                minWidth:650,
         
            }}
        
    )
    var rows=[
        {name:"SHIVAM",surname:"CHAUDHARY",age:"21"},
        {name:"ASHIKA",surname:"KARANTH",age:"21"},
        {name:"CHERRY",surname:"REDDY",age:"21"},
        {name:"ASHOK",surname:"BERA",age:"21"},
        {name:"CHUTIYA",surname:"BACKCHODI",age:"21"},
        

    ]

   const [row,setRow]=useState(rows);
   const [q,setq]=useState();
    const classes = useStyles();
    const unclicked = ()=>{
        setRow(rows);
        setq("");
    }
    const clicked = ()=>{

          var ne =  rows.filter((r)=>{
               return r.name.toLowerCase().indexOf(q)>-1 || r.surname.toLowerCase().indexOf(q)>-1 || r.age.toLowerCase().indexOf(q)>-1;
           });
            if(ne.length==0)
            setRow([{name:"Not found",
            surname:"Not found",
            age:"Not founded"}])
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
                            <TableCell>NAME</TableCell>
                            <TableCell >SURNAME</TableCell>
                            <TableCell >AGE</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {row.map((row,index)=>(
                           <TableRow key={row.name} style ={ index % 2? { background: "#dddddd"}:{ background : "white" }}>
                            
                       <TableCell >{row.name}</TableCell>
                       <TableCell >{row.surname}</TableCell>
                            <TableCell >{row.age}</TableCell>
                    </TableRow>
        ))}
                   </TableBody>
               </Table>
                </TableContainer>
              </div>
        )
    
}
