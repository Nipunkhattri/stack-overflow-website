import React, { useEffect } from 'react'
import "./Home.css"
import Left from './Left'
import Middlebar from './Middlebar'
import ChatBot from "react-simple-chatbot";
import {Segment} from "semantic-ui-react";
import Right from './Right'
import { useState } from 'react';
const Home = () => {
  console.log(`${process.env.REACT_APP_API_BOT}`);
  const [chatbtn,setchatbtn]=useState(false);
//  useEffect(()=>{
//   (function(d, m){
//       var kommunicateSettings = 
//           {"appId":`${process.env.REACT_APP_API_BOT}`,"popupWidget":true,"automaticChatOpenOnNavigation":true};
//       var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//       var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//       window.kommunicate = m; m._globals = kommunicateSettings;
//   })(document, window.kommunicate || {});
// /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
//  },[])
const handlechat = ()=>{
  setchatbtn(true);
}
const handlecut = ()=>{
  setchatbtn(false)
}
const steps = [

  {
    id: "Greet",
    message: "Hello, Welcome to our website",
    trigger: "Done",
  },

  {
    id: "Done",
    message: "Please enter your name!",
    trigger: "waiting1",
  },

  {
    id: "waiting1",
    user: true,
    trigger: "Name",
  },

  {
    id: "Name",
    message: "Hi {previousValue}, Please select your options",
    trigger: "issues",
  },

  {
    id: "issues",
    options: [
      {
        value: "React",
        label: "React",
        trigger: "React",
      },
      { value: "Node js", label: "Node js", trigger: "Node js" },
    ],
  },

  {
    id: "React",
    message:
      "React is framework of frontend",
    end: true,
  },

  {
    id: "Node js",
    message:
    "Node js is a framework of backend",
    end: true,
  },

]; 
  return (
    <>
    <div className='hme'>
      <Left/>
      <Middlebar/>
      <Right/>
      <div className="chatbot">
        {
          chatbtn==true?
          <>
          <Segment floated='right'>
            <ChatBot steps={steps}/>
          </Segment>
          <button onClick={handlecut} className='chatbtn'>Close</button></>:
          <button onClick={handlechat} className='chatbtn'>Chatbot</button>
        }
      </div>
    </div>
    </>
  )
}

export default Home
