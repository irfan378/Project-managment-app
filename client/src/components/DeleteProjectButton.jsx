import React from "react";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../mutation/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";
import "../pages/Project.css";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";

const DeleteProjectButton = ({ deleteProjectId }) => {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { deleteProjectId: deleteProjectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div>
      <button className="deleteButton" onClick={deleteProject}>
        <FaTrash />
      </button>
    </div>
  );
};

export default DeleteProjectButton;
