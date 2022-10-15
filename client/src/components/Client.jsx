import React from "react";
import ClientRow from './ClientRow'
import './Client.css'
import { GET_CLIENTS } from "../queries/clientQueries";
import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner/>;

  return <>
  {!loading&&(
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
