const express = require("express");
const cors = require("cors");
const shipmentRouter = require("./routes/shipmentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/shipment", shipmentRouter);

module.exports = app;
