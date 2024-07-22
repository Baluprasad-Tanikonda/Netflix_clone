import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const mailid = email;
  sessionStorage.setItem("mail", mailid);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.toLowerCase());
  };


  const signinSubmit = () => {
    navigate("./Login");
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      navigate("./Login");
    } else {
      setError("Please enter a valid email address.");
    }
  };
  

  return (
    <div className="headerpage">
      <nav>
        <img src={logo} alt="" className="logo" />
        <div>
          <button className="lang-btn">
            English
            <img src="./header-card/down-icon.png" alt="" />
          </button>
          <button onClick={signinSubmit}>Sign In</button>
        </div>
      </nav>
      <div className="header-content">
        <h1>Unlimited movies, TV shows and More.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch ? Enter your email to create or restart your
          membership.
        </p>
        <form className="email-signup1">
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Get Started
          </button>
        </form>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
};

export default Header;
