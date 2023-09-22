const express = require("express");
const morgan = require("morgan");

const dataRoutes = require("./routes/dataRoutes");
const views = require("./views/views.js");

const { cronJobs } = require("./utils/cron");

const app = express();
const port = process.env.PORT;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/", views);
app.use("/api", dataRoutes);

cronJobs();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
