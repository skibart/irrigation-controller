const { createClient } = require("./clientEwelink20");

async function offDevice(deviceID) {
  const client = await createClient();
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
