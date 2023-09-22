const { creatDB } = require("./createDB");
const { createForecastTable } = require("./createForecastTable");
const { createWeatherHistoryTable } = require("./createWeatherHistoryTable");
const { createWeatherTable } = require("./createWeatherTable");
const { createTable } = require("./createTable");

const config = require("../config");

async function install() {
  //   await creatDB(config.database.dbNAME); // for using it, first remove in connection file name of db.
  // await createForecastTable();
  // await createWeatherHistoryTable();
  // await createWeatherTable();
  // await createTableForEveryDevice();
  // await createTable("rain_sensor");
  // await createTable("humidity_sensor");
  //in future auto create db for every device
  // async function createTableForEveryDevice() {
  //   const devices = config.sonoffDevice;
  //   for (const device in devices) {
  //     const dbTableName = devices[device].id.concat("_", device);
  //     await createTable(dbTableName);
  //   }
  // }
}

module.exports = {
  install,
};
