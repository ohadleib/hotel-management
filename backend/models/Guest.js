const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let guestSchema = new Schema({
  name: {
    type: String,
  required: true,

  },
 room:{
  type: String,
  required: true,
 }
}, {
    collection: 'guests'
  })

module.exports = mongoose.model('Guest', guestSchema)
