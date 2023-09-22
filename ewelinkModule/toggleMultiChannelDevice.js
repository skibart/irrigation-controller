const ewelink = require("ewelink-api");
const { connection } = require("./connectToEwelink.js");

async function toggleMultiChannelDevice(deviceID, channel) {
  const status = await connection.toggleDevice(deviceID, channel);
}

module.exports = {
  toggleMultiChannelDevice,
};
