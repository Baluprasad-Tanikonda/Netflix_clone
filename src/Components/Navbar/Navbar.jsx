/** @format */

import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import search_icon from "../../Assets/search_icon.svg";
import bell_icon from "../../Assets/bell_icon.svg";
import profile_img from "../../Assets/profile_img.png";
import caret_icon from "../../Assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li onClick={() => handleNavigation("/home")}>Home</li>
          <li onClick={() => handleNavigation("/tv-shows")}>TV Shows</li>
          <li onClick={() => handleNavigation("/movies")}>Movies</li>
          <li onClick={() => handleNavigation("/new-popular")}>
            New & popular
          </li>
          <li onClick={() => handleNavigation("/my-list")}>My List</li>
          <li onClick={() => handleNavigation("/browse")}>
            Browse By Language
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={caret_icon} alt="" />
          <div className="dropdown">
            <p onClick={() => handleNavigation("/sign-out")}>
              Sign Out Of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
