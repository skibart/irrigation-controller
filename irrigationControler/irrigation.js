const { collectAllData } = require("./collectAllData");
const { irrigationConditionsStepOne } = require("./irrigationCondidtion");
const { toggleDevice } = require("../ewelinkModule/toggleDevice");
const { valveToggle } = require("../ewelinkAuto20/valveToggle");
const { onDevice } = require("../ewelinkAuto20/onDevice");
const { irigiationSettings, irrigationZones } = require("../config");
const { irrigationDevice } = require("../config");
const { multiChannelDevice } = require("../ewelinkAuto20/multiChannelDevice");

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
  const mainSwitch = irrigationDevice.irrigationMainSwitchId;
  onDevice(mainSwitch);
  console.log("main switch was turn on");
  setTimeout(function () {
    valveToggle("1001e7c86f", "open");
    console.log("The main valve is being opened");
  }, 2 * 60 * 1000);
}

// Start irigation process

function startIrrigation() {
  const controlerId = irrigationDevice.irrigationControlerId;
  const time = irrigationZones.zone3time;
  multiChannelDevice(controlerId, { ch3: "on" });
  setTimeout(function () {
    multiChannelDevice(controlerId, { ch3: "off" });
  }, time * 60 * 1000);
}

async function irrgationProccess() {
  // const conditionPass = IrigationCheckAllData();
  const conditionPass = true;
  if (conditionPass) {
    irrigationPrepareHardware();
    setTimeout(startIrrigation, 3 * 60 * 1000);
  }
}

module.exports = {
  irrgationProccess,
};
