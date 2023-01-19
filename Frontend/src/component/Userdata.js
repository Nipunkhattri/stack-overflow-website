import React from 'react'
import { NavLink } from 'react-router-dom'
import "./User.css"

const Userdata = ({user}) => {
  return (
    <NavLink to={`/users/${user._id}`} className="user-profile-link">
        <h3 style={
      {
        "backgroundColor":"#435c6c",
        "color":"white"
      }
    }>
            {user.name.charAt(0).toUpperCase()}
        </h3>
        <h5>{user.name}</h5>
    </NavLink>
  )
}

export default Userdata
