const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
    file: {
      type: String,
    },
    date:{
      type: Number
    },
  },
  { timestamps: true }
);
const MessageModel = mongoose.model("message", MessageSchema);
module.exports = MessageModel;
