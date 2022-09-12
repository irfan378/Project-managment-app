import React from "react";
import { useState } from "react";
import "./AddProjectModel.css";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CLIENT } from "../mutation/clientMutation";
const AddProjectModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, description, status },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: GET_PROJECTS,
      });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });
  const openModel = () => {
    setOpen(true);
  };
  const closeModel = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert("Please fill in all Fields");
    }
    addClient(name, description, status);
    setName("");
    setDescription("");
    setStatus("");
    setOpen(false);
  };
  return (
    <div className="modal">
      {open ? (
        <div id="myModal">
          <span onClick={closeModel} className="close">
            &times;
          </span>
          <form onSubmit={handleSubmit}>
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
              <button id="myBtn2" type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={openModel} id="myBtn">
          Add Project
        </button>
      )}
    </div>
  );
};

export default AddProjectModal;
