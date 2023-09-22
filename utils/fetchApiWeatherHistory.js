const axios = require("axios");
const config = require("../config");

const { getYesterdayDate } = require("./date");

async function fetchApiWeatherHistory() {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/history.json",
    params: {
      q: config.api.apiPostion,
      dt: getYesterdayDate(),
    },
    headers: {
      "X-RapidAPI-Key": config.api.apiKey,
      "X-RapidAPI-Host": config.api.apiUrl,
    },
  };

  try {
    const response = await axios.request(options);

    let prefixResponse = response.data.forecast.forecastday[0].day;
    const valuesToAdd = {
      dbNameTable: config.dbTableName.weather_history_data,
      avgtemp_c: prefixResponse.avgtemp_c,
      maxwind_kph: prefixResponse.maxwind_kph,
      totalprecip_mm: prefixResponse.totalprecip_mm,
      avghumidity: prefixResponse.avghumidity,
      date: response.data.forecast.forecastday[0].date,
      date_epoch: response.data.forecast.forecastday[0].date_epoch,
    };

    return valuesToAdd;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchApiWeatherHistory,
};
