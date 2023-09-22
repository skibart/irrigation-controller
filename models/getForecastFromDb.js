async function getForecastFromDb(connection) {
  const sql = `
  SELECT date, totalprecip_mm, daily_will_it_rain, daily_chance_of_rain
  FROM weather_forecast_data
  ORDER by id DESC
  LIMIT 1;
  `;

  try {
    const [queryResult] = await connection.query(sql);
    return queryResult;
  } catch (error) {
    console.error("Error occurred while retrieving rainfall data:", error);
    throw error;
  }
}

module.exports = {
  getForecastFromDb,
};
