const express = require("express");
const cors = require("cors");
require("dotenv").config();
require('./Db/connection')
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Quick Bucks server is running");
});

app.listen(port, () => {
  console.log(`Quick Bucks running on port ${port}`);
});
