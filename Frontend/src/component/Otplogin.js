import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { setotp, signup } from "../actions/auth.js";
import { initializeApp } from 'firebase/app'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { login } from "../api";
const Otplogin = () => {
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
      dispatch(setotp((user),navigate));
      // setIsLogin(true);
      navigate("/");
    });
  };
  return (
    <div className="contain">
      <div className="contain1">
        <h2>
          <b>Join the Stack overflow community</b>
        </h2>
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
            <b>
              <label className=" b3   " htmlFor="Phone">
                phone no.
              </label>
            </b>
            <input
              className="  b4  "
              type="number"
              placeholder="Phone no."
              name="phone"
              onChange={handleCred}
            />
            <br />
            <div id="sign-in-button"></div>
            <div className="login-button">
            {((user.phone !== "") )? (
                <button
                  onClick={handleLogin}
                  style={{
                    marginTop: "1.5rem",
                    height: "2.3rem",
                    background: "#0a95ff",
                    boxShadow: "inset 0 1px 0 0 hsl(0deg 0% 100% / 40%)",
                    color: "white",
                    fontSize: "0.813rem",
                    textTransform: "capitalize",
                    cursor:"pointer"
                  }}
                >
                  get otp
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
                  get otp
                </button>
              )}
            </div>
            <h4
        style={{
          textAlign: "center",
          marginTop: "0px",
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

export default Otplogin;
