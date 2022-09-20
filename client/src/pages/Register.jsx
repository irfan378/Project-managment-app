import { useMutation } from '@apollo/client';
import React from 'react'
import { useState } from 'react';
import { REGISTER_USER } from '../mutation/userMutation';
import { useNavigate } from "react-router-dom";
import { GET_PROJECTS } from '../queries/projectQueries';

const Register = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [registerUser]=useMutation(REGISTER_USER,{
        variables:{name,email,password},
        
        onCompleted: () => navigate("/"),
 
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" ||password === "") {
          return alert("Please fill in all Fields");
        }
        registerUser(name, email,password);
      };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)} width={50}/>
        <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} width={50}/>
        <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} width={50}/>
    <button type="submit">Register</button>
      </form>
    </>
  )
}

export default Register
