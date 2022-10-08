require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const { mongoose } = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    return server.listen({ port: 5001 });
  })
  .then((res) => {
    console.log(`Server running on port ${res.url}`);
  });
