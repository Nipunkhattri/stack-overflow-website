import React from 'react'
import Questionall from './Questionall'

const Questionlist = ({questionlist}) => {
  return (
    <div>
      {
        questionlist.map((questions)=>{
            return <Questionall questions={questions} key={questions.id}/>
        })
      }
    </div>
  )
}

export default Questionlist
