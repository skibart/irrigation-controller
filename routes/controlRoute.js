const express = require("express");
const { onDevice } = require("../ewelinkAuto20/onDevice");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    onDevice("10015a1c76");
  } catch (error) {
    res.status(500).send("Error");
  }
});

module.exports = router;
