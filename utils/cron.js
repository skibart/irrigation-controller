const cron = require("node-cron");
const config = require("../config");

const { insterForecastToDb } = require("../utils/insterFetchToDb");
const { insterWeatherHistoryToDb } = require("../utils/insterFetchToDb");
const { insterCurrentWeatherToDb } = require("../utils/insterFetchToDb");

function cronJobs() {
  const hour = config.cronFetchApiWeather.hour;
  const minute = config.cronFetchApiWeather.minute;

  cron.schedule(`14 59 * * *`, insterForecastToDb);
  cron.schedule(`15 01 * * *`, insterWeatherHistoryToDb);
  cron.schedule(`12 59 * * *`, insterCurrentWeatherToDb);
  cron.schedule(`13 01 * * *`, insterCurrentWeatherToDb);
  cron.schedule(`13 02 * * *`, insterCurrentWeatherToDb);
  cron.schedule(`13 03 * * *`, insterCurrentWeatherToDb);
}

module.exports = {
  cronJobs,
};
