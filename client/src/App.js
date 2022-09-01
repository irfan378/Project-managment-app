import React from "react";
import Header from "./components/Header";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Client from "./components/Client";
import Project from "./components/Project";
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Client />
        <Project/>
      </ApolloProvider>
    </>
  );
}

export default App;
