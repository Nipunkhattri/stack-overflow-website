import React from 'react'

const Avatar = ({children, backgroundColor,px,py,color,borderRadius,fontSize,cursor,height,width}) => {
    const style = {
        backgroundColor,
        padding:`${py} ${px}`,
        color:color,
        borderRadius,
        fontSize:fontSize,    
        cursor:cursor|| null,
        height:height,
        width:width
    }

  return (
    <div className='nav-btn' style={{"marginTop":"8px"}}>
      <div style={style}>
        {children}
      </div>
    </div>
  )
}

export default Avatar
