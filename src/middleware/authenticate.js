
const jwt=require("jsonwebtoken");
const { resolve } = require("path");

const verifyToken=(token)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,(err,decoded)=>{
            if(err){
                return reject(err)
            }else{
                return resolve(decoded)
            }
        })
    })
}

const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(401).send("Not found")
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(401).send("not found")
    }
    const token=req.headers.authorization.trim().split(" ")[1];

    let decoded;

    try {
        decoded=req.headers.authorization(token)
    } catch (error) {
        return req.status(401).send("Not Found")
    }

}
module.exports=authenticate;