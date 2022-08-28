import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Client.css"

const ClientRow = ({ client }) => {
  return (
    <tr className="tr">
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="button">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
