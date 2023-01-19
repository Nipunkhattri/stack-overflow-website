import React from 'react'
import "./TagList.css"

const TagList = ({tag }) => {
  return (
      <div className='tag'>
        <h4>{tag.tagname}</h4>
        <h5>{tag.tagDes}</h5>
    </div>
  )
}

export default TagList
