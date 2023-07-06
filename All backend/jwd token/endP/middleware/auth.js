const jwt=require("jsonwebtoken");
const SecretKey="SIBAJIT";

const auth=(req,res,next)=>{

    try {
        let token=req.session.token;
        if(token){
            let user=jwt.verify(token,SecretKey);
            console.log(user);
            req.userId=user.id
            next();
        }else{
            return   res.status(401).json({error:"Unuthorized user"})
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"something wrong"})
    }
}

module.exports=auth;