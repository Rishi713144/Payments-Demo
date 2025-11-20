const express = require('express');
const cors = require("cors");
const rootRouter = require("../routes/index");

const app = express();

const cors = require("cors");

app.use(cors({
  origin: ["https://payment-app-delta-two.vercel.app"]
}));
app.use(express.json());

app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
  res.json({ message: "API is running! Use /api/v1/..." });
});
module.exports = app;
