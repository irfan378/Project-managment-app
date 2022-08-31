import "./Header.css";
import React from "react";
import logo from "./assets/logo.jpg";
import AddClientModal from "./AddClientModal";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav">
        <img src={logo} alt="" width="30px" height="30px" />
      </div>
      <div className="nav">Project Managment</div>
      <div className="btn">
          <AddClientModal open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Header;
