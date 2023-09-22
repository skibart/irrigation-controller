const cron = require("node-cron");
const config = require("../config");

const { insterForecastToDb } = require("../utils/insterFetchToDb");
const { insterWeatherHistoryToDb } = require("../utils/insterFetchToDb");
const { insterCurrentWeatherToDb } = require("../utils/insterFetchToDb");

function cronJobs() {
  const hour = config.cronFetchApiWeather.hour;
  const minute = config.cronFetchApiWeather.minute;

  cron.schedule(`15 13 * * *`, insterForecastToDb);
  cron.schedule(`20 13 * * *`, insterWeatherHistoryToDb);
  cron.schedule(`25 13 * * *`, insterCurrentWeatherToDb);
}

module.exports = {
  cronJobs,
};
