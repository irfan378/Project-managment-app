import React from "react";
import Header from "./components/Header";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Client from "./components/Client";

const client=new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache:new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <Client/>
      </ApolloProvider>
    </>
  );
}

export default App;
