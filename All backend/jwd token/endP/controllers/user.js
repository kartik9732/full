
const usermodule=require("../src/module/userSchema");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const SecretKey="SIBAJIT";

const signup=async (req,res)=>{
    let data=await req.body
   try{
       const userexist=await usermodule.findOne({email:data.email});
       if(userexist){
           console.log("user exist");
       }
       
       else{
        const hashPassword=await bcrypt.hash(data.password,10);
           let result=await usermodule.create({
               username:data.username,
               email:data.email,
               password:hashPassword
           })
           
           const token=jwt.sign({email:result.email,id:result._id},SecretKey,{expiresIn:"1h"});
           res.cookie('token',token,{
               httpOnly:true
           })
           res.redirect("/");
       }
    
    

   }catch(error){
     console.log(error);
   }
}
const login=async (req,res)=>{
    const data=req.body;
    try {
        const userexist=await usermodule.findOne({email:data.email});
        if(!userexist){
           return res.status(400).json({error:"user not found"});
        }
        const matchpassword=await bcrypt.compare(data.password,userexist.password);
        if(!matchpassword){
            return res.status(401).json({error:"Invalid Password"})
        }
        const token=jwt.sign({email:userexist.email,id:userexist._id},SecretKey,{expiresIn:"1h"})
        // console.log(token);
        req.session.token = token;
        res.redirect("/");
        
    } catch (error) {
        return res.status(401).json({error:"somethings wrong"})
    }
}
const logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    })
}

module.exports={signup,login,logout};