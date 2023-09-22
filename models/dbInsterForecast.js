async function dbInsterForecast(connection, valuesToAdd) {
  const {
    dbName,
    date,
    avgtemp_c,
    maxwind_kph,
    totalprecip_mm,
    totalsnow_cm,
    avgvis_km,
    avghumidity,
    daily_will_it_rain,
    daily_chance_of_rain,
    daily_will_it_snow,
    daily_chance_of_snow,
    condition_icon,
    condition_text,
  } = valuesToAdd;
  try {
    const query = `
    INSERT INTO ?? (
      date,      
      avgtemp_c,
      maxwind_kph,
      totalprecip_mm,
      totalsnow_cm,
      avgvis_km,
      avghumidity,
      daily_will_it_rain,
      daily_chance_of_rain,
      daily_will_it_snow,
      daily_chance_of_snow,
      condition_icon,
      condition_text)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    const [results] = await connection.query(query, [
      dbName,
      date,
      avgtemp_c,
      maxwind_kph,
      totalprecip_mm,
      totalsnow_cm,
      avgvis_km,
      avghumidity,
      daily_will_it_rain,
      daily_chance_of_rain,
      daily_will_it_snow,
      daily_chance_of_snow,
      condition_icon,
      condition_text,
    ]);

    return results.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = { dbInsterForecast };
