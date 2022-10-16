const Client = require("../../models/Client");
const Project = require("../../models/Project");
const auth = require("../../utils/auth");

module.exports = {
  ProjectStatus: {
    New: "Not Started",
    Progress: "In Progress",
    Completed: "Completed",
  },
  Query: {
    async projects(_, {id},context) {

      try {
       const user=auth(context)
       if(!user){
        throw new Error("Please Login")
       }
        const projects = await Project.find({user:user.id});
        return projects;
      } catch (error) {
        throw new Error(error);
      }
    },
    async project(_, { projectId },context) {
      try {
        const user=auth(context)
        if(!user){
          throw new Error("Please login")
        }
       
        const project = await Project.findById(projectId);
        if(project.user!==user.id){
          throw new Error("You cannot view other person's project")
        }
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
    async addProject(
      _,
      { name, description, status, clientId },
      context
    ) {
      const user = auth(context);
      if (!user) {
        throw Error(error);
      }
      try {
        const newProject = new Project({
          name: name,
          description: description,
          status: status,
          clientId: clientId,
          user:user.id
        });

        const project = await newProject.save();

        return project;
      } catch (error) {
        throw new Error(error);
      }
    },
    async deleteProject(_, { id }, context) {
      try {
        const user = auth(context);
        if (!user) {
          throw Error(error);
        }
        await Project.findByIdAndRemove(id);
        return "Deleted Project Sucessfully";
      } catch (error) {
        throw new Error(error);
      }
    },
    async updateProject(_, { id, name, description, status }, context) {
      try {
        const user = auth(context);
        if (!user) {
          throw Error(error);
        }
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
