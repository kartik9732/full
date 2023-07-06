const http=require("http");
const server=http.createServer((req,res)=>{});


server.listen(4000,"localhost",()=> {
    console.log("server is working on http://localhost:4000)");
});