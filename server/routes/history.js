const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});

router.get("/all",(req,res)=>{
    const sqlSelect = "SELECT * FROM orders;";
    db.query(sqlSelect,(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        res.send(result);
    });
})
router.post("/",(req,res)=>{
    console.log(req.body)
    const sql="select * from orders where username=?";
    db.query(sql,[req.body.username],(err,result)=>{
        if(err)console.log(err);

        res.send(result);
    })
})
module.exports = router;