var mongoose = require("mongoose");

var PersonSchema = new mongoose.Schema({
  first: {
    type: String,
    index: true
  },
  last: {
    type: String,
    index: true
  },
});

mongoose.model('Person', PersonSchema)