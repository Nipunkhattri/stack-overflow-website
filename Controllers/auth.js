import  Jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"
import users from "../Models/auth.js"

export const signup = async(req,res)=>{
    const {name,email,password,phone} =req.body;
    try {
        const existinguser = await users.findOne({email});
        if(existinguser){
            return res.status(404).json("user already exist");
        }
        const hashpass = await bcrypt.hash(password,12)
        const newuser = await users.create({name,email,password:hashpass,phone});
        const token = Jwt.sign({email:newuser.email,id:newuser._id},process.env.SECRET,{expiresIn:"1h"});
        res.status(200).json({result:newuser,token})

    } catch (error) {
        res.status(500).json("something went wrong");
    }
}   
export const login = async (req,res)=>{
    const {email,password}=req.body;
    console.log(email);
    try {
        const existinguser = await users.findOne({email});
        if(!existinguser){
            return res.status(404).json("user doesnot exist");
        }
        const ispasswordcrt= await bcrypt.compare(password,existinguser.password);
        if(!ispasswordcrt){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = Jwt.sign({email:existinguser.email,id:existinguser._id},"test",{expiresIn:"1h"});
        res.status(200).json({result:existinguser,token})
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}
export const setotp = async(req,res)=>{
    const {phone} = req.body;
    console.log(phone); 
    try {
        const existinguser = await users.find();
        console.log(existinguser);
        if(!existinguser){
            return res.status(404).json("user doesnot exist");
        }
        // const ispasswordcrt= await bcrypt.compare(password,existinguser.password);
        // if(!ispasswordcrt){
        //     return res.status(400).json({message:"Invalid credentials"});
        // }
        const token = Jwt.sign({email:existinguser[0].email,id:existinguser[0]._id},"test",{expiresIn:"1h"});
        res.status(200).json({result:existinguser[0],token})
    } catch (error) {
        res.status(500).json("something went wrong");
    }
}