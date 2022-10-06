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
    client(clientId: ID!): Client
  }
  type Project {
    id: ID!
    name: String!
    description: String!
    status: String
    client: Client
  }
  type Query {
    projects: [Project]
    project(projectId: ID!): Project
  }
  enum ProjectStatus {
    New
    Progress
    Completed
  }
  type Mutation {
    addClient(name: String!, email: String!, phone: String!): Client!
    deleteClient(id: ID!): String!
    addProject(
      name: String!
      description: String!
      status: ProjectStatus!
      clientId: ID!
    ): Project!
    deleteProject(id: ID!): String!
    updateProject(
      id: ID!
      name: String!
      description: String!
      status: ProjectStatus!
    ): Project!
  }
`;
