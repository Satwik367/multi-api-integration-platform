import { NavLink } from "react-router-dom";

import {
    FaChartPie,
    FaStore,
    FaProjectDiagram,
    FaRobot,
    FaHistory,
    FaUser
} from "react-icons/fa";

import FlowLine from "./ui/FlowLine";

function Sidebar() {

    const menu = [
        { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
        { name: "Marketplace", path: "/marketplace", icon: <FaStore /> },
        { name: "Workflow", path: "/workflows", icon: <FaProjectDiagram /> },
        { name: "Gemini AI", path: "/executor/gemini", icon: <FaRobot /> },
        { name: "Activity Logs", path: "/logs", icon: <FaHistory /> },
        { name: "Profile", path: "/profile", icon: <FaUser /> }
    ];

    return (

        <aside className="relative flex w-72 min-h-screen flex-col bg-[var(--color-surface)] border-r border-[var(--color-hairline)] text-[var(--color-ink)]">

            <div className="px-8 py-8 border-b border-[var(--color-hairline)]">

                <h1 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-ink)]">
                    APIFlow <span className="text-[var(--color-signal-indigo)]">AI</span>
                </h1>

                <p className="mt-1.5 text-sm text-[var(--color-ink-muted)]">
                    Intelligent API Workspace
                </p>

            </div>

            <nav className="mt-6 flex flex-1 flex-col gap-1 px-4">

                {menu.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `group relative flex items-center gap-4 rounded-xl px-5 py-3.5 transition-colors duration-200 ${
                                isActive
                                    ? "bg-[var(--color-signal-indigo-soft)] text-white"
                                    : "text-[var(--color-ink-muted)] hover:bg-white/[0.03] hover:text-[var(--color-ink)]"
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 overflow-hidden rounded-full">
                                        <FlowLine orientation="vertical" tone="indigo" />
                                    </span>
                                )}

                                <span className="text-lg">
                                    {item.icon}
                                </span>

                                <span className="text-[15px] font-medium">
                                    {item.name}
                                </span>
                            </>
                        )}
                    </NavLink>

                ))}

            </nav>

            <div className="m-4 rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface-raised)] p-5">

                <div className="mb-3">
                    <FlowLine orientation="horizontal" tone="mint" />
                </div>

                <h3 className="font-display text-sm font-medium text-[var(--color-ink)]">
                    APIFlow AI
                </h3>

                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-ink-muted)]">
                    Your all-in-one API integration platform, powered by AI.
                </p>

            </div>

        </aside>

    );

}

export default Sidebar;