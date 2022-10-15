import React from "react";
import { useState } from "react";
import "./AddClientModel.css";
import { ADD_CLIENT } from "../mutation/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";
import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
const AddClientModal = () => {
  const {user}=useContext(AuthContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
      console.log(clients)
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
    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all Fields");
    }
    addClient(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
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
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button id="myBtn2" type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button onClick={openModel} id="myBtn">
          Add Client
        </button>
      )}
    </div>
  );
};

export default AddClientModal;
