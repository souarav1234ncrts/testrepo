var mongoose = require("mongoose");

//user model

var productSchema = new mongoose.Schema({
  productName: String,
  productId: String,
  productPrice: Number,
  productQuantity: Number,
});

module.exports = mongoose.model("Product", productSchema);
