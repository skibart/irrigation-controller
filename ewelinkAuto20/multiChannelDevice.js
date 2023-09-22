const { createClient } = require("./clientEwelink20");

async function multiChannelDevice(
  deviceID,
  { ch1 = "off", ch2 = "off", ch3 = "off", ch4 = "off" }
) {
  const client = await createClient();
  await client.device.setThingStatus({
    type: 1,
    id: deviceID,
    params: {
      switches: [
        { switch: ch1, outlet: 0 },
        { switch: ch2, outlet: 1 },
        { switch: ch3, outlet: 2 },
        { switch: ch4, outlet: 3 },
      ],
    },
  });
}

module.exports = {
  multiChannelDevice,
};
