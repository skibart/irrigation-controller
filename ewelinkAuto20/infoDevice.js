const { client } = require("./clientEwelink20");

async function infoDevice(deviceID) {
  const result = await client.device.getThingStatus({
    type: 1,
    id: deviceID,
  });
  console.log(result);
}

module.exports = {
  infoDevice,
};
