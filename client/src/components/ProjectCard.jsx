import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="main">
        <h5>{project.name}</h5>
        <p>{project.status}</p>
        <a href={`/projects/${project.id}`} className="btn">View</a>
      </div>
    </>
  );
};

export default ProjectCard;
