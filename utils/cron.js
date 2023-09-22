const cron = require("node-cron");
const config = require("../config");

const { insterForecastToDb } = require("../utils/insterFetchToDb");
const { insterWeatherHistoryToDb } = require("../utils/insterFetchToDb");
const { insterCurrentWeatherToDb } = require("../utils/insterFetchToDb");

function cronJobs() {
  const hour = config.cronFetchApiWeather.hour;
  const minute = config.cronFetchApiWeather.minute;

  cron.schedule(`${minute} ${hour} * * *`, insterForecastToDb);
  cron.schedule(`${minute} ${hour} * * *`, insterWeatherHistoryToDb);
  cron.schedule(`${minute} ${hour} * * *`, insterCurrentWeatherToDb);
}

module.exports = {
  cronJobs,
};
