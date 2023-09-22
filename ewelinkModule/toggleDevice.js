const ewelink = require('ewelink-api')
const { connection } = require('./connectToEwelink.js');


async function toggleDevice(deviceID, channel) {
    const status = await connection.toggleDevice(deviceID, channel);
}

module.exports = {
    toggleDevice
}