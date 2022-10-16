const Client = require("../../models/Client");
const Project = require("../../models/Project");
const auth = require("../../utils/auth");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();
module.exports = {
  Query: {
    async clients(_, { id }, context) {
      try {
        const user = auth(context);
        if (!user) {
          throw new Error("Please login");
        }
        const clients = await Client.find({ user: user.id });
        return clients;
      } catch (err) {
        throw new Error(err);
      }
    },
    async client(_, { clientId }, context) {
      try {
        const user = auth(context);
        if (!user) {
          throw new Error("Please login");
        }
        const client = await Client.findById(clientId);
        return client;
      } catch (error) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async addClient(_, { name, email, phone }, context) {
      try {
        const user = auth(context);
        if (!user) {
          throw new Error("Please login");
        }
        const newClient = new Client({
          name: name,
          email: email,
          phone: phone,
          user: user.id,
        });
        const client = await newClient.save();
        return client;
      } catch (error) {
        throw new Error(error);
      }
    },

    async deleteClient(_, { id }, context) {
      try {
        const user = auth(context);
        Project.find({ clientId: id }).then((projects) => {
          projects.forEach((project) => {
            project.remove();
          });
        });
        await Client.findByIdAndRemove(id);
        return "Deleted Sucessfully";
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
