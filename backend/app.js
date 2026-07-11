const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.json({

        message: "Backend Running"

    });

});

app.use("/api/auth", authRoutes);

app.use("/api/weather", weatherRoutes);

module.exports = app;