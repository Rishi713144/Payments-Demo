const express = require('express');
const cors = require("cors");
const rootRouter = require("../routes/index");

const app = express();

// CORS FIRST – before all other middleware
app.use(cors({
  origin: "https://payment-app-delta-two.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // ← add OPTIONS for preflight
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
