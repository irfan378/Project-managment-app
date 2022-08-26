import "./Header.css"
import React from "react";
import logo from "./assets/logo.jpg"
const Header = () => {
  return(
  <nav className="navbar">
<div className="nav">
    <img src={logo} alt="" width="30px" height="30px" />
</div>
    <div className="nav">Project Managment </div>
  </nav>
  )
};

export default Header;
