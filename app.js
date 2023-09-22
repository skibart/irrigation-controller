const express = require("express");
const morgan = require("morgan");

const dataRoutes = require("./routes/dataRoutes");
const views = require("./views/views.js");

const { cronJobs } = require("./utils/cron");
const { install } = require("./installDB/install");
const { irrgation } = require("./irrigationControler/irrigation");

const { IrigationMainFunction } = require("./irrigationControler/irrigation");

const { offDevice } = require("./ewelinkAuto20/offDevice");
const { getDevice } = require("./ewelinkModule/getDevice");
const { infoDevice } = require("./ewelinkAuto20/infoDevice");
const { multiChannelDevice } = require("./ewelinkAuto20/multiChannelDevice");
const { toggleDevice } = require("./ewelinkAuto20/toggleDevice");

const { sensorRain } = require("./ewelinkModule/sensorRain");

const app = express();
const port = process.env.PORT;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/", views);
app.use("/api", dataRoutes);

// install();
// cronJobs();
// irrgation();
// offDevice("10015a1c76");
// getDevice("100186b2a2");
// multiChannelDevice("100186b2a2", { ch2: "on" });

// toggleDevice("100175830f");

sensorRain();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
