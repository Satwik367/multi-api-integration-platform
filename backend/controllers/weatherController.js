const axios = require("axios");
const ApiLog = require("../models/ApiLog");

const getWeather = async (req, res) => {

    try {

        const { city } = req.query;

        if (!city) {

            return res.status(400).json({

                success: false,

                message: "City is required"

            });

        }

        const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather",
            {
                params: {
                    q: city,
                    appid: process.env.WEATHER_API_KEY,
                    units: "metric"
                }
            }
        );

        const weather = {

            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            windSpeed: response.data.wind.speed

        };

        if (req.user) {

            await ApiLog.create({

                user: req.user._id,

                api: "Weather API",

                status: "SUCCESS",

                request: {

                    city

                },

                response: weather

            });

        }

        res.json({

            success: true,

            weather

        });

    }

    catch (err) {

        if (req.user) {

            await ApiLog.create({

                user: req.user._id,

                api: "Weather API",

                status: "FAILED",

                request: req.query,

                response: {

                    error: err.message

                }

            });

        }

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

module.exports = {

    getWeather

};