import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "./component/Home"
import Auth from './component/Auth'
import Signup from './component/Signup'
import Left from './component/Left'
import Right from './component/Right'
import Middlebar from './component/Middlebar'
import Question from './component/Question'
import AskQuestion from './component/AskQuestion'
import User from './component/User'
import Tag from './component/Tag'
// import Questiondetails from './component/Questiondetails'
import Displayquestions from './component/Displayquestions'
import {getAllQuestions} from "./actions/Question"
import { useDispatch } from 'react-redux'
import { getAllusers } from './actions/user'
import Userprofile from './component/Userprofile'
import Otplogin from './component/Otplogin'

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllQuestions())
    dispatch(getAllusers())
  },[dispatch])
  // const steps = [
  //   {
  //     id:'Greet',
  //     message:"hellooo",
  //     trigger:"Ask Name"
  //   },
  //   {
  //     id:"Ask Name",
  //     message:"enter the name",
  //     trigger:"wating1"
  //   },
  //   {
  //     id:"wating1",
  //     user:true,
  //     trigger:"Name"
  //   },
  //   {
  //     id:"Name",
  //     message:"hii (previousValue) Please select the option",
  //     trigger:"issues"
  //   },{
  //     id:"issues",
  //     option:[
  //     {value:"React",label:"React",trigger:"React"},
  //     {value:"Angular",label:"Angular",trigger:"Angular"}
  //     ],
  //   },
  //   {
  //     id:"React",
  //     message:"React is a framework",
  //     end:true
  //   },
  //   {
  //     id:"Angular",
  //     message:"angular is also the framework",
  //     end:true
  //   },
  // ]

  return (
    <>
      {/* <h1>stack overflow</h1> */}
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/> }/>
      <Route exact path='/left' element={<Left/>}/>
      <Route exact path='/Auth' element={<Auth/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/Right' element={<Right/>}/>
      <Route exact path='/middle' element={<Middlebar/>}/>
      <Route exact path='/AskQuestion' element={<AskQuestion/>}/>
      <Route exact path='/Question' element={<Question/>}/>
      <Route exact path='/Question/:id' element={<Displayquestions/>}/>
      <Route exact path='/Tags' element={<Tag/>}/>
      <Route exact path='/users' element={<User/>}/>
      <Route exact path='/users/:id' element={<Userprofile/>}/>
      <Route exact path='/otplogin' element={<Otplogin/>}></Route>
    </Routes>
    </>
  )
}

export default App
