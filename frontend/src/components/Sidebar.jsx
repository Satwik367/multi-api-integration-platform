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
            path: "/",
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

        <aside className="w-72 bg-slate-900 text-white min-h-screen shadow-xl">

            <div className="border-b border-slate-700 p-8">

                <h1 className="text-3xl font-bold">

                    APIFlow AI

                </h1>

                <p className="text-slate-400 mt-2">

                    Multi API Platform

                </p>

            </div>

            <nav className="mt-6 flex flex-col">

                {

                    menu.map((item)=>(

                        <NavLink

                            key={item.path}

                            to={item.path}

                            className={({isActive})=>

                                `mx-4 my-1 flex items-center gap-4 rounded-lg px-5 py-4 transition-all duration-200 ${
                                    isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-slate-800 text-slate-300"
                                }`
                            }

                        >

                            <span className="text-xl">

                                {item.icon}

                            </span>

                            <span className="font-medium">

                                {item.name}

                            </span>

                        </NavLink>

                    ))

                }

            </nav>

        </aside>

    );

}

export default Sidebar;