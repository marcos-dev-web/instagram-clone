const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Table = new Schema({
  messages: {
    type: String,
  }
})


const Messages = mongoose.model("messages", Table);

module.exports = Messages;
