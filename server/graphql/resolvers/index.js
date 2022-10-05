const clientResolvers = require("./clients");
const projectResolvers = require("./project");
module.exports = {
  Query: {
    ...clientResolvers.Query,
    ...projectResolvers.Query,
  },
  Project:{
    ...projectResolvers.Project
  },
  ProjectStatus:{
    ...projectResolvers.ProjectStatus
  },
  Mutation:{
    ...clientResolvers.Mutation,
    ...projectResolvers.Mutation
  }
};
