const ewelink = require("ewelink-api");
const { connectionToEwelink } = require("./connectToEwelink.js");

async function openSocket(callback) {
  const connection = await connectionToEwelink();
  await connection.getCredentials();
  socket = await connection.openWebSocket(async (data) => {
    callback(data);
  });
}
module.exports = {
  openSocket,
};
