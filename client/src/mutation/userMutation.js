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
const LOGIN_USER=gql`mutation LoginUser( $email: String! $password: String!) {
  loginUser(
     email: $email password: $password 
  ) {
    id
    name
    email
    token
  }
}
`;
export { REGISTER_USER,LOGIN_USER };
