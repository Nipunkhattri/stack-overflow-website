import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Middlebar.css"
import { Link , useNavigate } from 'react-router-dom'
import Questionlist from './Questionlist'
import { useSelector } from 'react-redux'
import moment from "moment"

const Middlebar = () => {

    const location = useLocation();
    const history = useNavigate();
    const user =1;
    const questionlist = useSelector(state=>state.questionReducer)
    console.log(questionlist);

    // var questionlist = [{
    //     _id:1,
    //     votes:3,
    //     // downVotes:2,
    //     noofans:2,
    //     questiontitle:"What is a function?",
    //     questionbody:"It meant to be",
    //     questionTags:["java","node js","react js","mongo db"],
    //     userposted:"mano",
    //     userId:1,
    //     askedOn:"jan1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswered:"Kumar",
    //         answeredOn:"jan 2",
    //         userId: 2
    //     }]
    // },
    // {
    //     _id:2,
    //     votes:3,
    //     // downVotes:2,
    //     noofans:2,
    //     questiontitle:"What is a node?",
    //     questionbody:"It meant to be",
    //     questionTags:["java","node js","react js","mongo db"],
    //     userposted:"mano",
    //     userId:2,
    //     askedOn:"jan1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswered:"Kumar",
    //         answeredOn:"jan 2",
    //         userId: 2
    //     }]
    // },
    // {
    //     _id:3,
    //     votes:3,
    //     // downVotes:2,
    //     noofans:2,
    //     questiontitle:"What is a react?",
    //     questionbody:"It meant to be",
    //     questionTags:["java","node js","react js","mongo db"],
    //     userposted:"mano",
    //     userId:3,
    //     askedOn:"jan1",
    //     answer:[{
    //         answerBody:"Answer",
    //         userAnswered:"Kumar",
    //         answeredOn:"jan 2",
    //         userId: 2
    //     }]
    // }]
const redirect = ()=>{
    if(user==null){
        alert("login or signup to ask a question")
        history("/auth")
    }
    else{
        history("/AskQuestion")
    }
}

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
            location.pathname==="/"?<h1 className='head'>Top Questions</h1>:<h1 className='head'>All Question</h1>
        }
        <button onClick={redirect} className='ask-btn'>Ask Question</button>

      </div>
      <div>
        {
          questionlist.data==null?
          <h1 className='head'>Loading...</h1>:
          <>
            <p className='pq'>
                {questionlist.data.length} questions
            </p>
          <hr/>
                <Questionlist questionlist={questionlist.data}/>
            </>
        }
      </div>
    </div>
  )
}

export default Middlebar;
