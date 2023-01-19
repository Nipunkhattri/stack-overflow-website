import React from 'react'
import Left from './Left'
import Userlist from './Userlist'
import { useLocation } from 'react-router-dom'
import "./User.css"

const User = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className='home-container-1'>
      <Left/>
      <div className='home-container-2'>
        <Userlist/>
      </div>
    </div>
  )
}

export default User
