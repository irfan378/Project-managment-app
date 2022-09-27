const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");
const app = express();
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();

connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP((req, res, graphQLParams) => {
    return {
      schema,
      graphiql: process.env.NODE_ENV === "development",
      context: ({ req }) => ({req})
    };
  })
);
app.listen(port, console.log(`Server running on port ${port}`));
