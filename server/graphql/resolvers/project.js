const Client = require("../../models/Client");
const Project = require("../../models/Project");
module.exports = {
  Query: {
    async projects() {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error(err)
      }
    },
  },
};
