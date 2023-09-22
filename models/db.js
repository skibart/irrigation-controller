const mysql = require("mysql2/promise");
const config = require("../config");

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.dbNAME,
  });
  return connection;
}

module.exports = { connectToDatabase };
