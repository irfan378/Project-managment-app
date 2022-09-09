import React from "react";
import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";
const ClientInfo = ({ client }) => {
  return (
    <>
      <h5>Client Information</h5>
      <ul>
        <li>
          <FaIdBadge />
          {client.name}
        </li>
        <li>
          <FaEnvelope />
          {client.email}
        </li>
        <li>
          <FaPhone />
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
