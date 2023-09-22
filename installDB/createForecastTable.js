const { connectToDatabase } = require("../models/db");

async function createForecastTable() {
  const sql = `
  CREATE TABLE IF NOT EXISTS weather_forecast_data (
    id int NOT NULL AUTO_INCREMENT,
    date VARCHAR(10) DEFAULT NULL,
    last_updated DATETIME NOT NULL DEFAULT current_timestamp,
    avgtemp_c FLOAT DEFAULT NULL,
    maxwind_kph FLOAT DEFAULT NULL,
    totalprecip_mm FLOAT DEFAULT NULL,
    totalsnow_cm FLOAT DEFAULT NULL,
    avgvis_km FLOAT DEFAULT NULL,
    avghumidity FLOAT DEFAULT NULL,
    daily_will_it_rain FLOAT DEFAULT NULL,
    daily_chance_of_rain FLOAT DEFAULT NULL,
    daily_will_it_snow FLOAT DEFAULT NULL,
    daily_chance_of_snow FLOAT DEFAULT NULL,
    condition_icon VARCHAR(256) DEFAULT NULL,
    condition_text VARCHAR(256) DEFAULT NULL,
    PRIMARY KEY (id)
    )
  `;

  try {
    const connection = await connectToDatabase();
    const [queryResult] = await connection.query(sql);
    console.log("Forecast table created successfully.");
    return queryResult;
  } catch (error) {
    console.error("Error occurred while creating weather table:", error);
    throw error;
  }
}

module.exports = {
  createForecastTable,
};
