const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const info = "no UI at this moment";
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
