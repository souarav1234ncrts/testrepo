const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    productId: req.body.productId,
    productPrice: req.body.productPrice,
    productQuantity: req.body.productQuantity,
  });
  const result = await product.save();
  if (result) {
    return res.send(result);
  } else {
    return res.status(422).send("unable to create product");
  }
};

exports.viewProduct = async (req, res) => {
  const prod = await Product.find();
  if (prod) {
    return res.send(prod);
  } else {
    return res.status(422).send("product not found");
  }
};

exports.viewProductbyId = async (req, res) => {
  const prod = await Product.findOne({ productId: req.params.productId });
  if (prod) {
    return res.send(prod);
  } else {
    return res.status(422).send("product not found");
  }
};

exports.updateProduct = async (req, res) => {
  const prod = await Product.findOneAndUpdate(
    { productId: req.body.productId },
    req.body,
    { new: true }
  );
  if (prod) {
    return res.send(prod);
  } else {
    return res.status(422).send("unable to update");
  }
};

exports.removeProduct = async (req, res) => {
  const prod = await Product.findOneAndRemove({
    productId: req.body.productId,
  });
  if (prod) {
    return res.send(prod);
  } else {
    return res.status(422).send("unable to delete");
  }
};
