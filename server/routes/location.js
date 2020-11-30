const express = require('express');
let router = express.Router();
const mysql = require('mysql');
const { NULL } = require('node-sass');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});

router.get("/",(req,res)=>{
//     if (SELECT COUNT(*) FROM location WHERE p_name=new.p_name)=0 THEN
//  INSERT INTO location(p_name) VALUES (new.p_name);

const sq1="SELECT * FROM LOCATION WHERE row IS NULL;"
db.query(sq1,(err,ress)=>{
    if(err)console.log(err);
   res.send(ress);
})
   
});
router.get("/update",(req,res)=>{
    //     if (SELECT COUNT(*) FROM location WHERE p_name=new.p_name)=0 THEN
    //  INSERT INTO location(p_name) VALUES (new.p_name);
    
    const sq1="SELECT * FROM LOCATION;"
    db.query(sq1,(err,ress)=>{
        if(err)console.log(err);
       res.send(ress);
    })
       
    });
router.post("/",(req,res)=>{
    //     if (SELECT COUNT(*) FROM location WHERE p_name=new.p_name)=0 THEN
    //  INSERT INTO location(p_name) VALUES (new.p_name);
    
   const sq="UPDATE location set zone=?,row=?,colum=? where p_name=?;";
   db.query(sq,[req.body.zone,req.body.row,req.body.column,req.body.p_name.value],(err,result)=>{
       if(err)console.log(err);
       res.send(result);
   })
       
    });
module.exports = router;