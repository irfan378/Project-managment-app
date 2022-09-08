import React from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";

const Project = () => {
  const { id } = useParams();

  return <div>Project</div>;
};

export default Project;
