const express = require("express");
const router = express.Router();

const { getAmountOfRainFall } = require("../controllers/controller");
const { getForecast } = require("../controllers/controller");

router.get("/", async (req, res) => {
  try {
    const info = "no DATA API at this moment";
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});

router.get("/rainfall/:id", async (req, res) => {
  try {
    const data = await getAmountOfRainFall(+req.params.id);
    res.json({ data });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
});

router.get("/currentweather/", async (req, res) => {
  try {
    const data2 = await getForecast();
    res.json({ data2 });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
});

module.exports = router;
