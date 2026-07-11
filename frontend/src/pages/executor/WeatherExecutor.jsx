import { useState } from "react";

import { getWeather } from "../../services/weatherService";

function WeatherExecutor() {

    const [city, setCity] = useState("");

    const [result, setResult] = useState(null);

    const execute = async () => {

        try {

            const data = await getWeather(city);

            setResult(data.weather);

        }

        catch {

            alert("Unable to Fetch");

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                Weather API

            </h1>

            <div className="mt-6 flex gap-4">

                <input

                    className="border p-3 rounded w-96"

                    placeholder="City"

                    value={city}

                    onChange={(e)=>setCity(e.target.value)}

                />

                <button

                    onClick={execute}

                    className="bg-blue-600 text-white px-6 rounded"

                >

                    Execute

                </button>

            </div>

            {

                result && (

                    <pre

                        className="mt-8 bg-gray-900 text-green-400 p-6 rounded overflow-auto"

                    >

                        {JSON.stringify(result,null,4)}

                    </pre>

                )

            }

        </div>

    );

}

export default WeatherExecutor;