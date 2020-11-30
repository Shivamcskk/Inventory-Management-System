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
router.post("/new",(req,res)=>{
    const r_address=req.body.r_address;
    const r_name=req.body.r_name;
    const r_number=req.body.r_number;
    const sql="insert into retailer values(?,?,?)"
    db.query(sql,[r_address,r_name,r_number],(err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})
router.post("/update",(req,res)=>{
    console.log(req.body);
    const r_address=req.body.r_address;
    const r_name=req.body.r_name.value;
    const r_number=req.body.r_number;
    const sql="update retailer set r_address=?,r_no=? where r_name=?"
    db.query(sql,[r_address,r_number,r_name],(err,result)=>{
        if(err) console.log(err);
        res.send(result)
    })
})
module.exports = router;