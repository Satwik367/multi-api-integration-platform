import { useEffect, useState } from "react";

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

            <div className="p-8 text-xl">

                Loading Dashboard...

            </div>

        );

    }

    return (

        <div className="p-8 bg-slate-100 min-h-screen">

            <h1 className="text-4xl font-bold mb-8">

                Dashboard

            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="text-gray-500">

                        Total API Calls

                    </h2>

                    <p className="text-4xl font-bold mt-4">

                        {analytics.totalCalls}

                    </p>

                </div>

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="text-gray-500">

                        Successful Calls

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-green-600">

                        {analytics.successfulCalls}

                    </p>

                </div>

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="text-gray-500">

                        Failed Calls

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-red-600">

                        {analytics.failedCalls}

                    </p>

                </div>

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="text-gray-500">

                        Workflows

                    </h2>

                    <p className="text-4xl font-bold mt-4 text-blue-600">

                        {analytics.workflows}

                    </p>

                </div>

            </div>

            <div className="bg-white rounded-xl shadow mt-10 p-6">

                <h2 className="text-2xl font-bold mb-6">

                    Recent Activity

                </h2>

                {

                    analytics.recentActivity.length === 0 ? (

                        <p>

                            No API Requests Yet

                        </p>

                    ) : (

                        analytics.recentActivity.map((log)=>(

                            <div

                                key={log._id}

                                className="flex justify-between border-b py-4"

                            >

                                <div>

                                    <h3 className="font-bold">

                                        {log.api}

                                    </h3>

                                    <p className="text-gray-500">

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

                    )

                }

            </div>

            <div className="bg-white rounded-xl shadow mt-10 p-6">

                <h2 className="text-2xl font-bold mb-6">

                    Connected APIs

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    <div className="border rounded-lg p-4 text-center">

                        🌤 Weather API

                    </div>

                    <div className="border rounded-lg p-4 text-center">

                        🐙 GitHub API

                    </div>

                    <div className="border rounded-lg p-4 text-center">

                        📰 News API

                    </div>

                    <div className="border rounded-lg p-4 text-center">

                        💱 Currency API

                    </div>

                    <div className="border rounded-lg p-4 text-center">

                        🤖 Gemini AI

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;