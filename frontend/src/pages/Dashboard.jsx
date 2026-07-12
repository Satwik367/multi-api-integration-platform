import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    FaCloudSun,
    FaGithub,
    FaRobot,
    FaNewspaper,
    FaExchangeAlt,
    FaProjectDiagram
} from "react-icons/fa";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

    const [analytics, setAnalytics] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setAnalytics(data.analytics);

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!analytics) {

        return (

            <div className="p-8">

                Loading Dashboard...

            </div>

        );

    }

    const chartData = [

        {

            name: "Success",

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

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold">

                    Dashboard

                </h1>

                <p className="text-gray-500 mt-2">

                    Welcome back to APIFlow AI

                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Total API Calls

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {analytics.totalCalls}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Successful Calls

                    </p>

                    <h2 className="text-4xl font-bold text-green-600 mt-3">

                        {analytics.successfulCalls}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Failed Calls

                    </p>

                    <h2 className="text-4xl font-bold text-red-600 mt-3">

                        {analytics.failedCalls}

                    </h2>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <p className="text-gray-500">

                        Workflows

                    </p>

                    <h2 className="text-4xl font-bold text-blue-600 mt-3">

                        {analytics.workflows}

                    </h2>

                </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-8">

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Success vs Failed

                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <PieChart>

                            <Pie
                                data={chartData}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >

                                {

                                    chartData.map((entry,index)=>(

                                        <Cell

                                            key={index}

                                            fill={COLORS[index]}

                                        />

                                    ))

                                }

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-bold mb-6">

                        Quick Actions

                    </h2>

                    <div className="grid grid-cols-2 gap-4">

                        <Link
                            to="/executor/weather"
                            className="bg-yellow-100 rounded-lg p-5 text-center hover:shadow-lg"
                        >

                            <FaCloudSun className="text-4xl mx-auto mb-3 text-yellow-500" />

                            Weather

                        </Link>

                        <Link
                            to="/executor/github"
                            className="bg-gray-100 rounded-lg p-5 text-center hover:shadow-lg"
                        >

                            <FaGithub className="text-4xl mx-auto mb-3" />

                            GitHub

                        </Link>

                        <Link
                            to="/executor/news"
                            className="bg-red-100 rounded-lg p-5 text-center hover:shadow-lg"
                        >

                            <FaNewspaper className="text-4xl mx-auto mb-3 text-red-500" />

                            News

                        </Link>

                        <Link
                            to="/executor/currency"
                            className="bg-green-100 rounded-lg p-5 text-center hover:shadow-lg"
                        >

                            <FaExchangeAlt className="text-4xl mx-auto mb-3 text-green-600" />

                            Currency

                        </Link>

                        <Link
                            to="/executor/gemini"
                            className="bg-purple-100 rounded-lg p-5 text-center hover:shadow-lg"
                        >

                            <FaRobot className="text-4xl mx-auto mb-3 text-purple-600" />

                            Gemini

                        </Link>

                        <Link
                            to="/workflows"
                            className="bg-blue-100 rounded-lg p-5 text-center hover:shadow-lg"
                        >

                            <FaProjectDiagram className="text-4xl mx-auto mb-3 text-blue-600" />

                            Workflows

                        </Link>

                    </div>

                </div>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold mb-6">

                    Recent Activity

                </h2>

                {

                    analytics.recentActivity.length === 0

                    ?

                    (

                        <p>

                            No activity yet.

                        </p>

                    )

                    :

                    analytics.recentActivity.map((log)=>(

                        <div

                            key={log._id}

                            className="flex justify-between border-b py-4"

                        >

                            <div>

                                <h3 className="font-semibold">

                                    {log.api}

                                </h3>

                                <p className="text-sm text-gray-500">

                                    {

                                        new Date(

                                            log.createdAt

                                        ).toLocaleString()

                                    }

                                </p>

                            </div>

                            <span

                                className={`font-bold ${
                                    log.status==="SUCCESS"
                                    ?
                                    "text-green-600"
                                    :
                                    "text-red-600"
                                }`}

                            >

                                {log.status}

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default Dashboard;