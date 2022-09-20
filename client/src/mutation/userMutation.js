const { gql } = require("apollo-server");

const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(
      registerUser: { name: $name, email: $email, password: $password }
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
