import React from "react";
import Client from "../components/Client";
import Project from "../components/Project";
import { useState } from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
  const [open, setOpen] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="buttons"
          >
            <AddClientModal open={open} setOpen={setOpen} />
            <AddProjectModal open={open} setOpen={setOpen} />
          </div>
          <Project />
          <Client />
        </>
      ) : (
        <div className="auth">
          <h1>For freelancers</h1>
          <h2>Manage your projects in cloud</h2>
          <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
