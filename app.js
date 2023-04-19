const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
require("./DB/Connection");
const user = require("./DB/Models/dbmodels");
const cors = require("cors");
const api = require("./API/routes");

const port = 4242;
app.use(cors());
app.use(express.json())

app.use(api)

app.listen(port, () => {
  console.log("server is running on port ", port);
});
