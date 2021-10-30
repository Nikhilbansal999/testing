const express=require("express")
const app=express();
const mongoose=require("mongoose");
const schema=mongoose.Schema;
const SignupSchema=new schema({
    name:{
        require:true,
        type:String,
    },
    email:{
        require:true,
        type:String,
    }, password:{
        require:true,
        type:String,
    }, password1:{
        require:true,
        type:String,

    }, number:{
        require:true,
        type:Number,
        minLength:10,
        maxLength:10
    },
    token:{
type:String
    }
})
module.exports=mongoose.model('signup',SignupSchema);
