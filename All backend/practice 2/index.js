const express =require("express");
const app=express();
const port=4000;
app.get("/",(req,res)=>{
res.send("<h1>Hello world</h1>");
});
app.post("/",(req,res)=>{
    console.log("name");
});

app.listen(port,()=>{
    console.log(`server is working on port:${port}`);
});