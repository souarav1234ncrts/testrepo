const express = require("express");
const router = express.Router();

const {
  createProduct,
  viewProduct,
  updateProduct,
  removeProduct,
  viewProductbyId,
} = require("../controller/Product");
const { uploadImage } = require("../controller/image");
const { remove } = require("../models/User");
const upload = require("../middleware/upload");

router.post("/createproduct", createProduct);
router.post("/uploadphoto", upload.single("photo"), uploadImage);

router.get("/viewproduct", viewProduct);
router.get("/viewproductbyid/:productId", viewProductbyId);
router.put("/updateproduct", updateProduct);
router.delete("/removeproduct", removeProduct);

module.exports = router;
