import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from './Avatar'
import "./Displayans.css"
import moment from "moment"
import { useDispatch, useSelector } from 'react-redux'
import { deleteAnswer } from '../actions/Question'
const Displayans = ({questions,handleshare}) => {
    const user = useSelector(state=>state.currentUserreducer);
    const dispatch = useDispatch();
    const {id} = useParams();
    const handledeleteans = (answerId,noofAnswers) =>{
        // console.log("hii")
        dispatch(deleteAnswer(id,answerId,noofAnswers-1))
    }
  return (
    <div>
        {
            questions.answers?questions.answers.map((ans)=>(
                <div className='anscontain'>
                <b><p>{ans.answersBody}</p></b>
                <div className='answerptime'>
                    <p>answered on {moment(ans.answeredOn).fromNow()}</p>
                <div style={
                    {
                        "display":"flex",
                        "justifyContent":"space-between",
                        "width":"93px",
                        "alignItems":"center"
                    }
                }>
                <Link to={`/user/${questions.userId}`} >
                        <Avatar backgroundColor="Green" px="10px" py ="10px"color ="white"borderRadius="4px" fontSize="13px"cursor ="pointer">{questions.userPosted.charAt(0).toUpperCase()}</Avatar>
                      </Link>
                        <div>
                            {ans.userAnswered}
                        </div>
                </div>
                </div>
                <div className='ansnewbtn'>
                    <div className='butonans'>
                    <button type='button' className='sharebtn' onClick={handleshare}>Share</button>
                    {
                        user?.result?._id === ans.userId && (
                          <button type='button'  className='sharebtn' onClick={()=>{handledeleteans(ans._id,questions.noofAnswers)}}>Delete</button>
                        )
                      }
                <hr style={
                    {
                        "margin-top":" 48px",
                       "width": "603px"
                    }
                }></hr>
                    </div>
                    <div>
                
                
                    </div>
                </div>
                </div>
            )):<></>

        }
    </div>
  )
}

export default Displayans
