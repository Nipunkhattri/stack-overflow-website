import React,{useState} from 'react'
import "./Left.css"
import { Link } from 'react-router-dom'
const Left = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  const active = ()=>{
    // document.q.classList.add("active")
    document.querySelector(".x1").classList.add("active")
    document.querySelector(".x2").classList.add("active")
    document.querySelector(".x3").classList.add("active")
    // document.querySelector(".").classList.add("active")
  }
  return (
    <div style={

      {
        "width":"110px"
      }
    }>

      <div className='x'>
        <div className="home-left">
        <Link to="/" onClick={active} className='x1 active'>Home</Link>
        </div>
        <div className='x2'>Public</div>
        <ul className='uul'>

        <div style={
          {
            "marginBottom":"14px"
          }
        }>
        <Link   to="/Question" onClick={active} className='x3'  >Questions</Link>
        </div>
        <div style={
          {
            "marginBottom":"14px"
          }
        }>
        <Link   to="/Tags" onClick={active} className='x3'   >Tags</Link>
        </div >
        <div style={
          {
            "marginBottom":"14px"
          }
        }>
        <Link to="/users" onClick={active} className='x3'   >Users</Link>
        </div>
        </ul>
      </div>
    </div>
 
    
  )
}

export default Left
