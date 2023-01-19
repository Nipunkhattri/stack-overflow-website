import React from 'react'
import "./Right.css"
const Right = () => {

const tags=["c","css","express","firebase","html","react","python","Mongo db","django","React Native","flask","Solidity"]
  return (
    <div style={
        {
            
            "width":"90%"
        }
    }>
    <div className='yz'>
    <div className='y'>
        <div className='y1'>
            <div className='y11'>
                <p className='r1'>The Overflow Block</p>
            </div>
            <div className='y12'>
                <p className="b9">Observability is key to future software</p>
                <p className="b9">Podcast 374:How valuable is your screen name</p>
            </div>
        </div>
        <div className='y2'>
            <div className='y21'><h5 className='r2'>Featured on Meta</h5></div>
            <div className='y22'>
                <p className="b9">Review queue workflows -Final release....</p>
                <p className="b9">Please welcome valued associate:#958</p>
                <p className="b9">Outdated Answers:accepted answer is now pinned on stack overflow</p>
            </div>
        </div>
        <div className='y3'>
            <div className='y31'><h5 className='r3'>Hot Meta Post</h5></div>
            <div className='y32'>
                <p className="b9">why spam flag denied,yet question is marked spam?</p>
                <p className="b9">What is best course of action </p>
                <p className="b9">is link "how to ask" a useful comment</p>
            </div>
        </div>
    </div>
    <div className='z'>
        <div className='m1'><h3  className="tag-head" >Watched Tags</h3></div>
        <hr></hr>
        <div className='m2'>
            {
                tags.map((tag)=>{
                    return <p className="b7">{tag}</p>
                })
            }
        </div>
    </div>
    </div>
    </div>

  )
}

export default Right
