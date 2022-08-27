import React from "react";
import { gql, useQuery } from "@apollo/client";
import ClientRow from './ClientRow'
import './Client.css'

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Something went wrong</p>;
  return <>
  {!loading&&!error&&(
    <table cellSpacing="1" className="table">
        <thead>
            <tr className="tr">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {data.clients.map(client=>(
                <ClientRow key={client.id} client={client}/>
            ))}
        </tbody>
    </table>
  )}
  </>
};

export default Client;
