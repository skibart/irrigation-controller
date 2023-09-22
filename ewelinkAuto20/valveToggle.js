const { createClient } = require("./clientEwelink20");

async function valveToggle(deviceID, locationPosition) {
  const client = await createClient();
  //open vale = 0, close vale = 100
  locationToSet = 0;
  if (locationPosition === "open") {
    locationToSet = 0;
  } else {
    locationToSet = 100;
  }
  const info = await client.device.setThingStatus({
    type: 1,
    id: deviceID,

    params: { location: locationToSet },
  });
}

module.exports = {
  valveToggle,
};
