import React from 'react'

const ProfileBio = ({currentprofileuser}) => {
  return (
    <div>
        <div>

      {
          currentprofileuser?.tags.length !== 0 ?
          (
              <>
                <h4 style={
                    {
                        "fontSize":"19px",
                        "fontWeight":500
                    }
                }>Tags Watched</h4>
                {
                    currentprofileuser?.tags.map((tag)=>{
                         return <p key={tag}>{tag}</p>
                    })
                }
                </>
            ):(
                <p>0 Tags Watched</p>
                )
            }
            </div>
            <div>
                {
                currentprofileuser?.about?(
                    <>
                        <h4>About</h4>
                        <p>{currentprofileuser.about}</p>
                    </>
                ):(
                    <p style={
                        {
                            "fontSize":"17px",
                            "fontWeight":400
                        }
                    }>No bio Found</p>
                )
                }
            </div>
    </div>
  )
}

export default ProfileBio
