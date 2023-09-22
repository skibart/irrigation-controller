const { getAmountOfRainFall } = require("../controllers/controller");
const { getForecast } = require("../controllers/controller");
const { getCurrentWeather } = require("../controllers/controller");

const { rainTime } = require("./rainTime");

// humidity

async function collectAllData() {
  let weatherObj = {
    stillWet: null,
    HoursSinceLastRain: null,
    wetTime: null,
    totalRainFallinLast2days: null,
    ForecastTodayRain: null,
    ForecastChainceOfRain: null,
    NowRaining: null,
  };
  let rainTimeObj = await rainTime();

  const rainAmount = await getAmountOfRainFall(2);
  const todayForecastObj = await getForecast();
  const currentWeaherObj = await getCurrentWeather();

  weatherObj.stillWet = rainTimeObj.stillWet;
  weatherObj.HoursSinceLastRain = rainTimeObj.HoursSinceLastRain;
  weatherObj.wetTime = Math.floor(rainTimeObj.wetTimeSecond / 60 / 60);
  weatherObj.totalRainFallinLast2days = rainAmount.totalprecip_mm;
  weatherObj.ForecastTodayRain = todayForecastObj.totalprecip_mm;
  weatherObj.ForecastChainceOfRain = todayForecastObj.daily_chance_of_rain;
  weatherObj.NowRaining = currentWeaherObj.precip_mm;

  return weatherObj;
}

module.exports = {
  collectAllData,
};
