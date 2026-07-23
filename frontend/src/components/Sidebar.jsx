import { NavLink } from "react-router-dom";

import {
    FaChartPie,
    FaStore,
    FaProjectDiagram,
    FaRobot,
    FaHistory,
    FaUser
} from "react-icons/fa";

function Sidebar() {

    const menu = [

        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaChartPie />
        },

        {
            name: "Marketplace",
            path: "/marketplace",
            icon: <FaStore />
        },

        {
            name: "Workflow",
            path: "/workflows",
            icon: <FaProjectDiagram />
        },

        {
            name: "Gemini AI",
            path: "/executor/gemini",
            icon: <FaRobot />
        },

        {
            name: "Activity Logs",
            path: "/logs",
            icon: <FaHistory />
        },

        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />
        }

    ];

    return (

        <aside className="w-72 min-h-screen bg-slate-900/70 backdrop-blur-2xl border-r border-white/10 text-white shadow-2xl">

            <div className="px-8 py-8 border-b border-white/10">

                <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

                    APIFlow AI

                </h1>

                <p className="mt-2 text-slate-400">

                    Intelligent API Workspace

                </p>

            </div>

            <nav className="mt-8 px-4 flex flex-col gap-2">

                {

                    menu.map((item) => (

                        <NavLink

                            key={item.path}

                            to={item.path}

                            className={({ isActive }) =>

                                `group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                                    isActive
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-600/30"
                                        : "text-slate-300 hover:bg-slate-800/70 hover:text-white hover:translate-x-1"
                                }`

                            }

                        >

                            <span className="text-xl transition-transform duration-300 group-hover:scale-110">

                                {item.icon}

                            </span>

                            <span className="font-medium">

                                {item.name}

                            </span>

                        </NavLink>

                    ))

                }

            </nav>

            <div className="absolute bottom-8 left-4 right-4">

                <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-5">

                    <h3 className="font-semibold">

                        APIFlow AI

                    </h3>

                    <p className="mt-2 text-sm text-slate-400">

                        Your all-in-one API integration platform powered by AI.

                    </p>

                </div>

            </div>

        </aside>

    );

}

export default Sidebar;