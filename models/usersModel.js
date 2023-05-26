const  mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    typeUser: {
      type: String,
      // default: false,
    },
    avatar: String,
  },
  { timestamps: true }
);
const userModel = mongoose.model('users', UserSchema)
module.exports = userModel