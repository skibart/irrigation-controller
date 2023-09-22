const cron = require("node-cron");
const config = require("../config");

const { insterForecastToDb } = require("../utils/insterFetchToDb");
const { insterWeatherHistoryToDb } = require("../utils/insterFetchToDb");
const { insterCurrentWeatherToDb } = require("../utils/insterFetchToDb");

function cronJobs() {
  cron.schedule(`14 55 * * *`, insterForecastToDb);
  cron.schedule(`14 56 * * *`, insterWeatherHistoryToDb);
  cron.schedule(`14 57 * * *`, insterCurrentWeatherToDb);
}

module.exports = {
  cronJobs,
};
