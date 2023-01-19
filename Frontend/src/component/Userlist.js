import React from 'react'
import { useSelector } from 'react-redux'
import Userdata from "./Userdata"
import "./User.css"

const Userlist = () => {
    
    const users = useSelector((state)=>state.userreducer)
    console.log(users);
    return (
    <div className='user-list-conatiner'>
      {
        users?.map((user)=>{
          return <Userdata key={user?._id} user={user}/>
        })
      }
    </div>
  )
} 

export default Userlist
