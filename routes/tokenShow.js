const express = require("express");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");

const tokenShow = express.Router();

tokenShow.get("/1", async (req, res) => {
  try {
    console.log(__dirname);
    console.log(path.dirname(__filename));
    const data = await fs.readFileSync("/token.json");
    res.send(data);
  } catch (error) {
    console.log(__dirname);
    console.log(path.dirname(__filename));
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});

module.exports = tokenShow;
