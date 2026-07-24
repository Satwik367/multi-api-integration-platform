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
            color: "bg-[#e6b333]",
            to: "/executor/weather"
        },

        {
            title: "GitHub",
            description: "Analyze GitHub profiles and repositories.",
            icon: <FaGithub />,
            color: "bg-[var(--color-surface-raised)] border border-[var(--color-hairline)]",
            to: "/executor/github"
        },

        {
            title: "News",
            description: "Stay updated with the latest headlines.",
            icon: <FaNewspaper />,
            color: "bg-[var(--color-signal-coral)]",
            to: "/executor/news"
        },

        {
            title: "Currency",
            description: "Convert currencies with real-time rates.",
            icon: <FaExchangeAlt />,
            color: "bg-[var(--color-signal-mint)]",
            to: "/executor/currency"
        },

        {
            title: "Gemini AI",
            description: "Ask AI anything using Google's Gemini.",
            icon: <FaRobot />,
            color: "bg-[var(--color-signal-indigo)]",
            to: "/executor/gemini"
        },

        {
            title: "Workflows",
            description: "Create and execute custom API workflows.",
            icon: <FaProjectDiagram />,
            color: "bg-[var(--color-signal-indigo)]",
            to: "/workflows"
        }

    ];

    return (

        <section>

            <div className="mb-8">

                <h2 className="font-display text-2xl font-semibold text-[var(--color-ink)]">

                    Quick Launch

                </h2>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

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