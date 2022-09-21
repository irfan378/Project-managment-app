import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation RegisterUser($name: String! $email: String! $password: String!) {
    registerUser(
       name: $name email: $email password: $password 
    ) {
      id
      name
      email
      token
      createdAt
    }
  }
`;
export { REGISTER_USER };
