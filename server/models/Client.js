const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
});
module.exports = mongoose.model("Client", ClientSchema);
