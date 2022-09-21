import { useMutation } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { REGISTER_USER } from "../mutation/userMutation";
import { useNavigate } from "react-router-dom";
import "./Register.css"


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [addUser] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: { name, email, password },
   
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return alert("Please fill in all Fields");
    }
    addUser(name,email,password);
    navigate("/")
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="register">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        />
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
        <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
