require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");

const petsController = require("./controllers/pets");

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB " + mongoose.connection.name);
});

server.use(express.json());
// server.use(cors({ origin: "http://localhost:3000/" }));
// Access-Control_Allow_Origin: *
server.use(cors());

server.use("/pets", petsController);

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
