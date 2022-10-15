require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const { mongoose } = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { execute, subscribe } = require("graphql");
const { createServer } = require("http");
const express = require("express");
const { PubSub } = require("graphql-subscriptions");

(async function () {
  const pubsub=new PubSub()
  const app = express();
  const httpServer = createServer(app);
  const subscriptionServer = SubscriptionServer.create(
    {
      typeDefs,
      resolvers,
      execute,
      subscribe,
    },
    { server: httpServer, path: '/' }
  );
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req,pubsub }),
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  const PORT = 5000;
  httpServer.listen(PORT, () =>
    console.log("http server is now running on", PORT)
  );
})();
