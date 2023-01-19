import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth.js";
import { initializeApp } from 'firebase/app'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [displayotp, setDisplayOTP] = useState(false);
  // const [isLogin, setIsLogin] = useContext(UserContext)
  const [OTP, setOTP] = useState("");
  const [checked, setchecked] = useState(false);
  var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING}`,
    appId: `${process.env.REACT_APP_APPID}`
};
// console.log(firebaseConfig);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone:""
  });
  const handleCred = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const configureRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // handleLogin();
          console.log("Captcha Verified ");
        },
        defaultCountry: "IN",
      },
      auth
    );
  };

  // const handlesubmit = (e)=>
  // {
  //   e.preventDefault()
  //   dispatch(signup({name,email,password},navigate));
  // }
  const handleLogin = () => {
    const phoneNumber = "+91" + user?.phone;
    console.log(phoneNumber);
    configureRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        setDisplayOTP(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validateOTP = () => {
    if (OTP.length != 6) return;
    window.confirmationResult.confirm(OTP).then((result) => {
      // User signed in successfully.
      const userResult = result.user;
      // console.log(JSON.stringify(userResult))
      alert("User is verified");
      dispatch(signup((user),navigate));
      // setIsLogin(true);
      navigate("/");
    });
  };
  return (
    <div className="contain">
      <div className="contain1">
        <p className="sp">
          Join the Stack overflow community
        </p>
        <p>
          Get unstuck - ask a question <br />
          Unlock new priveliges like voting and commenting <br />
          save your favorite tags,filter and jobs <br />
          Earn reputation and badges <br />
        </p>
      </div>
      {!displayotp ? 
        <>
          <div className="contain2">
            <div className="name1">
              <label className="  b1  " htmlFor="Display name">
                Display name
              </label>
            <input
              className=" b2   "
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={handleCred}
              br
              />
              </div>
              <div className="email1">
              <label className=" b3   " htmlFor="Email">
                Email
              </label>
            <input
              className="  b4  "
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleCred}
            />
            </div>
            {/* <br /> */}
            <div className="email1">

              <label className=" b3   " htmlFor="Phone">
                phone no.
              </label>
            <input
              className="  b4  "
              type="number"
              placeholder="Phone no."
              name="phone"
              onChange={handleCred}
              />
              </div>
            {/* <br /> */}
            <div className="email1">

              <label className=" b5   " htmlFor="Password">
                Password
              </label>
            <input
              className="   b6 "
              type="text"
              placeholder="Password"
              name="password"
              onChange={handleCred}
              />
              </div>
            {/* <br /> */}
            <p className="b7">
              Password must contain atleast eight characters including one
              lettter and number
            </p>
            <div className="tc">
              <input
                type="checkbox"
                name="tc"
                onChange={() => setchecked(!checked)}
                checked={checked}
              />
              <p className="b7">
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digest.
              </p>
            </div>
            <div id="sign-in-button"></div>
            <div className="login-button">
            {((user.name !== "" && user.email !== "" && user.password !== "") && checked)? (
                <button
                  onClick={handleLogin}
                  style={{
                    marginTop: "1.5rem",
                    height: "2.3rem",
                    background: "#435c6c",
                    boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
                    color: "white",
                    fontSize: "0.813rem",
                    textTransform: "capitalize",
                    cursor:"pointer"
                  }}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  disabled
                  style={{
                    marginTop: "1.5rem",
                    height: "2.3rem",
                    background: "#868686",
                    boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
                    color: "white",
                    fontSize: "0.813rem",
                    textTransform: "capitalize",
                  }}
                >
                  Sign Up
                </button>
              )}
            </div>
            <h4
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize:"15px",
          fontWeight:500
        }}
      >
        Already have an account? <Link to="/Auth">Login</Link>
      </h4>
          </div>
        </>
       : 
        <div>
          <p>Enter OTP send to {user?.phoneNo}</p>
          <input
            type="password"
            onChange={(e) => setOTP(e.target.value)}
            name="name"
          />
          <div className="login-button">
            <button
              onClick={validateOTP}
              style={{
                marginTop: "1.5rem",
                height: "2.3rem",
                background: "#0a95ff",
                boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
                color: "white",
                fontSize: "0.813rem",
                textTransform: "capitalize",
              }}
            >
              Submit OTP
            </button>
          </div>
      
        </div>
      }
    </div>
  );
};

export default Signup;
