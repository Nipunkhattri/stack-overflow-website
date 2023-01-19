import React, { useState } from 'react'
import Left from "./Left"
import Avatar from "./Avatar"
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import Editprofileform from "./Editprofileform"
import  ProfileBio from "./ProfileBio"
import "./userprofileedit.css"
const Userprofile = () => {
  const {id} = useParams();
  const users = useSelector((state)=>(state.userreducer))
  console.log(users);
  const currentuser = useSelector((state)=>(state.currentUserreducer))
  console.log(currentuser);

  const currentprofileuser = users.filter(user=>user?._id === id)[0]
  console.log(currentprofileuser);

  const [details,setdetails]= useState(null);

  // const getgeolocation = async () =>{
  //   // fetch("https://geolocation-db.com/json/c5544c60-581f-11ed-b302-a99a705cf413")
  //   console.log("hii");
  //   let response = await fetch("https://geolocation-db.com/json/c5544c60-581f-11ed-b302-a99a705cf413");
  //   console.log(response)

  //   if (response.ok) { // if HTTP-status is 200-299
  //     // get the response body (the method explained below)
  //     let json = await response.json();
  //     setdetails(json);
  //   } else {
  //     console.log("HTTP-Error: " + response.status);
  //   }
  // }
  const getgeolocation = ()=>{

    const success = (position) =>{
      // console.log(position);
      const lalitute = position.coords.lalitute;
      const longitute = position.coords.longitute;
      // console.log(lalitute + " " + longitute);

      const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lalitute}&longitude=${longitute}&localityLanguage=en`

      fetch(geoApiUrl)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setdetails(data);
      })

    }
    const error = () =>{
      console.log(error);
    }
    navigator.geolocation.getCurrentPosition(success,error);
  }
  const [Switch , setSwitch] = useState(false);
  return (
    <div className="home-container-1">
      <Left/>
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="#435c6c" color="white" fontSize="50px" px="40px" py="30px">
                {currentprofileuser?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1 className='head'>{currentprofileuser?.name}</h1>
              </div>
            </div>
            {
               currentuser?.result?._id===id && (
                <button type='button' onClick={()=>setSwitch(true)} className="edit-profile">
                    Edit Profile
                </button>
               )
            }

          </div>
          <>
          {
            Switch?(
              <Editprofileform currentuser={currentuser} setSwitch={setSwitch}/>
            ):(
              <ProfileBio currentprofileuser={currentprofileuser}/>
            )
          }
          </>
        </section>
        <button className='edit-profile1' onClick={getgeolocation}>Location</button>
        <div>
          <div>
            {
              details && <ul className='ul1'>
              <li>
                location : {`${details.city} , ${details.principalSubdivision} (${details.countryCode})`}
              </li>
            </ul>
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile
