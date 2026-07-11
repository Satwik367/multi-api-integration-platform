import { useState } from "react";

import { getWeather } from "../services/weatherService";

function Weather() {

    const [city, setCity] = useState("");

    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {

        try {

            const data = await getWeather(city);

            setWeather(data.weather);

        }

        catch {

            alert("City not found");

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-6">

                Weather API

            </h1>

            <div className="flex gap-4">

                <input

                    className="border p-3 rounded w-80"

                    placeholder="Enter City"

                    value={city}

                    onChange={(e) => setCity(e.target.value)}

                />

                <button

                    onClick={fetchWeather}

                    className="bg-blue-600 text-white px-6 rounded"

                >

                    Search

                </button>

            </div>

            {

                weather && (

                    <div className="mt-8 bg-white shadow rounded-lg p-6">

                        <h2 className="text-2xl font-bold">

                            {weather.city}, {weather.country}

                        </h2>

                        <p>🌡 Temperature: {weather.temperature} °C</p>

                        <p>💧 Humidity: {weather.humidity}%</p>

                        <p>🌬 Wind: {weather.windSpeed} m/s</p>

                        <p>🤒 Feels Like: {weather.feelsLike} °C</p>

                        <p>☁ Condition: {weather.description}</p>

                    </div>

                )

            }

        </div>

    );

}

export default Weather;