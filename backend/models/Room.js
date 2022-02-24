const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roomSchema = new Schema({
  name: {
    type: String
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  noOfGuests: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
    collection: 'rooms'
  })

module.exports = mongoose.model('Room', roomSchema)