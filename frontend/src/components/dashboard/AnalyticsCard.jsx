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
        "#22c55e",
        "#ef4444"
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
            className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8"
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

                    <h2 className="text-3xl font-bold text-white">

                        API Analytics

                    </h2>

                    <p className="mt-2 text-slate-400">

                        Overview of workflow execution and API performance.

                    </p>

                    <div className="mt-8 space-y-5">

                        <div className="flex justify-between">

                            <span className="text-slate-400">

                                Success Rate

                            </span>

                            <span className="font-bold text-green-400">

                                {successRate}%

                            </span>

                        </div>

                        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

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

                                className="h-full rounded-full bg-green-500"

                            />

                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">

                            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                                <p className="text-slate-400">

                                    Successful

                                </p>

                                <h3 className="mt-2 text-3xl font-bold text-green-400">

                                    {analytics.successfulCalls}

                                </h3>

                            </div>

                            <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                                <p className="text-slate-400">

                                    Failed

                                </p>

                                <h3 className="mt-2 text-3xl font-bold text-red-400">

                                    {analytics.failedCalls}

                                </h3>

                            </div>

                        </div>

                        <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 border border-indigo-500/20 p-6">

                            <h3 className="font-semibold text-xl text-white">

                                API Health

                            </h3>

                            <p className="mt-2 text-slate-300">

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