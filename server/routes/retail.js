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
module.exports = router;