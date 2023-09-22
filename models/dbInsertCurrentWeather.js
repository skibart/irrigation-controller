async function dbInsertCurrentWeather(connection, valuesToAdd) {
  const {
    dBtable,
    date,
    temp_c,
    pressure_mb,
    precip_mm,
    humidity,
    feelslike_c,
    vis_km,
    uv,
    gust_kph,
    wind_kph,
    wind_degree,
    air_quality_co,
    air_quality_no2,
    air_quality_o3,
    air_quality_so2,
    air_quality_pm2_5,
    air_quality_pm10,
    condition_icon,
    condition_text,
  } = valuesToAdd;
  try {
    const query = `
        INSERT INTO ?? (date, temp_c, pressure_mb, precip_mm, humidity, feelslike_c, vis_km, uv, gust_kph, wind_kph, wind_degree, air_quality_co, air_quality_no2, air_quality_o3, air_quality_so2, air_quality_pm2_5, air_quality_pm10, condition_icon, condition_text)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

    const [queryResult] = await connection.query(query, [
      dBtable,
      date,
      temp_c,
      pressure_mb,
      precip_mm,
      humidity,
      feelslike_c,
      vis_km,
      uv,
      gust_kph,
      wind_kph,
      wind_degree,
      air_quality_co,
      air_quality_no2,
      air_quality_o3,
      air_quality_so2,
      air_quality_pm2_5,
      air_quality_pm10,
      condition_icon,
      condition_text,
    ]);

    return queryResult.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = { dbInsertCurrentWeather };
