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
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  if (loading) return <Spinner></Spinner>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
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
            <DeleteProjectButton projectId={data.project.id} />
            <EditProjectForm projectId={data.project.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
