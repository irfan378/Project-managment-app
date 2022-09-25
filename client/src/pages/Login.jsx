import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { LOGIN_USER } from "../mutation/userMutation";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(AuthContext);
  const [loginUser] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      
    context.login(result.data.loginUser)
    navigate("/")
    },
    variables: {  email, password },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email === "" || password === "") {
      return alert("Please fill in all Fields");
    }
    loginUser(email, password);
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="register">
        
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Register;
