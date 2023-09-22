const { getRainTimeData } = require("../controllers/controller");

async function rainTime() {
  const rainINFO = {
    lastRainStart: null,
    lastRainStop: null,
    HoursSinceLastRain: null,
    wetTimeSecond: null,
    stillWet: null,
    currentUnixTime: Math.floor(Date.now() / 1000),
  };

  const rainArray = await getRainTimeData();

  if (rainArray.length >= 2) {
    if (rainArray[rainArray.length - 2].value == "rainStop") {
      rainINFO.lastRainStop = rainArray[rainArray.length - 2].unix_time;
      rainINFO.lastRainStart = rainArray[rainArray.length - 1].unix_time;
      rainINFO.wetTimeSecond =
        rainArray[rainArray.length - 2].unix_time -
        rainArray[rainArray.length - 1].unix_time;
      rainINFO.stillWet = "no";
      rainINFO.HoursSinceLastRain = Math.round(
        (rainINFO.currentUnixTime - rainINFO.lastRainStop) / 60 / 60
      );
    } else if (rainArray[rainArray.length - 2].value == "rainStart") {
      rainINFO.stillWet = "yes";
      rainINFO.lastRainStart = rainArray[rainArray.length - 2].unix_time;
      const timeNow = Math.floor(Date.now() / 1000);
      rainINFO.wetTimeSecond =
        timeNow - rainArray[rainArray.length - 2].unix_time;
      rainINFO.HoursSinceLastRain = 0;
    } else {
      rainINFO.stillWet = "no";
    }
  } else {
    // Handle the case where there is insufficient data in rainArray.
    rainINFO.stillWet = "unknown";
  }

  return rainINFO;
}

module.exports = {
  rainTime,
};
