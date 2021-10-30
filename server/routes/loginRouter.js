const express=require("express")
const router=express.Router();
const signups=require('../models/signupModel.js');
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");

router.post("/",(req,res)=>{
console.log(req.body);
signups.findOne({email:req.body.email},(err,user)=>{
    if(err){ console.log(err);}
    else{
        if(!user){res.status(406).send({msg:"invalid Email"})}
        else{
            return bcrypt.compare(req.body.password,user.password,(err,resu)=>{
                console.log(resu);
                if(err){ res.status(403).send(err)}
                else 
                 if(!resu){ res.status(401).send({msg:"invalid password"})}
                else{
                        let token=jwt.sign({sub:user._id.toHexString()},'secretKey').toString();
                        console.log(token);
                        user.token=token;
                        user.save().then((ree)=>{
                            res.status(200).header('x-auth',token).send({"token":token})
                          }).catch((err)=>{
                            res.send(err);
                        })
                    }
            })
    }
    }
});
});
module.exports=router