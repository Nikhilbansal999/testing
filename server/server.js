const express=require("express");
const mongoose=require("mongoose");
const parser=require("body-parser");
const jwt=require("jsonwebtoken");
const bcrypt=require('bcrypt');
const fileUpload=require("express-fileupload");
const cors=require("cors");

const app=express();
app.use(express.json())
app.use(parser.json({limit:"30mb", extended:true}));
mongoose.connect("mongodb+srv://nikhil:nikhil@cluster0.fupnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser:true,useUnifiedTopology:true} , ()=>{
    console.log("connected to database");
});


app.use(fileUpload());
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const signupRoutes=require("./routes/signupRouter.js");
const loginRoutes=require("./routes/loginRouter.js");
const uploadRoutes=require("./routes/uploadRouter.js")
app.use('/signup',signupRoutes)
app.use("/login",loginRoutes)
app.use("/sell",uploadRoutes);

app.listen(5000,()=>{
    console.log("connected to server at 5000 port");
})