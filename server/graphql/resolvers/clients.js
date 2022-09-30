const Client = require("../../models/Client");
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
      async client(_,{clientId}){
        try {
            const client=await Client.findById(clientId)
            return client;
        } catch (error) {
            throw new Error(err);
        }
      }
    },
   
  };