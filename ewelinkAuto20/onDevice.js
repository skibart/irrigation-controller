const { createClient } = require("./clientEwelink20");

async function onDevice(deviceID) {
  const client = await createClient();
  const info = await client.device.setThingStatus({
    type: 1,
    id: deviceID,
    params: { switch: "on" },
  });
  console.log(info);
}

module.exports = {
  onDevice,
};
