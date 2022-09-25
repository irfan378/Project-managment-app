const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");

const app = express();
const fetchUser = (req, res, next) => {
  // Get the user from jwt token and add id to req object.
  const token = req.header('token');
  if (!token) {
      res.status(401).send({ error: "Please authenticate using a valid token" })
  }
  try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.user = data.user;
      next();
  } catch (error) {
      res.status(401).send({ error: "Please authenticate using a valid token" })
  }
}
connectDB();
app.use(cors());
app.use(fetchUser)
app.use(
  "/graphql",
  graphqlHTTP((req, res, graphQLParams) => {
    return {
      schema,
      graphiql: process.env.NODE_ENV === "development",
        
    };
  })
  // graphqlHTTP({
  //   schema,
  //   graphiql: process.env.NODE_ENV === "development",
  //   context: ({ req }) => ({ req }),
  // })
);
app.listen(port, console.log(`Server running on port ${port}`));
