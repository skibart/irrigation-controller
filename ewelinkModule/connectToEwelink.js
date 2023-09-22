const ewelink = require("ewelink-api");
const config = require("../config");

const connection = new ewelink({
  email: config.sonoff.email,
  password: config.sonoff.password,
  region: config.sonoff.region,
  APP_ID: config.sonoff.appId,
  APP_SECRET: config.sonoff.appSecret,
});

module.exports = {
  connection,
};
