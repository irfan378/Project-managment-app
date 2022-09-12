import React from "react";
import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";
import "./ClientInfo.css"
const ClientInfo = ({ client }) => {
  return (
    <>
      <h5>Client Information</h5>
      <ul>
        <li>
          <FaIdBadge className="icon" />
          {client.name}
        </li>
        <li>
          <FaEnvelope className="icon" />
          {client.email}
        </li>
        <li>
          <FaPhone className="icon" />
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
