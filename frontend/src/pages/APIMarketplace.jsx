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
            icon: <FaCloudSun />,
            route: "/executor/weather",
            tone: "text-[#e6b333] bg-[#e6b333]/10"
        },

        {
            name: "GitHub API",
            description: "Search GitHub users and repositories.",
            icon: <FaGithub />,
            route: "/executor/github",
            tone: "text-[var(--color-ink)] bg-[var(--color-surface-raised)] border border-[var(--color-hairline)]"
        },

        {
            name: "News API",
            description: "Read the latest news articles worldwide.",
            icon: <FaNewspaper />,
            route: "/executor/news",
            tone: "text-[var(--color-signal-coral)] bg-[var(--color-signal-coral-soft)]"
        },

        {
            name: "Currency API",
            description: "Convert currencies using real-time rates.",
            icon: <FaExchangeAlt />,
            route: "/executor/currency",
            tone: "text-[var(--color-signal-mint)] bg-[var(--color-signal-mint-soft)]"
        },

        {
            name: "Gemini AI",
            description: "Ask Google's Gemini AI anything.",
            icon: <FaRobot />,
            route: "/executor/gemini",
            tone: "text-[var(--color-signal-indigo)] bg-[var(--color-signal-indigo-soft)]"
        },

        {
            name: "Workflow Builder",
            description: "Create and execute multi-step API workflows.",
            icon: <FaProjectDiagram />,
            route: "/workflows",
            tone: "text-[var(--color-signal-indigo)] bg-[var(--color-signal-indigo-soft)]"
        }

    ];

    return (

        <div>

            <div className="mb-10">

                <h1 className="font-display text-3xl font-semibold text-[var(--color-ink)]">

                    API Marketplace

                </h1>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">

                    Browse every integration available in your workspace.

                </p>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {

                    apis.map((api, index) => (

                        <div

                            key={index}

                            className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 transition-colors duration-300 hover:border-[var(--color-signal-indigo)]/40"

                        >

                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${api.tone}`}>

                                {api.icon}

                            </div>

                            <h2 className="font-display text-xl font-semibold text-[var(--color-ink)]">

                                {api.name}

                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">

                                {api.description}

                            </p>

                            <Link

                                to={api.route}

                                className="mt-6 inline-block rounded-xl bg-[var(--color-signal-indigo)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-signal-indigo)]/90"

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