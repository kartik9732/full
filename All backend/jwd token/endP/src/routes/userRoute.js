const express=require("express");
const {signup,login,logout}=require("../../controllers/user")
const auth=require("../../middleware/auth")
const userApp=express();

userApp.get("/",(req,res)=>{
    res.render("Home");
})
userApp.get("/Profile",auth,(req,res)=>{
    res.render("profile");
})
userApp.get("/about",(req,res)=>{
    res.render("profile");
})
userApp.get("/signup",(req,res)=>{
    res.render("signup");
})
userApp.get("/login",(req,res)=>{
    res.render("login");
})
userApp.get("/logout",logout)
userApp.post("/signup",signup);
userApp.post("/login",login);
module.exports=userApp;