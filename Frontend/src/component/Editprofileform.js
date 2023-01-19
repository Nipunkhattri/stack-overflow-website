import React from 'react'
import { useState } from 'react'
import "./userprofileedit.css"
import {useDispatch} from "react-redux"
import { updatedprofile } from '../actions/user'

const Editprofileform = ({currentuser,setSwitch}) => {

    const [name,setname]= useState(currentuser?.result.name);
    const [tags,settags]= useState('');
    const id = currentuser?.result?._id;
    const dispatch = useDispatch();

    const handlesubmit = (e)=>{
      e.preventDefault();
      if(tags.length === 0){
        dispatch(updatedprofile(id,{name,tags:currentuser?.tags}))
      }
      else{
        console.log(name,tags);
        dispatch(updatedprofile(id,{name,tags}))
      }
      setSwitch(false)
    }
  return (
    <div>
      <h1 className='edi-profile-title-1'>
        Edit Your Profile
      </h1>
      <hr />
      <h2 className='edit-profile-title-2'>
        public information
      </h2>
      <form action="" className="edit-profile-form" >
        <label htmlFor="">
            <h3>Display name</h3>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        </label>
        {/* <label htmlFor="">
            <h3>About me</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </label> */}
        <label htmlFor="">
            <h3>Watched Tags</h3>
            <p>Add tags seperated by 1 space</p>
            <input type="text"  id="tags" value={tags} onChange={(e)=>settags(e.target.value.split(' '))} />
        </label><br/>
        <input type="submit" value="save profile" className='user-submit-btn' onClick={handlesubmit}/>
        <button type='button' className='cancel-btn' onClick={()=>setSwitch(false)}>cancel</button>
      </form>
    </div>
  )
}

export default Editprofileform
