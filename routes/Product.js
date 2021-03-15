const express = require("express");
const router = express.Router();

const {
  createProduct,
  viewProduct,
  updateProduct,
  removeProduct,
  viewProductbyId,
} = require("../controller/Product");
const { remove } = require("../models/User");

router.post("/createproduct", createProduct);

router.get("/viewproduct", viewProduct);
router.get("/viewproductbyid/:productId", viewProductbyId);
router.put("/updateproduct", updateProduct);
router.delete("/removeproduct", removeProduct);

module.exports = router;
