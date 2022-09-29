import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/auth";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
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

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const authLink = setContext(() => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: token ? token : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
