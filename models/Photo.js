var mongoose = require("mongoose");

//user model

var imageSchema = new mongoose.Schema({
  url: {
    type: String,
  },
});

module.exports = mongoose.model("Image", imageSchema);
