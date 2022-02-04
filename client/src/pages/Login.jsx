import React from "react";
import Google from "../images/google.png";
import Github from "../images/github.png";
import Facebook from "../images/facebook.png";

const Login = () => {
  const google = () => {
    console.log("hello");
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    console.log("hello");
    window.open("http://localhost:5000/auth/github", "_self");
  };

  return (
    <div className="login">
      <h1 className="LoginTitle">Choose your login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className=" icon" />
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="  icon" />
            Github
          </div>
          {/* <div className="loginButton facebook ">
            <img src={Facebook} alt="" className="  icon" o />
            Facebook
          </div> */}
        </div>
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="submitBtn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
