const { connectToDatabase } = require("../models/db");

async function createWeatherHistoryTable() {
  const sql = `
  CREATE TABLE IF NOT EXISTS weather_history_data (
    id int NOT NULL AUTO_INCREMENT,
    last_updated DATETIME NOT NULL DEFAULT current_timestamp,
    avgtemp_c FLOAT DEFAULT NULL,
    maxwind_kph FLOAT DEFAULT NULL,
    totalprecip_mm FLOAT DEFAULT NULL,
    avghumidity FLOAT DEFAULT NULL,
    date VARCHAR(32) DEFAULT NULL,
    date_epoch FLOAT DEFAULT NULL,
    PRIMARY KEY (id)
    )
  `;

  try {
    const connection = await connectToDatabase();
    const [queryResult] = await connection.query(sql);
    console.log("History Weather table created successfully.");
    return queryResult;
  } catch (error) {
    console.error("Error occurred while creating weather table:", error);
    throw error;
  }
}

module.exports = {
  createWeatherHistoryTable,
};
