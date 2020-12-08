const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});

router.get("/",(req,res)=>{
    const sqlSelect = "SELECT R_name FROM RETAILER;";
    db.query(sqlSelect,(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        res.send(result);
    });
});
router.post("/det",(req,res)=>{
    const sqlSelect = "SELECT * FROM RETAILER where r_name=?;";
    db.query(sqlSelect,[req.body.r_name],(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        res.send(result);
    });
});
router.post("/new",(req,res)=>{
    
    const r_name=req.body.r_name;
    const r_number=req.body.r_number;
    const sql="insert into retailer(r_name,door_no,str_name,city,r_no) values(?,?,?,?,?)"
    db.query(sql,[r_name,req.body.door_no,req.body.str_name,req.body.city,r_number],(err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})
router.post("/update",(req,res)=>{
    console.log(req.body);
    const r_address=req.body.r_address;
    const r_name=req.body.r_name.value;
    const r_number=req.body.r_number;
    const sql="update retailer set door_no=?,str_name=?,city=?,r_no=? where r_name=?"
    db.query(sql,[req.body.door_no,req.body.str_name,req.body.city,r_number,r_name],(err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})
module.exports = router;