const cron = require("node-cron");
const config = require("../config");

const { insterForecastToDb } = require("../utils/insterFetchToDb");
const { insterWeatherHistoryToDb } = require("../utils/insterFetchToDb");
const { insterCurrentWeatherToDb } = require("../utils/insterFetchToDb");

function cronJobs() {
  const hour = config.cronFetchApiWeather.hour;
  const minute = config.cronFetchApiWeather.minute;

  cron.schedule(`05 15 * * *`, insterForecastToDb);
  cron.schedule(`06 15 * * *`, insterWeatherHistoryToDb);
  cron.schedule(`07 15 * * *`, insterCurrentWeatherToDb);
  cron.schedule(`05 13 * * *`, insterCurrentWeatherToDb);
  cron.schedule(`06 13 * * *`, insterCurrentWeatherToDb);
  cron.schedule(`07 13 * * *`, insterCurrentWeatherToDb);
}

module.exports = {
  cronJobs,
};
