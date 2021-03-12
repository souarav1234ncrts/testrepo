const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();
mongoose
  .connect(
    process.env.DB_URI,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to mongodb");
  });

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

//routes

const authroutes = require("./routes/Auth");

//middlewarrs

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api", authroutes);

app.listen(port, () => {
  console.log(`Server running on Port - ${port}`);
});
