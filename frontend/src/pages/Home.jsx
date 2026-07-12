import { Link } from "react-router-dom";

import {
    FaCloudSun,
    FaGithub,
    FaRobot,
    FaExchangeAlt,
    FaNewspaper,
    FaProjectDiagram,
    FaChartLine,
    FaLock
} from "react-icons/fa";

function Home() {

    const features = [

        {
            icon: <FaCloudSun className="text-5xl text-yellow-500" />,
            title: "Weather API",
            desc: "Get live weather information from anywhere in the world."
        },

        {
            icon: <FaGithub className="text-5xl" />,
            title: "GitHub API",
            desc: "Search GitHub users and repositories instantly."
        },

        {
            icon: <FaNewspaper className="text-5xl text-red-500" />,
            title: "News API",
            desc: "Latest headlines from around the world."
        },

        {
            icon: <FaExchangeAlt className="text-5xl text-green-600" />,
            title: "Currency API",
            desc: "Real-time currency conversion."
        },

        {
            icon: <FaRobot className="text-5xl text-purple-600" />,
            title: "Gemini AI",
            desc: "Use Google's Gemini AI directly from your dashboard."
        },

        {
            icon: <FaProjectDiagram className="text-5xl text-blue-600" />,
            title: "Workflow Engine",
            desc: "Build multi-step API automations."
        }

    ];

    return (

        <div className="min-h-screen bg-slate-100">

            <nav className="bg-white shadow">

                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

                    <h1 className="text-3xl font-bold">

                        APIFlow AI

                    </h1>

                    <div className="flex gap-4">

                        <Link

                            to="/login"

                            className="px-6 py-2 rounded-lg border"

                        >

                            Login

                        </Link>

                        <Link

                            to="/register"

                            className="px-6 py-2 rounded-lg bg-blue-600 text-white"

                        >

                            Register

                        </Link>

                    </div>

                </div>

            </nav>

            <section className="max-w-7xl mx-auto px-8 py-24">

                <div className="text-center">

                    <h1 className="text-6xl font-bold">

                        Build.

                        <span className="text-blue-600">

                            Integrate.

                        </span>

                        Automate.

                    </h1>

                    <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">

                        APIFlow AI is a modern API integration platform that lets developers connect multiple APIs, automate workflows, monitor executions and leverage AI to process results.

                    </p>

                    <div className="flex justify-center gap-6 mt-10">

                        <Link

                            to="/register"

                            className="bg-blue-600 text-white px-8 py-4 rounded-xl"

                        >

                            Get Started

                        </Link>

                        <Link

                            to="/login"

                            className="border px-8 py-4 rounded-xl"

                        >

                            Login

                        </Link>

                    </div>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-8 pb-20">

                <h2 className="text-4xl font-bold text-center mb-12">

                    Platform Features

                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {

                        features.map((feature,index)=>(

                            <div

                                key={index}

                                className="bg-white rounded-2xl shadow-lg p-8"

                            >

                                {feature.icon}

                                <h3 className="text-2xl font-bold mt-6">

                                    {feature.title}

                                </h3>

                                <p className="mt-4 text-gray-600">

                                    {feature.desc}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </section>

            <section className="bg-slate-900 text-white py-20">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

                    <div>

                        <FaChartLine className="text-5xl mx-auto mb-4 text-blue-400"/>

                        <h3 className="text-2xl font-bold">

                            Analytics

                        </h3>

                        <p className="text-slate-300 mt-3">

                            Monitor API usage and workflow execution.

                        </p>

                    </div>

                    <div>

                        <FaProjectDiagram className="text-5xl mx-auto mb-4 text-green-400"/>

                        <h3 className="text-2xl font-bold">

                            Workflow Automation

                        </h3>

                        <p className="text-slate-300 mt-3">

                            Chain multiple APIs together effortlessly.

                        </p>

                    </div>

                    <div>

                        <FaLock className="text-5xl mx-auto mb-4 text-red-400"/>

                        <h3 className="text-2xl font-bold">

                            Secure Authentication

                        </h3>

                        <p className="text-slate-300 mt-3">

                            JWT based authentication with protected APIs.

                        </p>

                    </div>

                </div>

            </section>

        </div>

    );

}

export default Home;