import React from "react";
import Client from "../components/Client";
import Project from "../components/Project";
import { useState } from "react";
import AddClientModal from "../components/AddClientModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="buttons">
        <AddClientModal open={open} setOpen={setOpen} />
      </div>
      <Project />
      <Client />
    </>
  );
};

export default Home;
