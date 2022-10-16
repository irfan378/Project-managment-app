import { gql } from "@apollo/client";
const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      user
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
const DELETE_PROJECT = gql`
  mutation($deleteProjectId: ID!) {
    deleteProject(id: $deleteProjectId)
  }
`;
const UPDATE_PROJECT = gql`
mutation($updateProjectId: ID!, $name: String!, $description: String!, $status: ProjectStatus!){
  updateProject(id: $updateProjectId, name: $name, description: $description, status: $status) {
    id
    name
    description
    status 
  }
}
`;
export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
