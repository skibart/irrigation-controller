const config = require("../config");

const rainSensorDbName = config.sonoffRainSensor.rainSensorDbName;
async function getRainTimeSensorData(connection) {
  const sql = `SELECT * FROM \`${rainSensorDbName}\` ORDER BY \`id\` DESC LIMIT 2`;
  try {
    const [queryResult] = await connection.query(sql);
    return queryResult;
  } catch (error) {
    console.error("Error occurred while retrieving rainfall data:", error);
    throw error;
  }
}

module.exports = {
  getRainTimeSensorData,
};
