import "./Header.css";
import React from "react";
import logo from "./assets/logo.jpg";
import { AuthContext } from "../context/auth";
import { useContext } from "react";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" width="30px" height="30px" />
      </div>

      <h3>Project Managment</h3>
      {user && <button className="logout" onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Header;
