const { client } = require("./clientEwelink20");

async function onDevice(deviceID) {
  await client.device.setThingStatus({
    type: 1,
    id: deviceID,
    params: { switch: "on" },
  });
}

module.exports = {
  onDevice,
};
