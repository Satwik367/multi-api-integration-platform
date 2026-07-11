const axios = require("axios");

const getWeather = async (req, res) => {

    try {

        const { city } = req.query;

        if (!city) {

            return res.status(400).json({
                success: false,
                message: "City is required"
            });

        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

        const response = await axios.get(url);

        const data = response.data;

        res.json({

            success: true,

            weather: {

                city: data.name,

                country: data.sys.country,

                temperature: data.main.temp,

                humidity: data.main.humidity,

                feelsLike: data.main.feels_like,

                description: data.weather[0].description,

                windSpeed: data.wind.speed

            }

        });

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: "Unable to fetch weather"

        });

    }

};

module.exports = {

    getWeather

};