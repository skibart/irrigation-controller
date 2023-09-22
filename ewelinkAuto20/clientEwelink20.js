const { ewelinkApi } = require("../config");

const eWeLink = require("ewelink-api-next").default;
const fs = require("fs");

const _config = {
  appId: ewelinkApi.appId, // App ID, which needs to be configured in the eWeLink open platform
  appSecret: ewelinkApi.appSecret, // App Secret, which needs to be configured in the eWeLink open platform
  region: ewelinkApi.region, // Feel free, it will be automatically updated after login
  requestRecord: true, // Request record, default is false
};

const client = new eWeLink.WebAPI(_config);

// If the file does not exist, directly report an error
if (!fs.existsSync("./token.json")) {
  throw new Error("token.json not found, please run login.js first");
}

async function refreshToken() {
  let LoggedInfo = JSON.parse(fs.readFileSync("./token.json", "utf-8"));
  console.info(LoggedInfo);
  client.at = LoggedInfo.data?.accessToken;
  client.region = LoggedInfo?.region || "eu";
  client.setUrl(LoggedInfo?.region || "eu");
  // Check if the token has expired, and refresh the token if it has expired
  if (
    LoggedInfo.data?.atExpiredTime < Date.now() &&
    LoggedInfo.data?.rtExpiredTime > Date.now()
  ) {
    console.log("Token expired, refreshing token");
    const refreshStatus = await client.user.refreshToken({
      rt: LoggedInfo.data?.refreshToken,
    });
    console.log("here", refreshStatus);
    if (refreshStatus.error === 0) {
      // You can also use built-in storage
      // client.storage.set('token', {...})
      fs.writeFileSync(
        "./token.json",
        JSON.stringify({
          status: 200,
          responseTime: 0,
          error: 0,
          msg: "",
          data: {
            accessToken: refreshStatus?.data?.at,
            atExpiredTime: Date.now() + 2592000000,
            refreshToken: refreshStatus?.data?.rt,
            rtExpiredTime: Date.now() + 5184000000,
          },
          region: client.region,
        })
      );
      LoggedInfo = JSON.parse(fs.readFileSync("./token.json", "utf-8"));
    }
  }

  if (LoggedInfo.data?.rtExpiredTime < Date.now()) {
    console.log(
      "Failed to refresh token, need to log in again to obtain token"
    );
    return;
  }
}

refreshToken();

module.exports = {
  client,
};
