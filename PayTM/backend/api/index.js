const express = require('express');
const cors = require("cors");
const rootRouter = require("../routes/index");

const app = express();

app.use(cors({
  origin: "https://paymentsdemorishi.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Your routes AFTER CORS
app.use("/api/v1", rootRouter);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "API is running! Use /api/v1/..." });
});

module.exports = app;
