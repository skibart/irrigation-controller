async function dbInsertRainSensorData(
  connection,
  deviaceDBtable,
  deviceModel,
  params
) {
  try {
    const query =
      "INSERT INTO ?? (DeviceName, value, unix_time) VALUES (?, ?, UNIX_TIMESTAMP())";
    const unixTime = new Date().getTime();

    const [queryresult] = await connection.query(query, [
      deviaceDBtable,
      deviceModel,
      params,
      unixTime,
    ]);

    return queryResult.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = { dbInsertRainSensorData };
