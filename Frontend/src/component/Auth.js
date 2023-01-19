import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../download.png";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth.js";
import "./Auth.css";
const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [displayotp, setDisplayOTP] = useState(false);
  // const [isLogin, setIsLogin] = useContext(UserContext)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  console.log(user)
  const handleCred = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(login((user),navigate));
  }
  return (
    <>
      <div className="all-div">
    <div className="btn-ctrl">
      <h3 className="head-pg">𝕾𝖙𝖆𝖈𝖐 𝖔𝖛𝖊𝖗𝖋𝖑𝖔𝖜 𝖈𝖑𝖔𝖓𝖊</h3>
      {/* <img className="a10" src={logo} alt="" /> */}
      <Link className="lk" to="/otplogin">
    <button className="btn-id1"> <h4
         style={{
           marginTop:"5px"
         }}
       >
         login with otp
       </h4></button>
       </Link>
       <Link className="lk" to="/signup">
    <button className="btn-id2"> <h4
         style={{
          marginTop:"5px"
        }}
       >
         dont have account Sign Up
       </h4></button>
       </Link>
       
       </div>
        <div className="aaa">
          <div className="email">
            
            <label className="a4" htmlFor="Email">
              Email
            </label>
          <br />
          <input
            className="a1"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleCred}
          />
          <br />
          </div>
            <label className="a5" htmlFor="Password">
              Password
            </label>
          <br />
          <input
            className="a2"
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleCred}
          />
          <br />
          <div className="login-button">
            {((user.phone !== "" && user.email !== "" && user.password !== ""))? (
                <button
                  onClick={handleLogin}
                  className="btn-login"
                >
                  Login
                </button>
              ) : (
                <button
                  disabled
                  className="btn-login"
                >
                  Login
                </button>
              )}
            </div>
         {/* <h4
         style={{
           textAlign: "center",
           marginTop: "0px",
         }}
       >
         dont have account <Link to="/signup">Signup</Link>
       </h4>
         <h4
         style={{
           textAlign: "center",
           marginTop: "0px",
         }}
       >
         login with otp <Link to="/otplogin">Login</Link>
       </h4> */}
          </div>
       
    </div>
    </>
  );
};

export default Auth;
