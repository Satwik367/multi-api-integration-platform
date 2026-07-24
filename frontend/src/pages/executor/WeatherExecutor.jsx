import { useState } from "react";

import { getWeather } from "../../services/weatherService";
import Button from "../../components/ui/Button";

function WeatherExecutor() {

    const [city, setCity] = useState("");

    const [result, setResult] = useState(null);

    const [loading, setLoading] = useState(false);

    const execute = async () => {

        try {

            setLoading(true);

            const data = await getWeather(city);

            setResult(data.weather);

        }

        catch {

            alert("Unable to fetch");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <div className="mb-8">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    Weather API

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Get live weather information for any city.

                </p>

            </div>

            <div className="flex gap-4">

                <input

                    className="w-full max-w-md rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none focus:border-[var(--color-signal-indigo)] transition-colors"

                    placeholder="City"

                    value={city}

                    onChange={(e)=>setCity(e.target.value)}

                />

                <Button

                    onClick={execute}

                    loading={loading}

                >

                    Execute

                </Button>

            </div>

            {

                result && (

                    <pre

                        className="font-data mt-8 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-signal-mint)] overflow-auto"

                    >

                        {JSON.stringify(result,null,4)}

                    </pre>

                )

            }

        </div>

    );

}

export default WeatherExecutor;