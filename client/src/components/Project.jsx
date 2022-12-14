import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import "./ProjectCard.css";
const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error){
console.log(error)
}
  return (
    <>
      {data.projects.length > 0 ? (
        
          <div className="row">
            {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Project;
