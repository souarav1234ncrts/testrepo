const express = require("express");
const router = express.Router();

const { signUp, login } = require("../controller/Auth");

router.post("/signup", signUp);
router.post("/signin", login);

module.exports = router;
