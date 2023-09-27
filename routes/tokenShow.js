const express = require("express");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");

const tokenShow = express.Router();

tokenShow.get("/", async (req, res) => {
  try {
    const data = fs.readFileSync("token.json");
    res.json({ data: JSON.parse(data) });
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});

module.exports = tokenShow;
