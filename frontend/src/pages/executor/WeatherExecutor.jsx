import { useState } from "react";
import {
    MapPin,
    Sun,
    Cloud,
    CloudRain,
    CloudDrizzle,
    CloudLightning,
    CloudSnow,
    CloudFog,
    Thermometer,
    Droplets,
    Wind,
} from "lucide-react";

import { getWeather } from "../../services/weatherService";
import Button from "../../components/ui/Button";

const weatherIcon = (description = "") => {

    const d = description.toLowerCase();

    if (d.includes("thunder")) return CloudLightning;
    if (d.includes("snow")) return CloudSnow;
    if (d.includes("drizzle")) return CloudDrizzle;
    if (d.includes("rain") || d.includes("shower")) return CloudRain;
    if (d.includes("mist") || d.includes("fog") || d.includes("haze")) return CloudFog;
    if (d.includes("cloud")) return Cloud;

    return Sun;

};

function StatItem({ icon: Icon, label, value }) {

    return (

        <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-signal-indigo-soft)] text-[var(--color-signal-indigo)]">
                <Icon size={16} />
            </div>

            <div>
                <p className="text-xs text-[var(--color-ink-faint)]">{label}</p>
                <p className="font-data text-sm font-medium tabular-data text-[var(--color-ink)]">{value}</p>
            </div>

        </div>

    );

}

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

                    <div className="mt-8 max-w-sm rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7">

                        <div className="flex items-center gap-1.5 text-sm text-[var(--color-ink-muted)]">
                            <MapPin size={14} />
                            {result.city}, {result.country}
                        </div>

                        <div className="mt-4 flex items-center justify-between">

                            <div>
                                <h2 className="font-data text-5xl font-medium tabular-data text-[var(--color-ink)]">
                                    {Math.round(result.temperature)}°C
                                </h2>
                                <p className="mt-1 text-sm capitalize text-[var(--color-ink-muted)]">
                                    {result.description}
                                </p>
                            </div>

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-signal-mint-soft)] text-[var(--color-signal-mint)]">
                                {(() => {
                                    const Icon = weatherIcon(result.description);
                                    return <Icon size={32} />;
                                })()}
                            </div>

                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--color-hairline)] pt-5">
                            <StatItem icon={Thermometer} label="Feels like" value={`${Math.round(result.feelsLike)}°C`} />
                            <StatItem icon={Droplets} label="Humidity" value={`${result.humidity}%`} />
                            <StatItem icon={Wind} label="Wind" value={`${result.windSpeed} m/s`} />
                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default WeatherExecutor;