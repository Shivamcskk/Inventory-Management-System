const express = require('express');
let router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbms'
});

router.post("/in",async(req,res)=>{
    const category = req.body.Category;
    const sqlInsert = "INSERT INTO categories (category) VALUES(?);";
 
    console.log(category);
       db.query(sqlInsert,[category],(err,result)=>{
            if(err) console.log(err);
            console.log(result);
            const sqlInsert1 = "INSERT INTO brands (brand) VALUES(?);";
            const brand = req.body.brand;
           console.log(brand);
                db.query(sqlInsert1,[brand],(err,result)=>{
                    if(err) console.log(err);
                    console.log(result);
                    const sqlInsert2 = "INSERT INTO products (p_name,category,brand,price) VALUES(?,?,?,?);";
       
            const p_name=req.body.p_name;
            const price=req.body.price;
           console.log(brand);
                db.query(sqlInsert2,[p_name,category,brand,price],(err,result)=>{
                    if(err) console.log(err);
                    console.log(result);
                    
                const sqlInsert3 = "INSERT INTO stocks (p_name,item_left) VALUES(?,?);";
                const item_left = req.body.no_items;
               
                db.query(sqlInsert3,[p_name,item_left],(err,result)=>{
                    if(err) {
                     const mod= "UPDATE stocks SET item_left=item_left+? WHERE p_name=?;";
                     db.query(mod,[item_left,p_name],(e,r)=>{
                         if(e)console.log(e);
                         console.log(r);
                         const sqlInsert4="INSERT INTO orders (p_name,r_name,no_items,o_type,in_price,ttl_price) VALUES(?,?,?,?,?,?);";
                         const ttl_price=price*item_left;
                         db.query(sqlInsert4,[p_name,req.body.r_name,item_left,1,price,ttl_price],(e,r)=>{
                             if(e)console.log(e)
                             console.log(r)
                         })
                      
                })
                }
                    
                    else 
                    {
                            console.log(result);
                            const sqlInsert4="INSERT INTO orders (p_name,r_name,no_items,o_type,in_price,ttl_price) VALUES(?,?,?,?,?,?);";
                            const ttl_price=price*item_left;
                            db.query(sqlInsert4,[p_name,req.body.r_name,item_left,1,price,ttl_price],(e,r)=>{
                                if(e)console.log(e)
                                console.log(r)
                            })
                    }
                   
                });
                   
                });
                   
                });
        
        });
       
        res.send(req.body);

 return;
});
router.post("/out",async(req,res)=>{
    const p_name=req.body.p_name;
    const price=req.body.price;
    const r_name=req.body.r_name;
    const no_items=req.body.no_items;
    console.log(req.body.no_items);

    const sqlUpdate= "UPDATE stocks SET item_left=item_left-? WHERE p_name=?;";
                     db.query(sqlUpdate,[no_items,p_name],(e,r)=>{
                         if(e)console.log(e);
                         console.log(r);
                        
                        
                        })
    const sqlInsert4="INSERT INTO orders (p_name,r_name,no_items,o_type,in_price,ttl_price) VALUES(?,?,?,?,?,?);";
                        const ttl_price=price*no_items;
                        db.query(sqlInsert4,[p_name,r_name,no_items,0,price,ttl_price],(e,r)=>{
                            if(e)console.log(e)
                            console.log(r)
                        })
    
})
module.exports = router;