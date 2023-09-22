const { connectToDatabase } = require("../models/db");

const { dbInsterForecast } = require("../models/dbInsterForecast");
const { dbInsertHistoryWeather } = require("../models/dbInsertHistoryWeather");
const { dbInsertCurrentWeather } = require("../models/dbInsertCurrentWeather");
const { dbInsertRainSensorData } = require("../models/dbInsertRainSensorData");
const {
  dbInsertRainSensorStatus,
} = require("../models/dbInsertRainSensorStatus");

const { getWeatherFromDb } = require("../models/getWeatherFromDb");
const { getForecastFromDb } = require("../models/getForecastFromDb");
const { getRainFallData } = require("../models/getRainFallData");
const { getRainTimeSensorData } = require("../models/getRainTimeSensorData");

async function addDataForecast(data) {
  try {
    const connection = await connectToDatabase();
    const insertedId = await dbInsterForecast(connection, data);
    connection.end();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addDataWeatherHistory(data) {
  try {
    const connection = await connectToDatabase();
    const insertedId = await dbInsertHistoryWeather(connection, data);
    connection.end();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addDataCurrentWeather(data) {
  try {
    const connection = await connectToDatabase();
    const insertedId = await dbInsertCurrentWeather(connection, data);
    connection.end();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addRainSensorData(deviaceDBtable, deviceModel, params) {
  try {
    const connection = await connectToDatabase();
    const insertedId = await dbInsertRainSensorData(
      connection,
      deviaceDBtable,
      deviceModel,
      params
    );
    connection.end();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getCurrentWeather() {
  try {
    const connection = await connectToDatabase();
    const [result] = await getWeatherFromDb(connection);
    connection.end();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getForecast() {
  try {
    const connection = await connectToDatabase();
    const [result] = await getForecastFromDb(connection);
    connection.end();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getAmountOfRainFall(days) {
  try {
    const connection = await connectToDatabase();
    const [result] = await getRainFallData(connection, days);
    connection.end();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addDataRainSensor(deviaceDBtable, deviceModel, params) {
  try {
    const connection = await connectToDatabase();
    const result = await dbInsertRainSensorStatus(
      connection,
      deviaceDBtable,
      deviceModel,
      params
    );
    connection.end();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getRainTimeData() {
  try {
    const connection = await connectToDatabase();
    const result = await getRainTimeSensorData(connection);
    connection.end();
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = {
  addDataForecast,
  addDataWeatherHistory,
  addDataCurrentWeather,
  addRainSensorData,
  getCurrentWeather,
  getForecast,
  getAmountOfRainFall,
  addDataRainSensor,
  getRainTimeData,
};
