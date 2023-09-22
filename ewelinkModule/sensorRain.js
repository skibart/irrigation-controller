const { openSocket } = require("./openSocket");
const { addDataRainSensor } = require("../controllers/controller");
const config = require("../config");

let currentValue;

function sensorRain() {
  function addSensorData(data) {
    if (
      data.deviceid == config.sonoffRainSensor.deviceId &&
      !(data.params.switch == currentValue)
    ) {
      currentValue = data.params.switch;
      if (
        data.params.switch == config.sonoffRainSensor.rainSensorStatusWhenNoWet
      ) {
        addDataRainSensor(
          config.sonoffRainSensor.rainSensorDbName,
          config.sonoffRainSensor.deviceId,
          config.sonoffRainSensor.rainStopTxt
        );
      } else {
        addDataRainSensor(
          config.sonoffRainSensor.rainSensorDbName,
          config.sonoffRainSensor.deviceId,
          config.sonoffRainSensor.rainStartTxt
        );
      }
    }
  }

  openSocket(addSensorData);
}

module.exports = {
  sensorRain,
};
