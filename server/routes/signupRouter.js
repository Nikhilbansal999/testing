const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require('bcrypt');
const router=express.Router()
// const signups=require('./models/signupModel.js')
const signups=require('../models/signupModel.js');

router.post("/",(req,res)=>{
        console.log(req.body);
        console.log("data is displayed");
        signups.findOne({email:req.body.email}).then((result)=>{
                if(!result){
                        signups.findOne({number:req.body.number}).then((result)=>{
                                if(!result){
                                        bcrypt.genSalt(10,(err,salt)=>{
                                                bcrypt.hash(req.body.password,salt,(err,hash)=>{
                                                        if(err){
                                                                res.send(err)
                                                        }else{
                                                                var newsign=new signups({
                                                                        name:req.body.name,
                                                                        email:req.body.email,
                                                                        password:hash,
                                                                        password1:req.body.password1,
                                                                        number:req.body.number,
                                                                        token:req.body.token
                                                                
                                                                });
                                                                newsign.save().then((result=>{
                                                                        console.log(result)
                                                                        let token=jwt.sign({sub:result._id.toHexString()},"secretKey").toString();
                                                                        console.log(token)
                                                                        result.token=token;
                                                                        console.log(result);
                                                                        result.save().then((ress)=>{
                                                                                res.status(200).header('x-auth',token).send({"token":token})
                                                                        }).catch((err)=>{
                                                                                res.send(err);
                                                                        });
                                                                })).catch((err)=>{
                                                                        res.status(400).send(err)
                                                                })
                                                                }
                                                                })
                                                                })
                                                                }else{
                                                                        res.status(403).send({"msg":"contact number alreadsy exists"})
                                                                }
                                                                })
                                                               }else{
                                                                       res.status(403).send({"msg":"email already exists"})
                                                               }
        })
       
})

module.exports =router;