import React from "react";
import "./Entrycards.css";
import logo from "../../Assets/logo.png";

const step1 = () => {
  return (
    <div>
      <div className="navbar-step">
        <img src={logo} alt="" />
        <span>Sign In</span>
      </div>

      <div className="steps_bg">
        <div className="card1">
          <p>STEP 1 OF 3</p>
          <h3>
            Welcome Back !<p>Joining Netflix is easy</p>
          </h3>
          <p style={{paddingBottom:"10px" }}>
            Enter your password and you'll be watching in no time.
          </p>

          <label htmlFor="">Email</label>
          <div className="step-email">
            <input type="text" name="" id="" />
          </div>
          <div className="step-password">
            <input type="text" />
            <div className="labelline"> Enter Password</div>
          </div>
          <p className="forgot">
            <link rel="stylesheet" href="" />
            Forgot your Password?
          </p>
          <button>Next</button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default step1;
