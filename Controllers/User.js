import mongoose from "mongoose"
import User from "../Models/auth.js"
export const getAlluser = async (req,res) =>{
    try {
        const allusers = await User.find()
        const alluserdetails = [];
        allusers.forEach(users => {
            alluserdetails.push({_id:users._id,name:users.name,tags:users.tags,joinedOn:users.JoinedOn});
        });
        console.log(alluserdetails);
        res.status(200).json(alluserdetails);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const updateprofile = async (req,res) =>{
    const {id:_id} = req.params;
    const {name,tags} = req.body;
    console.log(name,tags)
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("question unavailable.....");   
    }
    try {
        const updateprofile = await User.findByIdAndUpdate(_id,{$set:{'name':name,'tags':tags}},{new:true});
        console.log(updateprofile);
        res.status(200).json(updateprofile)
    } catch (error) {
        console.log(error);
    }
}
