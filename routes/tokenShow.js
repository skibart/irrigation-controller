const express = require("express");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");

const tokenShow = express.Router();

tokenShow.get("/1", async (req, res) => {
  try {
    const data = await fs.readFileSync("/token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/2", async (req, res) => {
  try {
    const data = await fs.readFileSync("token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/3", async (req, res) => {
  try {
    const data = await fs.readFileSync("current/token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/4", async (req, res) => {
  try {
    const data = await fs.readFileSync("/current/token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/5", async (req, res) => {
  try {
    const data = await fs.readFileSync("/app/current/token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/6", async (req, res) => {
  try {
    const data = await fs.readFileSync("app/current/token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/7", async (req, res) => {
  try {
    const data = await fs.readFileSync("../token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});
tokenShow.get("/8", async (req, res) => {
  try {
    const data = await fs.readFileSync("../../token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});

module.exports = tokenShow;
