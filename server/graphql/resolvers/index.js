const clientResolvers = require("./clients");
const projectResolvers = require("./project");
const userResolvers=require("./user")
module.exports = {
  Query: {
    ...clientResolvers.Query,
    ...projectResolvers.Query,
  },
  Project:{
    ...projectResolvers.Project
  },
 Client:{
...clientResolvers.Client
 },
 
  ProjectStatus:{
    ...projectResolvers.ProjectStatus
  },
  Mutation:{
    ...clientResolvers.Mutation,
    ...projectResolvers.Mutation,
    ...userResolvers.Mutation
  },
  Subscription: {
    ...clientResolvers.Subscription
  }
};
