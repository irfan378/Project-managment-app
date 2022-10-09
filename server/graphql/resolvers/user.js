const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validateInput");
const User = require("../../models/User");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
function generateToken(user) {
  return jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}
module.exports = {
  Mutation: {
    async registerUser(_,{ name, email, password  }) {
      try {
        const { valid, errors } = validateRegisterInput(name, email, password);
        if (!valid) {
          throw Error("Errors", errors);
        }

        const salt = await bcrypt.genSalt(10);
        const secPass =await bcrypt.hash(password, salt);
        const newUser = await new User({
          name: name,
          email: email,
          password: secPass,
          createdAt: new Date().toISOString(),
        });
        const user = await User.findOne({ email });
        if (user) {
          throw Error("Email is already registered");
        }
        const res = await newUser.save();
        const token = generateToken(res);
        return {
          id: res._id,
          token,
          password: res.password,
          name: res.name,
          email: res.email,
          createdAt: res.createdAt,
        };
      } catch (error) {
        throw new Error(error)
      }
    },
    async loginUser(_,{email,password}){
        const { errors, valid } = validateLoginInput(email, password);

        if (!valid) {
          throw new Error('Errors',  errors );
        }
        const user = await User.findOne({ email: email });
        if (!user) {
          throw Error("User not found");
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          throw Error("Email or password doesn't match");
        }
        const token=generateToken(user)
        return {
            email: user.email,
            name: user.name,
            password: null,
            id: user.id,
            token,
          };
    }
  },
};
