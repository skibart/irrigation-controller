async function getRainFallData(connection, days) {
  const sql = `
      SELECT totalprecip_mm, date
      FROM weather_history_data
      WHERE DATE(date) >= CURDATE() - INTERVAL ? DAY
      GROUP BY DATE(date)
      ORDER BY date
      LIMIT ?;
    `;
  try {
    const [queryResult] = await connection.query(sql, [days, days]);
    return queryResult;
  } catch (error) {
    console.error("Error occurred while retrieving rainfall data:", error);
    throw error;
  }
}

module.exports = {
  getRainFallData,
};
