import {
    FaCloudSun,
    FaGithub,
    FaRobot,
    FaNewspaper,
    FaExchangeAlt,
    FaProjectDiagram
} from "react-icons/fa";

import QuickActionCard from "./QuickActionCard";

function QuickActions() {

    const actions = [

        {
            title: "Weather",
            description: "Live weather forecasts and current conditions.",
            icon: <FaCloudSun />,
            color: "bg-yellow-500",
            to: "/executor/weather"
        },

        {
            title: "GitHub",
            description: "Analyze GitHub profiles and repositories.",
            icon: <FaGithub />,
            color: "bg-slate-700",
            to: "/executor/github"
        },

        {
            title: "News",
            description: "Stay updated with the latest headlines.",
            icon: <FaNewspaper />,
            color: "bg-red-500",
            to: "/executor/news"
        },

        {
            title: "Currency",
            description: "Convert currencies with real-time rates.",
            icon: <FaExchangeAlt />,
            color: "bg-green-600",
            to: "/executor/currency"
        },

        {
            title: "Gemini AI",
            description: "Ask AI anything using Google's Gemini.",
            icon: <FaRobot />,
            color: "bg-purple-600",
            to: "/executor/gemini"
        },

        {
            title: "Workflows",
            description: "Create and execute custom API workflows.",
            icon: <FaProjectDiagram />,
            color: "bg-blue-600",
            to: "/workflows"
        }

    ];

    return (

        <section>

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-white">

                    Quick Launch

                </h2>

                <p className="mt-2 text-slate-400">

                    Access your most frequently used services.

                </p>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                {

                    actions.map((action, index) => (

                        <QuickActionCard

                            key={action.title}

                            title={action.title}

                            description={action.description}

                            icon={action.icon}

                            color={action.color}

                            to={action.to}

                            delay={index * 0.08}

                        />

                    ))

                }

            </div>

        </section>

    );

}

export default QuickActions;