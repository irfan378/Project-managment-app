const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
//const port = process.env.PORT || 5000;
//const connectDB = require("./config/db");
const colors = require("colors");
//const cors = require("cors");
const Client = require("./models/Client");
//const app = express();
const gql = require("graphql-tag");
const { PubSub } = require("graphql-subscriptions");
const { ApolloServer } = require("apollo-server");
const { mongoose } = require("mongoose");
const pubsub = new PubSub();

// app.use(cors());
// app.use(
//   "/graphql",
//   graphqlHTTP((req, res, graphQLParams) => {
//     return {
//       schema,
//       graphiql: process.env.NODE_ENV === "development",
//       context: ({ req }) => ({req})
//     };
//   })
// );

const typeDefs = gql`
  type Clients {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }
  type Query {
    clients: [Clients]
  }
`;
const resolvers = {
  Query: {
    async clients() {
      try {
        const clients = await Client.find();
        return clients;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => ({ req }),
});
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running on port ${res.url}`);
  });
