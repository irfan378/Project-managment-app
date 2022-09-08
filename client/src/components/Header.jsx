import "./Header.css";
import React from "react";
import logo from "./assets/logo.jpg";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" width="30px" height="30px" />
      </div>

      <h1>Project Managment</h1>
    </nav>
  );
};

export default Header;
