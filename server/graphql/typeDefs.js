const { gql } = require("apollo-server");
module.exports = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }
  type Query {
    clients: [Client]
    client(clientId:ID!):Client
  }
 type Project{
    id:ID!
    name:String!
    description:String!
    status:String!
    client:Client!
 }
 type Query{
    projects:[Project]
 }
`;

