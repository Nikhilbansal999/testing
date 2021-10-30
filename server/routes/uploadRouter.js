const express=require("express");
const router=express.Router();
const fileUpload=require("express-fileupload");

router.post("/sell",(req,res)=>{
    if(req.files==null){
        return res.status(400).json({msg:"NO files found"});
    }
    const file=req.files.file;
    file.mv(`$(_dirname)/random-project/public/uploads/${file.name}`,(err)=>{
        if(err){
            console.log(err);
            return res.status(500).send(err)
        }
        res.json({fileName:file.name,filePath:`/uploads/${file.name}`});
    });
});
module.exports=router