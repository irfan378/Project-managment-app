const Client = require("../../models/Client");
const Project = require("../../models/Project");
const auth = require("../../utils/auth");
const User = require("../../models/User");
const { PubSub } = require("graphql-subscriptions");
const pubsub = new PubSub();
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
    async addClient(_, { name, email, phone }, context) {
     
      try {
        const user =  auth(context);
        if (!user) {
          throw new Error("Please login");
        }
        console.log(user)
        const newClient = new Client({
          name: name,
          email: email,
          phone: phone,
          user:user
        });
        console.log(newClient)

        const client = await newClient.save();
       
        return await {
          id: client.id,
          ...client._doc,
        };
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
  Subscription: {
    clientCreated: {
      subscribe: () => pubsub.asyncIterator["NEW_CLIENT"],
    },
  },
};
