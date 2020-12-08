const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const gravatar=require('gravatar')
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
const cookieparser=require('cookie-parser');

const cookieParser = require('body-parser');
const session = require('express-session');
const { use } = require('./routes/retail');
let user = [];

app.use(express.json());
app.use(
    cors()
);
app.use(cookieparser('secret'));
app.use(cookieParser('secret'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key:"userId",
    secret:"subscribe",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires: 60*60*60*60,
        httpOnly:false,
        secure:false
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
    const img=gravatar.url(email,{
        s:'200',
        r:'pg',
        d:'mm'
    })
    const sqlInsert = "INSERT INTO users (username,email,password,img) VALUES(?,?,?,?);";

    bcrypt.hash(password,saltRounds,(err,hash)=>{
        if(err) res.send({err:err});
        db.query(sqlInsert,[username,email,hash,img],(err,result)=>{
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
            console.log('error');
            res.send({err:err});
        }

        if(result.length>0){
            bcrypt.compare(password,result[0].password,(err,responce)=>{
                if(err) console.log(err);
                if(responce){
                    console.log(result.username)
                    user.push(result); //manually saving the result and updating sessions
                    req.session.user = result;
                    res.cookie('id', username, { signed: true, httpOnly: true });
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
    
    
    if(user.length>0){
        res.send({ loggedIn:true , user:user});
    }else{
        res.send({loggedIn:false});
    }
});
app.post("/api/login/user",(req,res)=>{
    const sqlSelect = "SELECT * FROM users WHERE username=?;";
    db.query(sqlSelect,req.body.username,(err,result)=>{
        if(err){
            console.log('error');
            res.send({err:err});
        };
        res.send(result);
      
});
})
app.get("/api/logout",(req,res)=>{
    
    console.log("done");
    user=[];
    res.send("done");
    
})

const PORT=process.env.PORT || 3001 ;
app.listen(PORT,()=>{
console.log(`server listening to port ${PORT}`);
})