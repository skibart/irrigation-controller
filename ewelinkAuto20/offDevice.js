const { client } = require("./clientEwelink20");

async function offDevice(deviceID) {
  console.log(client);
  const info = await client.device.setThingStatus({
    type: 1,
    id: deviceID,
    params: { switch: "off" },
  });
  console.log(info);
}

module.exports = {
  offDevice,
};
