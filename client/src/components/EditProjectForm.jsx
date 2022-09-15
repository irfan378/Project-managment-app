import React from "react";
import { useState } from "react";
import "./EditProject.css";
import { UPDATE_PROJECT } from "../mutation/projectMutation";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";

const EditProjectForm = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !status) {
      return alert("Please fill out all the fields");
    }
    updateProject(name, description, status);
  };
  return (
    <>
      <h3>Update Project Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="edit">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            id="input"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="textarea"
          ></textarea>
          <select
            name="Status"
            id="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select"
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button type="submit" className="updateBtn">
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProjectForm;
