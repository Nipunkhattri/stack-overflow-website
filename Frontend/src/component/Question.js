import React from 'react'
import "./Home.css"
import Left from './Left'
import Middlebar from './Middlebar'
import Questiondetails from './Questiondetails'
import Right from './Right'
const Question = () => {
  return (
    <>
    <div className='hme'>
      <Left/>
      <Middlebar/>
      <Right/>
    </div>
    </>
  )
}

export default Question
