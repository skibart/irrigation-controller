async function dbInsertHistoryWeather(connection, valuesToAdd) {
  const {
    dbNameTable,
    avgtemp_c,
    maxwind_kph,
    totalprecip_mm,
    avghumidity,
    date,
    date_epoch,
  } = valuesToAdd;
  try {
    const query = `
    INSERT INTO ?? (    
      avgtemp_c,
      maxwind_kph,
      totalprecip_mm,
      avghumidity,
      date,
      date_epoch
      )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

    const [results] = await connection.query(query, [
      dbNameTable,
      avgtemp_c,
      maxwind_kph,
      totalprecip_mm,
      avghumidity,
      date,
      date_epoch,
    ]);

    return results.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = { dbInsertHistoryWeather };
