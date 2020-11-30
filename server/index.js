const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const products = require('./routes/products.js');
const contact=require('./routes/contact')
const retailer=require('./routes/retail')
const order=require('./routes/order')
const stocks =require('./routes/stocks')
const location =require('./routes/location')
const bcrypt = require('bcrypt');
const users=require('./routes/users')
const saltRounds=10;
const history =require('./routes/history')

const cookieParser = require('body-parser');
const session = require('express-session');
const { use } = require('./routes/retail');
let user = [];

app.use(express.json());
app.use(
    cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key:"userId",
    secret:"subscribe",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires: 60*60*24,
    },
    })
);

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});


app.use("/api/products",products);
app.use("/api/contact",contact);
app.use("/api/retailer",retailer)
app.use("/api/order/",order)
app.use("/api/stocks/",stocks)
app.use('/api/location',location)
app.use('/api/users',users)
app.use('/api/history',history)

app.post('/api/register',(req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const sqlInsert = "INSERT INTO users (username,email,password) VALUES(?,?,?);";

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err) res.send({err:err});
        db.query(sqlInsert,[username,email,hash],(err,result)=>{
            if(err) console.log(err);
            res.send(result);
        });
    });
});

app.post('/api/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const sqlSelect = "SELECT * FROM users WHERE username=?;";
    db.query(sqlSelect,username,(err,result)=>{
        if(err){
            console.log('fucked');
            res.send({err:err});
        }

        if(result.length>0){
            bcrypt.compare(password,result[0].password,(err,responce)=>{
                if(err) console.log(err);
                if(responce){
                    console.log(result.username)
                    user.push(result); //manually saving the result and updating sessions
                    req.session.user = result;
                    console.log(req.session.user);
                    console.log(responce);
                    res.send(result);
                }
                else{
                    console.log("wrong username/password combination!");
                    res.send({message:"wrong username/password combination!"});
                }
            });
        }else{
            console.log("user does not exist!");
            res.send({ message:"user does not exist!" });
        }
    });
});

app.get("/api/login",(req,res)=>{
    //manually updating user bz automatic sessions remembering is not done
    const len=user.length;
    console.log(req.session)
    req.session.user = user[len-1];
    
    if(user.length>0){
        res.send({ loggedIn:true , user:req.session.user });
    }else{
        res.send({loggedIn:false});
    }
});
app.get("/api/logout",(req,res)=>{
    
    console.log("done");
    user=[];
    res.send("done");
    
})


app.listen(3001,()=>{
    console.log('server listening to port 3001');
})