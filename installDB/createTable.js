const { connectToDatabase } = require("../models/db");

async function createTable(tableName) {
  const sql = `
    CREATE TABLE IF NOT EXISTS ?? (
      id int NOT NULL AUTO_INCREMENT,
      DeviceName varchar(16) NOT NULL,
      value varchar(16) NOT NULL,
      unix_time int(13) NULL,
      created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY(id)
    )
  `;
  try {
    const connection = await connectToDatabase();
    const [queryResult] = await connection.query(sql, [tableName]);
    let infomassage = "table: " + tableName + " created successfully.";
    return infomassage;
  } catch (error) {
    console.error("Error occurred while creating weather table:", error);
    throw error;
  }
}

module.exports = {
  createTable,
};
