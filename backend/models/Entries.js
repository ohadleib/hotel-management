const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let entriesSchema = new Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Room",
    },
    time: {
      type: String,
    },
  },
  {
    collection: "entries",
  }
);

module.exports = mongoose.model("Entries", entriesSchema);
