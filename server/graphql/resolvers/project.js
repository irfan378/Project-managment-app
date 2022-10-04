const Client = require("../../models/Client");
const Project = require("../../models/Project");

module.exports = {
  Query: {
    async projects() {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error(err);
      }
    },
    async project(_, { projectId }) {
      try {
        const project = await Project.findById(projectId);
        return project;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Project: {
    async client(parent) {
      const client =await Client.findById(parent.clientId);
      return client;
    },
  },
};
