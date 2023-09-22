const ewelink = require("ewelink-api");
const { connection } = require("./connectToEwelink.js");

async function getDeviceChannelCount(deviceID) {
  //   const status = await connection.getDeviceChannelCount(c);
  //   const device = await connection.getDevice(deviceID);
  //   await connection.toggleDevice(deviceID);
  const status = await connection.toggleDevice("10015a198d");
  return status;
}

module.exports = {
  getDeviceChannelCount,
};
