import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import "./AskQuestion.css"
import { askquestion } from '../actions/Question'

const AskQuestion = () => {

    const [questionTitle,setquestionTitle]=useState("")
    const [questionBody,setquestionBody]=useState("")
    const [questionTags,setquestionTags]=useState("")

    const dispatch=useDispatch();
    const User = useSelector((state)=>(state.currentUserreducer))
    // console.log(User);
    const navigate = useNavigate();

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log({questionTitle,questionBody,questionTags,userPosted:User.result.name})
        dispatch(askquestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User.result._id},navigate));
    }

    const handleEnter = (e)=>{
        if(e.key=="Enter"){
            setquestionBody(questionBody);
        }
    }

  return (
    <div className='ask-question'>
        <div className="ask-ques-contain">
            <h1>Ask a Public Question</h1>
            <form action="">
                <div className="ask-form-contain">
                    <label htmlFor="Ask-ques-title">
                        <h4>Title</h4>
                        <p>Be Specific and imagine you are asking a question to another person</p>
                        <input type="text" name='questionTitle'  onChange={(e)=>{setquestionTitle(e.target.value)}} id='ask-ques-title'/>
                    </label>
                    <label htmlFor="Ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea type="text" name='questionBody'  onChange={(e)=>{setquestionBody(e.target.value)}} onKeyPress={handleEnter} cols="30"rows="10" id='ask-ques-body'/>
                    </label>
                    <label htmlFor="Ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what the question is about</p>
                        <input type="text" name='questionTags'  onChange={(e)=>{setquestionTags(e.target.value.split(" "))}} id='ask-ques-tags'/>
                    </label>
                </div>
                <input type="submit" value="Review your question" onClick={handlesubmit} className="review-btn" />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion
