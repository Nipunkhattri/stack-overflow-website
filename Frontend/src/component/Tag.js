import React from 'react'
import Left from './Left'
import "./Tag.css"
import TagList from './TagList'
const Tag = () => {

  const Taglistarr = [{
    id:1,
    tagname:"Javascript",
    tagDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates eligendi ipsum at quibusdam exercitationem fuga numquam harum, ab ex."
  },{
    id:2,
    tagname:"Javascript",
    tagDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates eligendi ipsum at quibusdam exercitationem fuga numquam harum, ab ex."
  },{
    id:3,
    tagname:"Javascript",
    tagDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates eligendi ipsum at quibusdam exercitationem fuga numquam harum, ab ex."
  },{
    id:4,
    tagname:"Javascript",
    tagDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates eligendi ipsum at quibusdam exercitationem fuga numquam harum, ab ex."
  },{
    id:5,
    tagname:"Javascript",
    tagDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates eligendi ipsum at quibusdam exercitationem fuga numquam harum, ab ex."
  },{
    id:6,
    tagname:"Javascript",
    tagDes: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates eligendi ipsum at quibusdam exercitationem fuga numquam harum, ab ex."
  }]

  return (
    <div className='home-container-1'>
      <Left/>
      <div className='home-container-2'>
        <h1 className='h11'>Tags</h1>
        <p >A tag is a keyword or a label that catogaries your questions with other ,similar questions.</p>
        <p>Using the right tags make it easier to find and nswer the question</p>
        <div className="tags-list-container" style={
                    {
                        "fontSize":"19px",
                        "fontWeight":500
                    }
                }>
              {
                Taglistarr && Taglistarr.map && Taglistarr.map((tag)=>{
                  return <TagList tag={tag}  key={Taglistarr.id}/>
                })
              }
        </div>
      </div>
      {/* <Right/> */}
    </div>
  )
}

export default Tag
