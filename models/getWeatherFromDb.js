async function getWeatherFromDb(connection) {
  const sql = `
    SELECT date, precip_mm
    FROM weather_current_data
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
  getWeatherFromDb,
};
