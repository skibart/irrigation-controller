const axios = require("axios");
const config = require("../config");

async function fetchApiCurrentWeather() {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
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
    const valuesToAdd = {
      dBtable: config.dbTableName.weather_current_data,
      date: response.data.current.last_updated,
      temp_c: response.data.current.temp_c,
      pressure_mb: response.data.current.pressure_mb,
      precip_mm: response.data.current.precip_mm,
      humidity: response.data.current.humidity,
      feelslike_c: response.data.current.feelslike_c,
      vis_km: response.data.current.vis_km,
      uv: response.data.current.uv,
      gust_kph: response.data.current.gust_kph,
      wind_kph: response.data.current.wind_kph,
      wind_degree: response.data.current.wind_degree,
      air_quality_co: response.data.current.air_quality.co,
      air_quality_no2: response.data.current.air_quality.no2,
      air_quality_o3: response.data.current.air_quality.o3,
      air_quality_so2: response.data.current.air_quality.so2,
      air_quality_pm2_5: response.data.current.air_quality.pm2_5,
      air_quality_pm10: response.data.current.air_quality.pm10,
      condition_icon: response.data.current.condition.icon,
      condition_text: response.data.current.condition.text,
    };
    return valuesToAdd;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchApiCurrentWeather,
};
