const { gql } = require("apollo-server");
module.exports = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
    user:User
  }
  type Query {
    clients: [Client]
    client(clientId: ID!): Client
  }
  type Project {
    id: ID!
    name: String!
    description: String!
    status: String!
    client: Client
    user:User
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
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    token: String!
    createdAt: String!
  }
  input RegisterInput {
    name: String!
    password: String!
    email: String!
  }
  type Mutation {
    addClient(name: String!, email: String!, phone: String!): Client!
    deleteClient(id: ID!): String!
    addProject(
      name: String!
      description: String!
      status: ProjectStatus!
      clientId: ID
      userId:ID!
    ): Project!
    deleteProject(id: ID!): String!
    updateProject(
      id: ID!
      name: String!
      description: String!
      status: ProjectStatus!
    ): Project!
    registerUser(name:String!,email:String!,password:String!):User!
    loginUser(email:String!,password:String!):User!
  }

  type Subscription {
    clientCreated: Client!
  }
`;
