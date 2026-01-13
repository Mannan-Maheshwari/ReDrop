const express = require("express");
const cors = require("cors");
const { SerialPort, ReadlineParser } = require("serialport");

const app = express();
app.use(cors());

// CHANGE THIS to your COM port
const port = new SerialPort({
  path: "COM10",
  baudRate: 115200,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

let latestData = "";

// Read data from serial
parser.on("data", (data) => {
  console.log("Serial:", data);
  latestData = data;
});

// API for frontend
app.get("/serial", (req, res) => {
  res.json({ data: latestData });
});

// Start server
app.listen(5000, () => {
  console.log("Backend server running on port 5000");
});
