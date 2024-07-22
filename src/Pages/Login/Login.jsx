/** @format */

import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import netflix_spinner from "../../Assets/netflix_spinner.gif";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(sessionStorage.getItem("mail"));
  }, []);

  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (signState === "Sign Up" && !name) {
      formErrors.name = "Name is required.";
    }

    if (!validateEmail(email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    if (!validatePassword(password)) {
      formErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      if (signState === "Sign In") {
        try {
          const response = await axios.get(
            `https://66501e23ec9b4a4a6030c817.mockapi.io/Crud?email=${email}&password=${password}`
          );
          if (response.data.length > 0) {
            navigate("/Home");
          } else {
            setErrors({ general: "Invalid email or password." });
          }
        } catch (error) {
          console.error("Error during sign in:", error);
          setLoading(false);
          setErrors({ general: "Invalid email or password." });
        }
      } else if (signState === "Sign Up") {
        try {
          const response = await axios.post(
            "https://66501e23ec9b4a4a6030c817.mockapi.io/Crud",
            { name, email, password }
          );
          setLoading(false);
          setResponse({ name, email, password });
          setSignState("Sign In");
        } catch (error) {
          console.error("Error during sign up:", error);
          setLoading(false);
          setErrors({ general: "An error occurred. Please try again later." });
        }
      }
    }
  };

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} alt="Logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" && (
            <>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="error-messagelogin">{errors.name}</p>
              )}
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-messagelogin">{errors.email}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="error-messagelogin">{errors.password}</p>
          )}
          {errors.general && (
            <p className="error-messagelogin">{errors.general}</p>
          )}
          <button type="submit">{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="form-switch-link"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="form-switch-link"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
