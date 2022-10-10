import { gql } from "@apollo/client";
const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
query($projectId: ID!){
  project(projectId: $projectId) {
    id
    name
    status
    description
    client {
      email
      id
      name
      phone
    }
   
  }
}
`;
export { GET_PROJECTS, GET_PROJECT };
