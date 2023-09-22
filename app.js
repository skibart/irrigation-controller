const express = require("express");
const morgan = require("morgan");

const dataRoutes = require("./routes/dataRoutes");
const views = require("./views/views.js");

const { insterForecastToDb } = require("./utils/insterFetchToDb");

const app = express();
const port = process.env.PORT;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/", views);
app.use("/api", dataRoutes);

insterForecastToDb();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
