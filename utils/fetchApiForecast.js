const axios = require("axios");
const config = require("../config");

async function fetchApiForecast() {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: config.api.apiPostion,
      days: "1",
      aqi: "yes",
      alerts: "yes",
    },
    headers: {
      "X-RapidAPI-Key": config.api.apiKey,
      "X-RapidAPI-Host": config.api.apiUrl,
    },
  };

  try {
    const response = await axios.request(options);
    const prefixData = response.data.forecast.forecastday[0].day;
    const valuesToAdd = {
      dbName: config.dbTableName.weather_forecast_data,
      date: response.data.forecast.forecastday[0].date,
      avgtemp_c: prefixData.avgtemp_c,
      maxwind_kph: prefixData.maxwind_kph,
      totalprecip_mm: prefixData.totalprecip_mm,
      totalsnow_cm: prefixData.totalsnow_cm,
      avgvis_km: prefixData.avgvis_km,
      avghumidity: prefixData.avghumidity,
      daily_will_it_rain: prefixData.daily_will_it_rain,
      daily_chance_of_rain: prefixData.daily_chance_of_rain,
      daily_will_it_snow: prefixData.daily_will_it_snow,
      daily_chance_of_snow: prefixData.daily_chance_of_snow,
      condition_icon: prefixData.condition.icon,
      condition_text: prefixData.condition.text,
    };
    return valuesToAdd;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchApiForecast,
};
