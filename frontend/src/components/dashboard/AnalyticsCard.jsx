import { motion } from "framer-motion";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

function AnalyticsCard({ analytics }) {

    const data = [
        {
            name: "Successful",
            value: analytics.successfulCalls
        },
        {
            name: "Failed",
            value: analytics.failedCalls
        }
    ];

    const COLORS = [
        "#33e6b3",
        "#ff6b57"
    ];

    const successRate =
        analytics.totalCalls === 0
            ? 0
            : Math.round(
                  (analytics.successfulCalls * 100) /
                      analytics.totalCalls
              );

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.5
            }}
            className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8"
        >
            <div className="flex flex-col lg:flex-row gap-10 items-center">

                {/* Chart */}

                <div className="w-full lg:w-1/2 h-80">

                    <ResponsiveContainer>

                        <PieChart>

                            <Pie
                                data={data}
                                innerRadius={70}
                                outerRadius={110}
                                paddingAngle={4}
                                dataKey="value"
                            >

                                {data.map((entry, index) => (

                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />

                                ))}

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

                {/* Statistics */}

                <div className="flex-1">

                    <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">

                        API Analytics

                    </h2>

                    <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                        Overview of workflow execution and API performance.

                    </p>

                    <div className="mt-8 space-y-5">

                        <div className="flex justify-between">

                            <span className="text-sm text-[var(--color-ink-muted)]">

                                Success Rate

                            </span>

                            <span className="font-data font-medium text-[var(--color-signal-mint)]">

                                {successRate}%

                            </span>

                        </div>

                        <div className="h-2 rounded-full bg-[var(--color-hairline)] overflow-hidden">

                            <motion.div

                                initial={{
                                    width: 0
                                }}

                                animate={{
                                    width: `${successRate}%`
                                }}

                                transition={{
                                    duration: 1
                                }}

                                className="h-full rounded-full bg-[var(--color-signal-mint)]"

                            />

                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">

                            <div className="rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-hairline)] p-5">

                                <p className="text-xs text-[var(--color-ink-muted)]">

                                    Successful

                                </p>

                                <h3 className="font-data mt-2 text-2xl font-medium tabular-data text-[var(--color-signal-mint)]">

                                    {analytics.successfulCalls}

                                </h3>

                            </div>

                            <div className="rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-hairline)] p-5">

                                <p className="text-xs text-[var(--color-ink-muted)]">

                                    Failed

                                </p>

                                <h3 className="font-data mt-2 text-2xl font-medium tabular-data text-[var(--color-signal-coral)]">

                                    {analytics.failedCalls}

                                </h3>

                            </div>

                        </div>

                        <div className="mt-8 rounded-xl bg-[var(--color-signal-indigo-soft)] border border-[var(--color-signal-indigo)]/20 p-6">

                            <h3 className="font-display font-semibold text-lg text-[var(--color-ink)]">

                                API Health

                            </h3>

                            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                                {successRate >= 95
                                    ? "Excellent performance. Your APIs are operating smoothly."
                                    : successRate >= 80
                                    ? "Good performance with occasional failures."
                                    : "Performance needs attention. Check recent failed requests."}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}

export default AnalyticsCard;