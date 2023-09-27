const express = require("express");
const morgan = require("morgan");

const dataRoutes = require("./routes/dataRoutes");
const tokenRoute = require("./routes/tokenRoute");
const tokenShow = require("./routes/tokenShow");
const views = require("./views/views.js");

const { cronJobs } = require("./utils/cron");
const { sensorRain } = require("./ewelinkModule/sensorRain");
const { multiChannelDevice } = require("./ewelinkAuto20/multiChannelDevice");
const { infoDevice } = require("./ewelinkAuto20/infoDevice");
const { offDevice } = require("./ewelinkAuto20/offDevice");
const { onDevice } = require("./ewelinkAuto20/onDevice");
const { valveToggle } = require("./ewelinkAuto20/valveToggle");

const { irrgationProccess } = require("./irrigationControler/irrigation");

const app = express();
const port = process.env.PORT;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/", views);
app.use("/api", dataRoutes);
app.use("/token", tokenShow);
app.use("/gettoken", tokenRoute);

app.get("/tokenread", async (req, res) => {
  try {
    const data = await fs.readFileSync("token.json");
    res.send(data);
  } catch (error) {
    console.error("Error creating show token URL:", error);
    res.status(500).send("Error showing token");
  }
});

// cronJobs();
// sensorRain();
// multiChannelDevice("100186b2a2", { ch2: "off" });
// infoDevice("1001e7c86f");
// onDevice("10015a1c76");
// offDevice("1001e7c86f");
// valveToggle("1001e7c86f", "close");
// onDevice("100175830f");
// irrgationProccess();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
