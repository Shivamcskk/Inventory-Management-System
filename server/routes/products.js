
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
router.post('/recent',(req,res)=>{
    const sqlInsert = "INSERT INTO recent VALUES(?);";

   console.log(req.body.rec);
        db.query(sqlInsert,[req.body.rec],(err,result)=>{
            if(err) //console.log(err);
            //console.log(result);
            res.send(result);

      
    });
    
})
router.get('/recent',(req,res)=>{
    const sqlSelect ="SELECT * FROM RECENT;";
    db.query(sqlSelect,(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result[result.length-1]);
    })
})
router.get("/categories",(req,res)=>{
    
    const sqlSelect = "SELECT DISTINCT category from products;";

    db.query(sqlSelect,(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
    
});


router.post("/categories",(req,res)=>{
    const category = req.body.category;
    const sqlSelect = "SELECT p.p_name,p.category,p.brand,p.price,s.item_left,l.row,l.zone,l.colum from products as p,stocks as s,location as l where p.p_name=s.p_name AND p.p_name=l.p_name AND p.category=?;";
    db.query(sqlSelect,[category],(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
});


module.exports = router;