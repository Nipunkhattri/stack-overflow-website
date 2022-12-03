import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    about:{
        type:String
    },
    tags:{
        type:[String]
    },
    JoinedOn:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("User",userschema);

