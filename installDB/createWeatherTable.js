const { connectToDatabase } = require("../models/db");

async function createWeatherTable() {
  const sql = `
  CREATE TABLE IF NOT EXISTS weather_current_data (
    id int NOT NULL AUTO_INCREMENT,
    date VARCHAR(10) DEFAULT NULL,
    last_updated DATETIME NOT NULL DEFAULT current_timestamp,
    temp_c FLOAT DEFAULT NULL,
    pressure_mb FLOAT DEFAULT NULL,
    precip_mm FLOAT DEFAULT NULL,
    humidity FLOAT DEFAULT NULL,
    feelslike_c FLOAT DEFAULT NULL,
    vis_km FLOAT DEFAULT NULL,
    uv FLOAT DEFAULT NULL,
    gust_kph FLOAT DEFAULT NULL,
    wind_kph FLOAT DEFAULT NULL,
    wind_degree FLOAT DEFAULT NULL,
    air_quality_co FLOAT DEFAULT NULL,
    air_quality_no2 FLOAT DEFAULT NULL,
    air_quality_o3 FLOAT DEFAULT NULL,
    air_quality_so2 FLOAT DEFAULT NULL,
    air_quality_pm2_5 FLOAT DEFAULT NULL,
    air_quality_pm10 FLOAT DEFAULT NULL,
    condition_icon VARCHAR(256) DEFAULT NULL,
    condition_text VARCHAR(256) DEFAULT NULL,
    PRIMARY KEY (id)
    )
  `;

  try {
    const connection = await connectToDatabase();
    const [queryResult] = await connection.query(sql);
    console.log("Weather table created successfully.");
    return queryResult;
  } catch (error) {
    console.error("Error occurred while creating weather table:", error);
    throw error;
  }
}

module.exports = {
  createWeatherTable,
};
