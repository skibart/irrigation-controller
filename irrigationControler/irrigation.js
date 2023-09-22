const { collectAllData } = require("./collectAllData");
const { irrigationConditionsStepOne } = require("./irrigationCondidtion");
const { toggleDevice } = require("../ewelinkModule/toggleDevice");
const {
  getDeviceChannelCount,
} = require("../ewelinkModule/getDeviceChannelCount");
const { irigiationSettings, irrigationZones } = require("../config");
const { irrigationDevice } = require("../config");

//Check if every condition for start is true
async function IrigationCheckAllData() {
  let weatherAndSensorData = await collectAllData();
  const checkConndition = await irrigationConditionsStepOne(
    weatherAndSensorData,
    irigiationSettings
  );
  if (checkConndition === true) {
    return true;
  } else {
    return false;
  }
}

// Turn On transformer and irrigation controler
// Open valve
async function irrigationPrepareHardware() {
  console.log("wlaczam sprzety");
  const mainSwitch = irrigationDevice.irrigationMainSwitchId;
  console.log();
  toggleDevice(mainSwitch);
  //then valve
}

// Start irigation process

function startIrrigation() {
  console.log("rozpoczynam podlewanie");
  const controlerId = irrigationDevice.irrigationControlerId;
  const time = irrigationZones.zone1time;
  toggleDevice(controlerId, 1);
  setTimeout(function () {
    toggleDevice(controlerId, 1);
  }, time * 60 * 1000);
}

async function irrgation() {
  const channels = await getDeviceChannelCount("100175830f");
  console.log(channels);
  // const conditionPass = IrigationCheckAllData();
  // const conditionPass = true;
  // if (conditionPass) {
  //   irrigationPrepareHardware();
  //   setTimeout(startIrrigation, 3 * 60 * 1000);
  // }
}

module.exports = {
  irrgation,
};
