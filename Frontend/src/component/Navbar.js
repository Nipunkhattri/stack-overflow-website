import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom'
import logo from "../logo.png"
import "./Navbar.css"
import Avatar from './Avatar'
import { setcurrentUser } from '../actions/Currentuser';
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>(state.currentUserreducer));
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(setcurrentUser(JSON.parse(localStorage.getItem('profile'))))
  },[dispatch])

  const handlelogout = () =>{
    dispatch({type:"LOGOUT"})
    navigate("/auth")
    dispatch(setcurrentUser(null))
  }

  return (
    <>
    <div className='navbar'>
        <Link to= '/' className='nav'>
            <img className='img' src={logo}/>
        </Link>
        <div className='a'>
        <ul>
            <li>
                <a href="" className='nav-item'>About</a>
                <a href="" className='nav-item'>Product</a>
                <a href="" className='nav-item'>For Team</a>
            </li>
        </ul>
        <input className='b' type="text" placeholder='search'/>
        </div>
        {user===null?
        <Link to="/Auth" className='btn'><a className='la'>Login</a></Link>:<>
        <Avatar backgroundColor="#435c6c" py="8px" px="7px" borderRadius="60%" color="white" fontSize="20px" cursor="pointer" height="21px" width="20px" ><Link style={{"textDecoration":"none","marginLeft":"2px","position":"absolute","marginTop":"-4px","color":"white"}} to={`/users/${user?.result?._id}`}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
        <button className='btn' onClick={()=>{handlelogout()}}>Logout</button>
        </>}
    </div>
    </>
  )
}

export default Navbar
