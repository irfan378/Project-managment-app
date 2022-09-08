import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="mains">
      <h1>404</h1>
      <p>Sorry,this page does not exist</p>
      <Link to="/" className="btns">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
