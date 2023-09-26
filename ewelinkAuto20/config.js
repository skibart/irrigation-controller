const eWeLink = require("ewelink-api-next").default;
const { ewelinkApi } = require("../config");

// https://dev.ewelink.cc/
// Login
// Apply to become a developer
// Create an application

const _config = {
  appId: ewelinkApi.appId, // App ID, which needs to be configured in the eWeLink open platform
  appSecret: ewelinkApi.appSecret, // App Secret, which needs to be configured in the eWeLink open platform
  region: ewelinkApi.region, //Feel free, it will be automatically updated after login
  requestRecord: true, // Request record, default is false
  // logObj: console, // Log object, default is console
};

if (!_config.appId || !_config.appSecret) {
  throw new Error("Please configure appId and appSecret");
}

const client = new eWeLink.WebAPI(_config);

const redirectUrl = ewelinkApi.redirectURL; // Redirect URL, which needs to be configured in the eWeLeLink open platform

// Generate random strings
const randomString = (length) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const maxPos = chars.length;
  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};

module.exports = {
  client,
  redirectUrl,
  randomString,
};
