require("dotenv").config();

module.exports = {
  // Database configuration
  database: {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.MYSQL_USER || "your_db_user",
    password: process.env.MYSQL_PASSWORD,
    dbNAME: process.env.MYSQL_DATABASE_NAME || "your_db_name",
  },

  ewelinkApi: {
    appId: "3OgcAwtganOmuOn5VdC6wYM3FaMnFUN2",
    appSecret: "abe7lktOTIjRmCMUI5uX46jh9ho2YlHH",
    region: "eu",
  },

  dbTableName: {
    weather_current_data: process.env.MYSQL_DB_WEATHER_CURRENT_DATA || "",
    weather_history_data: process.env.MYSQL_DB_WEATHER_HISTORY_DATA || "",
    weather_forecast_data: process.env.MYSQL_DB_WEATHER_FORECAST_DATA || "",
  },
  sonoff: {
    email: process.env.SONOFF_EMAIL,
    password: process.env.SONOFF_PW,
    region: process.env.SONOFF_REGION,
    appId: process.env.SONOFF_APP_ID,
    appSecret: process.env.SONOFF_APP_SECRET,
  },
  sonoffRainSensor: {
    deviceId: "10015a198d",
    rainSensorStatusWhenNoWet: "off",
    rainStartTxt: "rainStart",
    rainStopTxt: "rainStop",
    rainSensorDbName: "rain_sensor",
  },
  sonoffDevice: {
    humidity: { name: "humiditySensor", id: "100175830f" },
    rainSensor: { name: "rainSensor", id: "10015a198d" },
  },

  // Server configuration
  server: {
    port: process.env.PORT || 3000,
  },

  // API configuration
  api: {
    apiKey: process.env.API_WEATHER_KEY || "",
    apiUrl: process.env.API_WEATHER_HOST || "weatherapi-com.p.rapidapi.com",
    apiPostion: process.env.API_WEATHER_POSITIONS || "46.583206, 12.192010",
  },

  cronFetchApiWeather: {
    hour: 6,
    minute: 15,
  },

  //Irigation configuration
  irigiationSettings: {
    hoursToSkipAfterRain:
      10 || "// how many hours must pass since the last rain to skip",
    lawnWetToAbortHours: 5 || " // minium hours since lawn not be wet",
    mmPerM2In2DaysToAbort: 15 || " // mm rain in last 2 days to skip",
    mmPerM2ForecastTodayToAbort: 10 || " // minimum forecast rain to skip",
    chanceOfRainToAbort: 75 || " // percent of chance to rain to skip",
    humidityToAbort: 30 || " // if there is more humidity skip",
  },

  irrigationDevice: {
    irrigationMainSwitchId: "100175830f",
    irrigationControlerId: "100186b2a2",
  },
  irrigationZones: {
    zone: 4,
    zone1time: 2,
    zone2time: 1,
    zone3time: 1,
    zone4time: 1,
  },

  // Other configuration options...
};
