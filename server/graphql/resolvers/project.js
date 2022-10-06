const Client = require("../../models/Client");
const Project = require("../../models/Project");

module.exports = {
  ProjectStatus: {
    New: "Not Started",
    Progress: "In Progress",
    Completed: "Completed",
  },
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
      try {
        const client = await Client.findById(parent.clientId);
        return client;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async addProject(_, { name, description, status, clientId }) {
      try {
        const newProject = new Project({
          name: name,
          description: description,
          status: status,
          clientId: clientId,
        });

        const project = await newProject.save();

        return project;
      } catch (error) {
        throw new Error(error);
      }
    },
    async deleteProject(_, { id }) {
      try {
        await Project.findByIdAndRemove(id);
        return "Deleted Project Sucessfully";
      } catch (error) {
        throw new Error(error);
      }
    },
    async updateProject(_, { id, name, description, status }) {
      try {
        const newProject = await Project.findByIdAndUpdate(
          id,
          {
            $set: {
              name: name,
              description: description,
              status: status,
            },
          },
          { new: true }
        );
        return newProject;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
