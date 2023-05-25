const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());
const PORT = 5000;
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/server/user", userRoute);

app.listen(PORT || 5000, () => {
  console.log("server running");
});
