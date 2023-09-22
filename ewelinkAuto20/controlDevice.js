const eWeLink = require("ewelink-api-next").default;
const fs = require("fs");

const controlDeviceDemo = async () => {
  const _config = {
    appId: "3OgcAwtganOmuOn5VdC6wYM3FaMnFUN2", // App ID, which needs to be configured in the eWeLink open platform
    appSecret: "abe7lktOTIjRmCMUI5uX46jh9ho2YlHH", // App Secret, which needs to be configured in the eWeLink open platform
    region: "eu", //Feel free, it will be automatically updated after login
    requestRecord: true, // Request record, default is false
    // logObj: console, // Log object, default is console
  };

  const client = new eWeLink.WebAPI(_config);

  // If the file does not exist, directly report an error
  if (!fs.existsSync("./token.json")) {
    throw new Error("token.json not found, please run login.js first");
  }

  // get token
  let LoggedInfo = JSON.parse(fs.readFileSync("./token.json", "utf-8"));
  // console.info(LoggedInfo);
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

  async function toggleSth() {
    // let doIT = await client.device.getThingStatus({
    //   type: 1,
    //   id: "10015a198d",
    // });

    let doIT2 = await client.device.setThingStatus({
      type: 1,
      id: "10015a198d",
      params: { switch: "off" },
    });
    console.log(doIT2);
  }

  toggleSth();

  async function demo() {
    try {
      let thingList = await client.device.getAllThingsAllPages({}); // { status: 200, error: 0, msg: "", data: { thingList: [{ itemType: 1, itemData: {...} }], total: 1 } };
      console.log(JSON.stringify(thingList, null, 2));
      if (thingList?.error === 0) {
        thingList = thingList.data.thingList;
        console.log(thingList);
        // Control the first single channel device, just an example
        if (thingList[0]?.itemData.extra.uiid === 1) {
          await client.device.setThingStatus({
            type: 1,
            id: thingList[0].itemData.deviceid,
            params: {
              switch: "on", // Specific control instructions: https://coolkit-technologies.github.io/eWeLink-API/#/en/UIIDProtocol
            },
          });
        }
        // Control the first dual channel device, just an example
        if (thingList[0]?.itemData.extra.uiid === 4) {
          await client.device.setThingStatus({
            type: 1,
            id: thingList[0].itemData.deviceid,
            params: {
              switches: [
                { switch: "off", outlet: 0 },
                { switch: "off", outlet: 1 },
                { switch: "off", outlet: 2 },
                { switch: "off", outlet: 3 },
              ],
            },
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  // Get device list
};

controlDeviceDemo();

module.exports = {
  controlDeviceDemo,
};
