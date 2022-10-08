const Client = require("../../models/Client");
const Project = require("../../models/Project");
const auth = require("../../utils/auth");

module.exports = {
  Query: {
    async clients() {
      try {
        const clients = await Client.find();
        return clients;
      } catch (err) {
        throw new Error(err);
      }
    },
    async client(_, { clientId }) {
      try {
        const client = await Client.findById(clientId);
        return client;
      } catch (error) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async addClient(_, { name, email, phone },context) {
      try {
        const user=auth(context)
        const client = new Client({
          name: name,
          email: email,
          phone: phone,
        });
        return client.save();
      } catch (error) {
        throw new Error(error);
      }
    },
   async deleteClient(_, { id },context) {
      try {
        const user=auth(context);
        Project.find({ clientId: id }).then((projects) => {
          projects.forEach((project) => {
            project.remove();
          });
        });
      await  Client.findByIdAndRemove(id);
        return "Deleted Sucessfully";
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
