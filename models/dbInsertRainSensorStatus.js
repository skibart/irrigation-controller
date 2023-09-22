async function dbInsertRainSensorStatus(
  connection,
  deviaceDBtable,
  deviceModel,
  params
) {
  try {
    const query =
      "INSERT INTO ?? (DeviceName, value, unix_time) VALUES (?, ?, UNIX_TIMESTAMP())";
    let unixTime = new Date().getTime();
    const [queryresult] = await connection.query(query, [
      deviaceDBtable,
      deviceModel,
      params,
      unixTime,
    ]);
  } catch (error) {
    throw error;
  }
}

module.exports = { dbInsertRainSensorStatus };
