const express = require("express");
const morgan = require("morgan");

const dataRoutes = require("./routes/dataRoutes");
const tokenRoute = require("./routes/tokenRoute");
const controlRoute = require("./routes/controlRoute");
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
app.use("/gettoken", tokenRoute);
app.use("/control", controlRoute);

// cronJobs();
// sensorRain();
// multiChannelDevice("100186b2a2", { ch2: "off" });
// infoDevice("1001e7c86f");
// onDevice("10015a1c76");
// offDevice("1001e7c86f");
// valveToggle("1001e7c86f", "close");
// onDevice("10015a1c76");
// irrgationProccess();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
