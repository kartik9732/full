const express=require ("express");
const app=express();
const session = require('express-session')
const userApp=require("../src/routes/userRoute");
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(session(
    {
        secret : "12io31212u38912731208uiojwkedfs)(&*#$(#@",
        saveUninitialized : true,
        resave : true,
        cookie : {maxAge : 24 * 60 * 60 * 1000}
    }
))
app.use(cookieParser());
app.set("view engine","ejs");


app.use(userApp);
mongoose.connect("url").then(()=>{
    app.listen(5000,()=>{
        console.log("Server running on 5000");
    })
}).catch((err)=>{
    console.log(err);
})





