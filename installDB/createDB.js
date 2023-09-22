const { connectToDatabase } = require("../models/db");

async function creatDB(dbName) {
  const sql = "CREATE DATABASE IF NOT EXISTS ??";
  try {
    const connection = await connectToDatabase();
    const [queryResult] = await connection.query(sql, [dbName]);
    connection.end();
    console.log("Database created successfully.");
    return queryResult;
  } catch (error) {
    console.error("Error occurred while creating weather table:", error);
    throw error;
  }
}

module.exports = {
  creatDB,
};
