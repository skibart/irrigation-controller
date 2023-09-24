const express = require("express");
const router = express.Router();

const { getAmountOfRainFall } = require("../controllers/controller");
const { getForecast } = require("../controllers/controller");
const { getCurrentWeather } = require("../controllers/controller");

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

router.get("/", async (req, res) => {
  try {
    const forecast = await getForecast();
    const rainAmount2Days = await getAmountOfRainFall(2);
    const currentWeather = await getCurrentWeather();
    res.json({ currentWeather, forecast, rainAmount2Days });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
});

module.exports = router;
