
const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});

router.post("/in",(req,res)=>{
    console.log(req.body);
    const sqlSelect = "SELECT * FROM userdetail where username=?;";
    db.query(sqlSelect,[req.body.username],(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        res.send(result);
    });
});
router.post('/',(req,res)=>{
    const sqlSelect = "SELECT * FROM userdetail where username=?;";
    db.query(sqlSelect,[req.body.username],(err,result)=>{
        if(err) console.log(err);
        //console.log(result);
        if(result.length>0)
        {
            const sqlInsert = "update userdetail set name=?,address=?,mobile=? where username=?;";
            const username = req.body.username;
            
           console.log(req.body.name);
                db.query(sqlInsert,[req.body.name,req.body.address,req.body.mobile,username],(err,result)=>{
                    if(err) console.log(err);
                    console.log(result);
                    res.send(result);
        
              
            });
        }
        else{
            const sqlInsert = "INSERT INTO userdetail (name,address,mobile,username) VALUES(?,?,?,?);";
            const username = req.body.username;
            
           console.log(req.body.name);
                db.query(sqlInsert,[req.body.name,req.body.address,req.body.mobile,username],(err,result)=>{
                    if(err) console.log(err);
                    console.log(result);
                    res.send(result);
        
              
            });
        }
    });
   
    
})








module.exports = router;