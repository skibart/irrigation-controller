const express = require("express");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const path = require("path");
const {
  client,
  redirectUrl,
  randomString,
} = require("../ewelinkAuto20/config");

const router = express.Router();

router.get("/login", async (req, res) => {
  try {
    const loginUrl = await client.oauth.createLoginUrl({
      redirectUrl,
      grantType: "authorization_code",
      state: randomString(10),
    });

    res.redirect(loginUrl);
  } catch (error) {
    console.error("Error creating login URL:", error);
    res.status(500).send("Error creating login URL");
  }
});

router.get("/redirectUrl", async (req, res) => {
  try {
    const { code, region } = req.query;

    if (!code || !region) {
      return res.status(400).send("Missing code or region.");
    }

    const response = await client.oauth.getToken({
      region,
      redirectUrl,
      code,
    });

    response.region = region;
    const filename = "token2.json";
    const filePath = path.resolve(process.cwd(), filename);
    fs.writeFileSync(filePath, JSON.stringify(response));
    const responseData = {
      response,
      filePath,
    };

    res.send(responseData);
    console.log("Token response:", response);
  } catch (error) {
    console.error("Error handling redirect:", error);
    res.status(500).send("Error handling redirect");
  }
});

module.exports = router;
