import { Link } from "react-router-dom";

import {
    FaCloudSun,
    FaGithub,
    FaNewspaper,
    FaExchangeAlt,
    FaRobot,
    FaProjectDiagram
} from "react-icons/fa";

function APIMarketplace() {

    const apis = [

        {
            name: "Weather API",
            description: "Get live weather information for any city.",
            icon: <FaCloudSun className="text-5xl text-yellow-500" />,
            route: "/executor/weather",
            color: "bg-yellow-50"
        },

        {
            name: "GitHub API",
            description: "Search GitHub users and repositories.",
            icon: <FaGithub className="text-5xl text-black" />,
            route: "/executor/github",
            color: "bg-gray-100"
        },

        {
            name: "News API",
            description: "Read the latest news articles worldwide.",
            icon: <FaNewspaper className="text-5xl text-red-500" />,
            route: "/executor/news",
            color: "bg-red-50"
        },

        {
            name: "Currency API",
            description: "Convert currencies using real-time rates.",
            icon: <FaExchangeAlt className="text-5xl text-green-600" />,
            route: "/executor/currency",
            color: "bg-green-50"
        },

        {
            name: "Gemini AI",
            description: "Ask Google's Gemini AI anything.",
            icon: <FaRobot className="text-5xl text-purple-600" />,
            route: "/executor/gemini",
            color: "bg-purple-50"
        },

        {
            name: "Workflow Builder",
            description: "Create and execute multi-step API workflows.",
            icon: <FaProjectDiagram className="text-5xl text-blue-600" />,
            route: "/workflows",
            color: "bg-blue-50"
        }

    ];

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-10">

                API Marketplace

            </h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {

                    apis.map((api,index)=>(

                        <div

                            key={index}

                            className={`${api.color} rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300`}

                        >

                            <div className="mb-6">

                                {api.icon}

                            </div>

                            <h2 className="text-2xl font-bold">

                                {api.name}

                            </h2>

                            <p className="text-gray-600 mt-4 mb-8">

                                {api.description}

                            </p>

                            <Link

                                to={api.route}

                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"

                            >

                                Launch

                            </Link>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default APIMarketplace;