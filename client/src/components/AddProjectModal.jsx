import React from "react";
import { useState } from "react";
import "./AddProjectModel.css";
import { GET_PROJECTS } from "../queries/projectQueries";
import { ADD_PROJECT } from "../mutation/projectMutation";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { AuthContext } from "../context/auth";
import { useContext } from "react";


const AddProjectModal = ({ open, setOpen }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");
  const { loading, data, error } = useQuery(GET_CLIENTS);
  const {user}=useContext(AuthContext)
 

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({
        query: GET_PROJECTS,
      });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
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
    addProject(name, description, status, clientId);
    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");
    setOpen(false);
  };
  if (loading) return null;
  if (error) return "Something went wrongu";
  return (
    <>
      {!loading && !error && (
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
                  <select
                    name="Client"
                    id="status"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select Client</option>
                    {data.clients.map((client) => (
                      <option value={client.id} key={client.id}>
                        {client.name}
                      </option>
                    ))}
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
      )}
    </>
  );
};

export default AddProjectModal;
