const ewelink = require("ewelink-api");
const { connection } = require("./connectToEwelink.js");

async function getDevice(deviceID) {
  const device = await connection.getDevice(deviceID);
  console.log(device);
}

module.exports = {
  getDevice,
};
