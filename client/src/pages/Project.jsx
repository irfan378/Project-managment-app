import React from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";
import "./Project.css";

const Project = () => {
  const { projectId } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { projectId: projectId },
  });
  if (loading) return <Spinner></Spinner>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && (
        <div className="mainss">
          <div className="project">
            <Link to="/" className="back">
              Back
            </Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h5>Project Status</h5>
            <p>{data.project.status}</p>
            {data.project.client && (
              <>
                <ClientInfo client={data.project.client} />
              </>
            )}
            <DeleteProjectButton deleteProjectId={data.project.id} />
            <EditProjectForm project={data.project} />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
