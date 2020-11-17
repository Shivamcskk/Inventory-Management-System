
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
    const sqlSelect = "SELECT * FROM PRODUCTS;";
    db.query(sqlSelect,(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        res.send(result);
    });
});


router.get("/categories",(req,res)=>{
    const category = req.body.category;
    const sqlSelect = "SELECT * FROM PRODUCTS WHERE PRODUCTS.CATEGORY=?;";
    db.query(sqlSelect,[category],(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
});


module.exports = router;