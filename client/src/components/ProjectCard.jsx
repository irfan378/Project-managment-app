import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="main">
        <h5>{project.name}</h5>
       <p>Status:<strong>{project.status}</strong> </p>
        <Link to={`/projects/${project.id}`} className="btn">View</Link>
      </div>
    </>
  );
};

export default ProjectCard;
