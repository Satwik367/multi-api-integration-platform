import {
    FaHome,
    FaCloud,
    FaRobot,
    FaUser
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

    const menus = [

        {
            name: "Dashboard",
            path: "/",
            icon: <FaHome />
        },

        {
            name: "API Marketplace",
            path: "/marketplace",
            icon: <FaCloud />
        },

        {
            name: "AI Assistant",
            path: "/ai",
            icon: <FaRobot />
        },

        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />
        }

    ];

    return (

        <div className="w-64 h-screen bg-slate-900 text-white">

            <div className="text-2xl font-bold p-6">

                API Hub

            </div>

            {

                menus.map((item) => (

                    <Link

                        key={item.name}

                        to={item.path}

                        className="flex items-center gap-4 px-6 py-4 hover:bg-slate-700"

                    >

                        {item.icon}

                        {item.name}

                    </Link>

                ))

            }

        </div>

    );

}

export default Sidebar;