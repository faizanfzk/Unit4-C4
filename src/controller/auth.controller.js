const User=require("../models/user.model");
const jwt=require("jsonwebtoken");


const generateToken=(user)=>{
    return jwt({user})
}


const register=async(req,res)=>{
    try {
        let user= await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).send("EEmail already exist")
        }

        user=await User.create(req.body)
        const token= generateToken(user)
        return res.status(200).send(user,token)
    
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send("Wrong Email or password");
        }
        const match=user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send("Wrong email or password")
        }

        const token= generateToken(user)
            return res.status(200).send(user,token)
        

        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports={register,login}
