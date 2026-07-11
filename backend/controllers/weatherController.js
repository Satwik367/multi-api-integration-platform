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

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json({
            success: false,
            error: err.response?.data || err.message
        });

    }

};

module.exports = {
    getWeather
};