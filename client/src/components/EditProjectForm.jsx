import React from "react";
import { useState } from "react"
import "../pages/Project.css"

const EditProjectForm = ({ projectId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  return (
    <>
      <h3>Update Project Details</h3>
      <form>
        <div className="modal-content">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <select
            name="Status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select"
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button id="myBtn2" type="submit" className="btns">
          Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProjectForm;
