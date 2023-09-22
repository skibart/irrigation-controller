async function irrigationConditionsStepOne(data, settings) {
  if (data.stillWet === "yes") {
    console.log("step 1 false");
    return false;
  }

  if (data.HoursSinceLastRain < settings.hoursToSkipAfterRain) {
    console.log("step 2 false");
    return false;
  }

  if (data.wetTime > settings.lawnWetToAbortHours) {
    console.log("step 3 false");
    return false;
  }

  if (data.totalRainFallinLast2days > settings.mmPerM2In2DaysToAbort) {
    console.log("step 4 false");
    return false;
  }

  if (data.ForecastTodayRain > settings.mmPerM2ForecastTodayToAbort) {
    console.log("step 5 false");
    return false;
  }

  if (data.ForecastChainceOfRain > settings.chanceOfRainToAbort) {
    console.log("step 6 false");
    return false;
  }

  if (!data.NowRaining === 1) {
    console.log("step 7 false");
    return false;
  }

  return true;
}

module.exports = {
  irrigationConditionsStepOne,
};
