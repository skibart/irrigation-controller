//forecast
const { fetchApiForecast } = require("./fetchApiForecast");
const { addDataForecast } = require("../controllers/controller");

//history
const { fetchApiWeatherHistory } = require("./fetchApiWeatherHistory");
const { addDataWeatherHistory } = require("../controllers/controller");

//curent
const { addDataCurrentWeather } = require("../controllers/controller");
const { fetchApiCurrentWeather } = require("./fetchApiCurrentWeather");

async function insterForecastToDb() {
  const data = await fetchApiForecast();
  await addDataForecast(data);
}

async function insterWeatherHistoryToDb() {
  const data = await fetchApiWeatherHistory();
  await addDataWeatherHistory(data);
}

async function insterCurrentWeatherToDb() {
  const data = await fetchApiCurrentWeather();
  await addDataCurrentWeather(data);
}

module.exports = {
  insterForecastToDb,
  insterWeatherHistoryToDb,
  insterCurrentWeatherToDb,
};
