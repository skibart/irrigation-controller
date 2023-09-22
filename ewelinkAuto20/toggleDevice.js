const { createClient } = require("./clientEwelink20");

async function toggleDevice(deviceID) {
  const client = await createClient();
  const response = await client.device.getThingStatus({
    id: deviceID,
    type: 1,
  });

  async function getOppositeStatus() {
    if ((await response.data.params.switch) === "on") {
      return "off";
    } else {
      return "on";
    }
  }

  const status = await getOppositeStatus(); // Await the result of the async function here

  await client.device.setThingStatus({
    type: 1,
    id: deviceID,
    params: { switch: status },
  });
}

module.exports = {
  toggleDevice,
};
