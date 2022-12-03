import Questions from "../Models/Askques.js"
import mongoose from "mongoose"

export const AskQuestions = async (req,res) =>{
    const postquestiondata = req.body;
    console.log(postquestiondata); 
    const postquestion = new Questions({...postquestiondata});
    try {
        await postquestion.save();
        res.status(200).json("posted succesfully");
    } catch (error) {
        console.log(error)
    }
}

export const Getquestions = async (req,res) =>{
    try {
        const questionlist = await Questions.find();
        res.status(200).json(questionlist);
    } catch (error) {
        console.log(error);
    }
}

export const deleteQuestion = async (req,res)=>{
    const {id :_id}= req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("question unavailable.....");   
    }

    try {
        await Questions.findByIdAndRemove(_id);
        res.status(200).json({message:"successfully deleted"})   
    } catch (error) {
        console.log(error);
    }
}

export const voteQuestion = async(req,res)=>{
    const{id:_id}=req.params;
    const{value,userId}= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("question unavailable.....");   
    }
    try {
        const question = await Questions.findById(_id);
        const upIndex = question.upvotes.findIndex((id)=>id===String(userId));
        const downIndex = question.downvotes.findIndex((id)=>id===String(userId));

        if(value === "upvote"){
            if(downIndex !== -1){
                question.downvotes = question.downvotes.filter((id)=>id!==String(userId));
            }
            if(upIndex === -1){
                question.upvotes.push(userId);
            }
            else{
                question.upvotes = question.upvotes.filter((id)=>id!==String(userId));
            }
        }
        if(value === "downvote"){
            if(upIndex !== -1){
                question.upvotes = question.upvotes.filter((id)=>id!==String(userId));
            }
            if(downIndex === -1){
                question.downvotes.push(userId);
            }
            else{
                question.downvotes = question.downvotes.filter((id)=>id!==String(userId));
            }
        }
        await Questions.findByIdAndUpdate(_id,question);
        res.status(200).json({message:"successfully done"})
    } catch (error) {
        console.log(error);
    }

}