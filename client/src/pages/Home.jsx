import React from "react";
import Client from "../components/Client";
import Project from "../components/Project";
import { useState } from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import { AuthContext } from "../context/auth";
import { useContext } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  
  return (
    <> 
 <div
 style={{
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
 }}
 className="buttons"
>
  {user&&(

 <AddClientModal open={open} setOpen={setOpen} />
  )}
 <AddProjectModal open={open} setOpen={setOpen} />
</div>
      <Project />
      <Client />
    </>
  );
};

export default Home;
