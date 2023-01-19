import React,{useState} from 'react'
import "./Questiondetails.css"
import Avatar from "./Avatar"
import { Params, useParams ,Link, useNavigate,useLocation } from 'react-router-dom'
import upvotes from "../VOTE.png"
import downvotes from "../downvote.png"
import Displayans from './Displayans'
import { useSelector ,useDispatch} from 'react-redux'
import {PostAnswer} from "../actions/Question"
import moment from "moment"
import copy from "copy-to-clipboard"
import { deleteQuestion,voteQuestion } from '../actions/Question'
const Questiondetails = () => {
  const {id} = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionlist = useSelector(state=>state.questionReducer);
  console.log(questionlist);
  const location = useLocation();
  const url='https://stackoverflow-website-production.netlify.app'
  const [textarea,settextarea]=useState("");

  const user = useSelector(state=>state.currentUserreducer)
  console.log(user);
  const handlepostAns = (e,answerlength) =>{
    e.preventDefault();
    if(user===null){
      alert("login or sign up");
      navigate("/auth")
    }
    if(textarea===''){
      alert("Enter a answer")
    }
    else{
      console.log(answerlength+1);
      console.log(textarea);
      dispatch(PostAnswer({id,noofAnswers:answerlength+1,answersBody:textarea,userAnswered:user.result.name,userId:user.result._id}))
    }
  } 

  // console.log(questionlis.data);
//   var questionlist = [{
//     _id:"1",
//     upvotes:3,
//     downVotes:2,
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
//         userId: 1
//     }]
// },
// {
//     _id:"2",
//     upvotes:3,
//     downVotes:2,
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
//     _id:"3",
//     upvotes:3,
//     downVotes:2,
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
//         userId: 3
//     }]
// }]

const handleshare = ()=>{
  copy(url+location.pathname);
  alert("copied url : " +url+location.pathname)
}
const handledelete = () =>{
  console.log(id);
  dispatch(deleteQuestion(id,navigate))
}
const handleupvote = () =>{
  dispatch(voteQuestion(id,'upvote',user.result._id))
}
const handleDownvote = () =>{
  dispatch(voteQuestion(id,'downvote',user.result._id))
}
  return (
    <>
      {
        questionlist.data?questionlist.data.filter(questions=>questions._id===id).map((questions)=>(
          <div  key={questions._id}>
            <section className="quesiddetail">
              <div className='quesdet'>
                <div className="quesiddetail2"></div>
                <div className="quesvotes">
                  <div className="left">
                  <img src={upvotes} alt=" " onClick={()=>{handleupvote()}} width={18} height={12}/>
                  <p className='p'>{questions.upvotes.length - questions.downvotes.length}</p>
                  <img src={downvotes} alt="" onClick={()=>{handleDownvote()}} width={18} height={12}/>
                  </div>
                  <div className="ansheading">
                <h1 className='h1'>{questions.questionTitle}</h1>
                  </div>
                    
                    <div className="containnameasked">

                    <div className='ondatename'>
                      <p style={
                        {
                          "fontSize":"19px",
                          "fontWeight":"400"
                        }
                      }>asked {moment(questions.askedOn).fromNow()}</p>
                    </div>
                    <div className="namecontain">
                      
                    <div className="name">
                  <Link to={`/user/$(question.userID)`} style={{"textDecoration":"none"}} >
                    <Avatar backgroundColor="orange" px="10px" py ="10px"color ="black" borderRadius="60%" fontSize="17px"cursor ="pointer" height="20px" width='20px'>{questions.userPosted.charAt(0).toUpperCase()}</Avatar>
                  </Link>
                    </div>
                  <div className="name1">
                    {questions.userposted}
                  </div>
                    </div>
                    </div>
                </div>
                <div className='questag'>
                      <div className="para">
                    <p className='quesbody'>{questions.questionbody}</p>
                      </div>
                      <div className="tagss">
                      {
                        questions.questionTags.map((tag) =>(
                            <p key={tag}>{tag}</p>
                        ))
                      }
                      </div>
                    </div>
                <div style={{"width":"100%"}}>
                  <div className='userques'>
                    <div className='btn-ans'>
                      <button type='button' onClick={handleshare}>Share</button>
                      {
                        user?.result?._id === questions.userId && (
                          <button type='button' onClick={handledelete}>Delete</button>
                        )
                      }
                    </div>
                  </div>
                    
                </div>
              </div>
              <hr></hr>
              {/* {console.log(questions.noofAnswers.length} */}
            {
              questions.noofans !==0 &&(
                <h3 style={
                  {
                    "fontWeight":"500",
                    "fontSize":"19px"
                  }
                }>{questions.noofAnswers} answers</h3>
              )
            }
            <Displayans key={questions._id} questions={questions} handleshare={handleshare}/>
            <h3 style={
                  {
                    "fontWeight":"500",
                    "fontSize":"20px"
                  }
                }>Your Answer</h3>
            {/* {console.log(questions.noofAnswers)} */}
            <form onSubmit={(e)=>{handlepostAns(e,questions.noofAnswers)}}>
              <textarea name="" id="" cols="94" rows="13" onChange={(e)=>{settextarea(e.target.value)}}  ></textarea><br />
              <input type="submit" className='post-class-btn'  value='post your ans' />
            </form>
            <p style={
              {
                "fontSize":"17px"
              }
            }>
              Browse other question tagged
              {
                questions.questionTags.map((tag)=>(
                  <Link to = '/Tag' style={
                    {
                      "textDecoration":"none",
                      "fontSize":"19px",
                       "padding":"8px"
                    }
                  }>{tag}</Link>
                )
                )
              }
              <br></br>
              or
              {
                <Link to ='/AskQuestion' style ={{"textDecoration":"none","color": "blue"}}>Ask your own question</Link>
              }
            </p>
            </section>
          </div>
          
        ))
        :<></>
      }
    </>
  )
}

export default Questiondetails
