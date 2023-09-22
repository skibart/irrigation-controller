const ewelink = require("ewelink-api");
const { connection } = require("./connectToEwelink.js");

async function openSocket(callback) {
  await connection.getCredentials();
  socket = await connection.openWebSocket(async (data) => {
    callback(data);
  });
}
module.exports = {
  openSocket,
};
